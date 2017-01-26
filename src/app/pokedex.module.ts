import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MaterialModule } from "@angular/material";
import { NgModule } from "@angular/core";

import { PokedexComponent } from "./pokedex.component";
import { PokemonDetailComponent } from "./pokemonDetail.component";

@NgModule(
{
  declarations:
  [
    PokedexComponent,
    PokemonDetailComponent
  ],
  imports:
  [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [PokedexComponent]
})

export class PokedexModule {}
