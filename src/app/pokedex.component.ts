import { animate, trigger, state, transition, style, Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

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
    trigger("pokemonSelected", [
      state("in", style({ height: "*" })),
      transition("* => void", [
        style({ height: "*" }),
        animate(250, style({ height: 0 }))
      ]),
      transition("void => *", [
        style({ height: 0 }),
        animate(250, style({ height: "*" }))
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
  skills: Skill[];
  types: Type[];

  toSort: string;
  sortingType: string;

  constructor(private pokemonsService: PokemonsService, private skillsService: SkillsService, private typesService: TypesService, private sanitizer: DomSanitizer) {}

  getPokemons(): void
  {
    this.pokemonsService.getPokemons()
                        .subscribe(
                          pokemons =>
                          {
                            for (let pokemonJson of pokemons)
                              this.pokemons.push(new Pokemon(pokemonJson, this.sanitizer));
                          },
                          err => console.log(err),
                          () => console.log("All pokemons gotten!")
                        );
  }

  getSkills(): void
  {
    this.skillsService.getSkills()
                        .subscribe(
                          skills => this.skills = skills,
                          err => console.log(err),
                          () => console.log("All skills gotten!")
                        );
  }

  getTypes(): void
  {
    this.typesService.getTypes()
                        .subscribe(
                          types => this.types = types,
                          err => console.log(err),
                          () => console.log("All types gotten!")
                        );
  }

  ngOnInit(): void
  {
    this.getPokemons();
    this.getSkills();
    this.getTypes();
  }

  sortBy(toSort: string, sortingType: string): void
  {
    this.toSort = toSort;
    this.sortingType = sortingType;
  }
}
