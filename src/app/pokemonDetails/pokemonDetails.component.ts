import { Component, Input } from "@angular/core";

import { Pokemon } from "../pokemon/pokemon";
import { Skill } from "../skill/skill";
import { Type } from "../type/type";

@Component(
{
  selector: "pokemonDetails",
  templateUrl: "./pokemonDetails.component.html",
  styleUrls: ["./pokemonDetails.component.css"]
})

export class PokemonDetailsComponent
{
  @Input() pokemon: Pokemon;
  @Input() skills: Skill[]; // TODO: get directly from there, add cache system
  @Input() types: Type[]; // TODO: get directly from there, add cache system
}
