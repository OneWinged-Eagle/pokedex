import { async, inject, TestBed } from "@angular/core/testing";
import { BaseRequestOptions, HttpModule, Http, Response, ResponseOptions } from "@angular/http";

import {} from "jasmine";

import { PokemonsService } from "./pokemons.service";

describe("PokemonsService", () =>
{
  beforeEach(() =>
  {
    TestBed.configureTestingModule(
    {
      imports: [ HttpModule ],
      providers: [ PokemonsService ]
    });
  });

  describe("getPokemons()", () =>
  {
    it("should return 721 pokemons",
      inject([PokemonsService], (pokemonsService) =>
    {
      pokemonsService.getPokemons().subscribe(pokemons =>
      {
        expect(pokemons.length).toBe(721);
        expect(pokemons[0].ename).toEqual("Bulbasaur");
        expect(pokemons[42].jname).toEqual("\u30ca\u30be\u30ce\u30af\u30b5");
        expect(pokemons[420].base.HP).toEqual(70);
        expect(pokemons[666].skills.egg[1]).toEqual(83);
      });
    }));
  });
});
