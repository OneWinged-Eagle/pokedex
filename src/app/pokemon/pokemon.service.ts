import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

import { Pokemon } from "./pokemon";

@Injectable()
export class PokemonService
{
  private pokemonsUrl : string = "/data/pokedex.json";

  constructor(private http: Http) {}

  getPokemons(): Observable<Pokemon[]>
  {
    return this.http.request(this.pokemonsUrl)
                    .map((res: Response) => res.json())
                    .catch((error: any) => Observable.throw(error.json().error || "Server error"));
  }
}
