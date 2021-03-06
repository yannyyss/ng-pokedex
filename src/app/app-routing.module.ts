import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexListComponent } from './pokedex/pokedex-list/pokedex-list.component';

import { PokedexModule } from "./pokedex/pokedex.module";

const routes: Routes = [
  {
    path: "",
    loadChildren: './pokedex/pokedex.module#PokedexModule'
  },
  {
    path: "pokedex/:pokemon_id",
    loadChildren: './pokedex/pokedex.module#PokedexModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
