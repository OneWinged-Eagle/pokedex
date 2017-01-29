import { async, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "@angular/material";

import {} from "jasmine";

import { PokedexComponent } from "./pokedex.component";
import { PokemonDetailsComponent } from "./pokemonDetails/pokemonDetails.component";

import { FilterByPipe } from "./pipes/filterBy.pipe";
import { KeysPipe } from "./pipes/keys.pipe";
import { SortByPipe } from "./pipes/sortBy.pipe";

describe("PokedexComponent", () =>
{
  beforeEach(async() =>
  {
    TestBed.configureTestingModule(
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
        FormsModule,
        MaterialModule.forRoot()
      ],
    });
    TestBed.compileComponents();
  });

  it("should create the pokedex", async(() =>
  {
    const fixture = TestBed.createComponent(PokedexComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
