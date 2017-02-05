import { animate, state, style, transition, trigger, Component, Input } from "@angular/core";
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";

import { TypeColorsHelper } from "../helpers/typeColors.helper";

import { Pokemon } from "../pokemon/pokemon";

@Component(
{
  selector: "pkm",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.css"],
  animations: [
    trigger("details", [
      state("in", style({ height: "*" })),
      transition(":enter",
      [
        style({ height: 0 }),
        animate(222, style({ height: "*" }))
      ]),
      transition(":leave",
      [
        style({ height: "*" }),
        animate(222, style({ height: 0 }))
      ])
    ])
  ]
})

export class PokemonComponent
{
  @Input() pokemon: Pokemon;

  typeColors: any = TypeColorsHelper;

  selected: boolean = false;

  showSkills: boolean = false;

  constructor(private sanitizer: DomSanitizer) {}

  getHeaderImg(): SafeStyle
  {
    let url: string = (this.selected ? "/images/spr/" + this.pokemon.id + "MS.png" : this.getImg('thm'));

    return this.sanitizer.bypassSecurityTrustStyle("url(" + url + ")");
  }

  getImg(type: string): string
  {
    return "/images/" + type + "/" + this.pokemon.id + this.pokemon.ename + ".png";
  }

  toggle(toToggle: string): void
  {
    this[toToggle] = !this[toToggle];
  }
}
