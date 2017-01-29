import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

import { ServicesHelper } from "../helpers/services.helper";

import { Type } from "./type";

@Injectable()
export class TypesService extends ServicesHelper
{
  constructor(http: Http)
  {
    super(http, "/data/types.json");
  }

  getTypes(): Observable<any> { return this.getData(); }
}
