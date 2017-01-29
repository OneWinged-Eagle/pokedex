import { Component, Input } from "@angular/core";

import { Pokemon } from "../pokemon/pokemon";

@Component(
{
  selector: "pokemonDetails",
  templateUrl: "./pokemonDetails.component.html",
  styleUrls: ["./pokemonDetails.component.css"]
})

export class PokemonDetailsComponent
{
  @Input() pokemon: Pokemon;
}
