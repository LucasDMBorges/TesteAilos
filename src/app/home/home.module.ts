import { ComponentesModule } from './../componentes/componentes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TelaInicialComponent } from './telaInicial/telaInicial';
import { HomeRoutingModule } from './home-routing.module';
import { MatStepperModule } from '@angular/material/stepper';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgxMaskModule } from 'ngx-mask';




@NgModule({

  declarations: [
    TelaInicialComponent,
    MenuLateralComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    MatStepperModule,
    NgxMaskModule.forRoot({dropSpecialCharacters: false}),
    ComponentesModule
  ],
  exports:[
    HeaderComponent,
    MenuLateralComponent,
    TelaInicialComponent,
    FooterComponent
  ],

})
export class HomeModule { }
