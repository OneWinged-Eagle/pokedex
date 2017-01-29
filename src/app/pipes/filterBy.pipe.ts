import { Pipe, PipeTransform } from "@angular/core";

import { Pokemon } from "../pokemon/pokemon";

@Pipe({ name: "filterBy" })
export class FilterByPipe implements PipeTransform
{
  transform(pokemons: Pokemon[], toFilter: string, filter: string): Pokemon[]
  {
    if (pokemons !== undefined && toFilter !== undefined && filter !== undefined)
      return pokemons.filter(pokemon =>
      {
        return (pokemon[toFilter].toLowerCase().indexOf(filter.toLowerCase()) !== -1);
      });
    return pokemons;
  }
}
