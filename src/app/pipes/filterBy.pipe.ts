import { Pipe, PipeTransform } from "@angular/core";

import { Pokemon } from "../pokemon/pokemon";

@Pipe({
  name: "filterBy"
})
export class FilterByPipe implements PipeTransform
{
  transform(pokemons: Pokemon[], toFilter: string, filter: string): Pokemon[]
  {
    if (pokemons !== undefined && toFilter !== undefined && filter !== undefined)
      return pokemons.filter(pokemon =>
      {
        let filtring: boolean = true;

        switch (toFilter)
        {
        case "ename":
          filtring = (pokemon.ename.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
          break;

        case "id":
          filtring = (pokemon.id.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
          break;

        case "type1":
          filtring = (pokemon.type[0].toLowerCase().indexOf(filter.toLowerCase()) !== -1);
          break;

        case "type2":
          filtring = (pokemon.type[1].toLowerCase().indexOf(filter.toLowerCase()) !== -1);
          break;
        }

        return filtring;
      });
    return pokemons;
  }
}
