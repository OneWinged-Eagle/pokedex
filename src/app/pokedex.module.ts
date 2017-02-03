import { BrowserModule } from "@angular/platform-browser";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MaterialModule } from "@angular/material";
import { NgModule } from "@angular/core";

import { PokedexComponent } from "./pokedex.component";

import { PokemonComponent } from "./pokemon.component/pokemon.component";

import { FilterByPipe } from "./pipes/filterBy.pipe";
import { KeysPipe } from "./pipes/keys.pipe";
import { SortByPipe } from "./pipes/sortBy.pipe";

@NgModule(
{
  declarations:
  [
    PokedexComponent,
    PokemonComponent,
    FilterByPipe,
    SortByPipe,
    KeysPipe
  ],
  imports:
  [
    BrowserModule,
    FlexLayoutModule.forRoot(),
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [PokedexComponent]
})

export class PokedexModule {}
