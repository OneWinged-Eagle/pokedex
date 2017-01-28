import { Component, Input } from "@angular/core";

import { DomSanitizer, SafeStyle } from "@angular/platform-browser"

import { Pokemon } from "../pokemon/pokemon";
import { Skill } from "../skill/skill";
import { Type } from "../type/type";

@Component(
{
  selector: "pokemonDetails",
  templateUrl: "./pokemonDetails.component.html",
  styleUrls: ["./pokemonDetails.component.css"]
})

export class PokemonDetailsComponent
{
  @Input() pokemon: Pokemon;
  @Input() skills: Skill[]; // TODO: get directly from there, add cache system
  @Input() types: Type[]; // TODO: get directly from there, add cache system

  constructor(private sanitizer: DomSanitizer) {}

  getSprite() : SafeStyle
  {
    return this.sanitizer.bypassSecurityTrustStyle("url(\"/images/spr/" + this.pokemon.id + "MS.png\")");
  }
}
