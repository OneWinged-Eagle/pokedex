import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MaterialModule } from "@angular/material";
import { NgModule } from "@angular/core";

import { PokedexComponent } from "./pokedex.component";
import { PokemonDetailsComponent } from "./pokemonDetails/pokemonDetails.component";

import { FilterByPipe } from "./pipes/filterBy.pipe";
import { KeysPipe } from "./pipes/keys.pipe";
import { SortByPipe } from "./pipes/sortBy.pipe";

@NgModule(
{
  declarations:
  [
    PokedexComponent,
    PokemonDetailsComponent,
    FilterByPipe,
    SortByPipe,
    KeysPipe
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
