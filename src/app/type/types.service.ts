import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

import { Type } from "./type";

@Injectable()
export class TypesService
{
  private typesUrl : string = "/data/types.json";

  constructor(private http: Http) {}

  getTypes(): Observable<Type[]>
  {
    return this.http.request(this.typesUrl)
                    .map((res: Response) => res.json())
                    .catch((error: any) => Observable.throw(error.json().error || "Server error"));
  }
}
