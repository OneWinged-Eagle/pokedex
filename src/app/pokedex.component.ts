import { animate, state, style, transition, trigger, Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Rx";

import { Pokemon } from "./pokemon/pokemon";
import { PokemonsService } from "./pokemon/pokemons.service";

import { Skill } from "./skill/skill";
import { SkillsService } from "./skill/skills.service";

import { Type } from "./type/type";
import { TypesService } from "./type/types.service";

@Component(
{
  selector: "pokedex",
  templateUrl: "./pokedex.component.html",
  styleUrls: ["./pokedex.component.css"],
  animations: [
    trigger("pkmInOut", [
      state("in", style({ transform: "translateX(0)" })),
      transition(":enter",
      [
        style({ opacity: 0, transform: "translateX(100%)", offset: 0}),
        animate(300, style({ opacity: 1, transform: "translateX(0)", offset: 1.0}))
      ]),
      transition(":leave",
      [
        style({ opacity: 1, transform: "translateX(0)", offset: 0}),
        animate(300, style({ opacity: 0, transform: "translateX(-100%)", offset: 1.0}))
      ])
    ])
  ],
  providers:
  [
    PokemonsService,
    SkillsService,
    TypesService
  ]
})

export class PokedexComponent implements OnInit
{
  pokemons: Pokemon[] = [];
  skills: Skill[] = [];
  types: Type[];

  toSort: string;
  asc: boolean;

  constructor(private pokemonsService: PokemonsService, private skillsService: SkillsService, private typesService: TypesService) {}

  getData(): void
  {
    Observable.forkJoin(this.pokemonsService.getPokemons(), this.skillsService.getSkills(), this.typesService.getTypes())
              .subscribe(
                data =>
                {
                  this.types = data[2];

                  for (let skillJson of data[1])
                    this.skills.push(new Skill(skillJson));

                  for (let pokemonJson of data[0])
                    this.pokemons.push(new Pokemon(pokemonJson, this.skills, this.types));
                },
                err => console.log(err),
                () => console.log("All data gotten!")
              )
  }

  ngOnInit(): void
  {
    this.getData();
  }

  sortBy(toSort: string, asc: boolean): void
  {
    this.toSort = toSort;
    this.asc = asc;
  }
}
