import { Injectable } from "@angular/core";

import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemons";

@Injectable()
export class PokemonService
{
  getPokemons(): Promise<Pokemon[]>
  {
    return Promise.resolve(POKEMONS);
  }

  // See the "Take it slow" appendix
  getPokemonsSlowly(): Promise<Pokemon[]>
  {
    return new Promise(resolve =>
    {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getPokemons()), 2000);
    });
  }
}
