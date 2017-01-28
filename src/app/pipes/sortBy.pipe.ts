import { Pipe, PipeTransform } from "@angular/core";

import { Pokemon } from "../pokemon/pokemon";

@Pipe({
  name: "sortBy"
})
export class SortByPipe implements PipeTransform
{
  transform(pokemons: Pokemon[], toSort: string, sortingType: string): Pokemon[]
  {
    if (pokemons !== undefined && toSort !== undefined && sortingType !== undefined)
    {
      let sortingMult: number = 1;

      if (sortingType == "DESC")
        sortingMult = -1;

      return pokemons.sort((pokemon1, pokemon2) =>
      {
        let sorting: number = 0;

        switch (toSort)
        {
        case "ename":
          if (pokemon1.ename > pokemon2.ename)
            sorting = 1;
          else if (pokemon1.ename < pokemon2.ename)
            sorting = -1;
          break;

        case "id":
          if (pokemon1.id > pokemon2.id)
            sorting = 1;
          else if (pokemon1.id < pokemon2.id)
            sorting = -1;
          break;

        case "type1":
          if (pokemon1.type[0] > pokemon2.type[0])
            sorting = 1;
          else if (pokemon1.type[0] < pokemon2.type[0])
            sorting = -1;
          break;

        case "type2":
          if (pokemon1.type[1] > pokemon2.type[1])
            sorting = -1;
          else if (pokemon1.type[1] < pokemon2.type[1])
            sorting = -1;
          break;
        }

        return sortingMult * sorting;
      });
    }
    return pokemons;
  }
}
