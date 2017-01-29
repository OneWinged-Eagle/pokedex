import { DomSanitizer, SafeStyle } from "@angular/platform-browser";

import { SerializableHelper } from "../helpers/serializable.helper";

import { Skill } from "../skill/skill"

import { Type } from "../type/type"

export class Pokemon extends SerializableHelper
{
  base:
  {
    Attack: number,
    Defense: number,
    HP: number,
    "Sp.Atk": number,
    "Sp.Def": number,
    Speed: number
  };
  cname: string;
  ename: string;
  id: string;
  jname: string;
  skills:
  {
    egg: number[],
    level_up: number[],
    tm: number[],
    transfer: number[],
    tutor: number[]
  };
  type: string[];

  type1: string;
  type2: string;

  selected: boolean;

  lvlUpSkills: Skill[] = [];

  constructor(pokemonJson: any, skills: Skill[], types: Type[], private sanitizer: DomSanitizer)
  {
    super();

    this.fillFromJson(pokemonJson);
    this.setSkills(skills, types);
    this.setTypes(types);
    this.selected = false;
  }

  setTypes(types: Type[]): void
  {
    if (this.type[1] === undefined)
      this.type2 = "";

    for (let type of types)
    {
      if (this.type1 !== undefined && this.type2 !== undefined)
        break;

      if (this.type[0] === type.cname)
        this.type1 = type.ename;
      else if (this.type[1] === type.cname)
        this.type2 = type.ename;
    }
  }

  setSkills(skills: Skill[], types: Type[]): void
  {
    if (this.skills.level_up)
      for (let skillId of this.skills.level_up)
        for (let skill of skills)
          if (skillId === skill.id)
          {
            for (let type of types)
              if (skill.type === type.cname)
              {
                skill.type = type.ename;
                break;
              }
            this.lvlUpSkills.push(skill);
            break;
          }
  }

  getImg(type: string): string
  {
    return "/images/" + type + "/" + this.id + this.ename + ".png";
  }

  getSprite(): SafeStyle
  {
    return this.sanitizer.bypassSecurityTrustStyle("url(\"/images/spr/" + this.id + "MS.png\")");
  }

  toggleSelected(): void
  {
    this.selected = !this.selected;
  }
}
