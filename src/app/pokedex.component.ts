import { Component, OnInit } from "@angular/core";

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
  providers:
  [
    PokemonsService,
    SkillsService,
    TypesService
  ]
})

export class PokedexComponent implements OnInit
{
  pokemons: Pokemon[];
  skills: Skill[];
  types: Type[];

  toSort: string;
  sortingType: string;

  constructor(private pokemonsService: PokemonsService, private skillsService: SkillsService, private typesService: TypesService) {}

  getPokemons(): void
  {
    this.pokemonsService.getPokemons()
                        .subscribe(
                          pokemons => this.pokemons = pokemons,
                          err => { console.log(err); }
                        );
  }

  getSkills(): void
  {
    this.skillsService.getSkills()
                        .subscribe(
                          skills => this.skills = skills,
                          err => { console.log(err); }
                        );
  }

  getTypes(): void
  {
    this.typesService.getTypes()
                        .subscribe(
                          types => this.types = types,
                          err => { console.log(err); }
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

  onSelect(pokemon: Pokemon): void
  {
    // unexpand all
    // expand pokemon.id
  }
}
