import { Component, OnInit } from "@angular/core";

import { Pokemon } from "./pokemon";
import { PokemonService } from "./pokemon.service";

@Component(
{
  selector: "pokedex",
  templateUrl: "./pokedex.component.html",
  styleUrls: ["./pokedex.component.css"],
  providers: [PokemonService]
})

export class PokedexComponent implements OnInit
{
  pokemons: Pokemon[];
  selectedPokemon: Pokemon;

  constructor(private pokemonService: PokemonService) {}

  getPokemons(): void
  {
    this.pokemonService.getPokemons().then(pokemons => this.pokemons = pokemons);
  }

  ngOnInit(): void
  {
    this.getPokemons();
  }

  onSelect(pokemon: Pokemon): void
  {
    this.selectedPokemon = pokemon;
  }
}
