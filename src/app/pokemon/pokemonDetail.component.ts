import { Component, Input } from "@angular/core";
import { Pokemon } from "./pokemon";

@Component(
{
  selector: "pokemonDetail",
  templateUrl: "./pokemonDetail.component.html"
})

export class PokemonDetailComponent
{
  @Input() pokemon: Pokemon;
}
