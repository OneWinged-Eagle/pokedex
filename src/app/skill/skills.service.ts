import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

import { ServicesHelper } from "../helpers/services.helper";

import { Skill } from "./skill";

@Injectable()
export class SkillsService extends ServicesHelper
{
  constructor(http: Http)
  {
    super(http, "/data/skills.json");
  }

  getSkills(): Observable<any> { return this.getData(); }
}
