import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

import { Skill } from "./skill";

@Injectable()
export class SkillsService
{
  private skillsUrl : string = "/data/skills.json";

  constructor(private http: Http) {}

  getSkills(): Observable<Skill[]>
  {
    return this.http.request(this.skillsUrl)
                    .map((res: Response) => res.json())
                    .catch((error: any) => Observable.throw(error.json().error || "Server error"));
  }
}
