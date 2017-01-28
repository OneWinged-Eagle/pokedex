import { DomSanitizer, SafeStyle } from "@angular/platform-browser";

import { SerializableHelper } from "../helper/serializable.helper";

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

  selected: boolean;

  constructor(pokemonJson: any, private sanitizer: DomSanitizer)
  {
    super();

    this.fillFromJson(pokemonJson);
    this.selected = false;
  }

  getImg(type: string): string
  {
    return "/images/" + type + "/" + this.id + this.ename + ".png";
  }

  getSprite() : SafeStyle
  {
    return this.sanitizer.bypassSecurityTrustStyle("url(\"/images/spr/" + this.id + "MS.png\")");
  }

  toggleSelected(): void
  {
    this.selected = !this.selected;
  }
}
