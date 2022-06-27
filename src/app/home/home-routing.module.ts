import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {  TelaInicialComponent } from "./telaInicial/telaInicial";

const routes: Routes = [
  {
  path:'',
  component:  TelaInicialComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
