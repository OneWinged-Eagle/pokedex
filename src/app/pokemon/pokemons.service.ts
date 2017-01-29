import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

import { ServicesHelper } from "../helpers/services.helper";

import { Pokemon } from "./pokemon";

@Injectable()
export class PokemonsService extends ServicesHelper
{
  constructor(http: Http)
  {
    super(http, "/data/pokedex.json");
  }

  getPokemons(): Observable<any> { return this.getData(); }
}
