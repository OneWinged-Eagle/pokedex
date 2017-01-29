import { Pipe, PipeTransform } from "@angular/core";

import { Pokemon } from "../pokemon/pokemon";

@Pipe({ name: "sortBy" })
export class SortByPipe implements PipeTransform
{
  transform(pokemons: Pokemon[], toSort: string, asc: boolean): Pokemon[]
  {
    if (pokemons !== undefined && toSort !== undefined && asc !== undefined)
    {
      let sortingMult: number = 1;

      if (!asc)
        sortingMult = -1;

      return pokemons.sort((pokemon1, pokemon2) =>
      {
        let sorting: number = 0;

        if (pokemon1[toSort] > pokemon2[toSort])
          sorting = 1;
        else if (pokemon1[toSort] < pokemon2[toSort])
          sorting = -1;

        return sortingMult * sorting;
      });
    }
    return pokemons;
  }
}
