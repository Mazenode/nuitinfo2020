import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { Card3Component } from './card3/card3.component';
import { Card12Component } from './card12/card12.component';
import { Card111Component } from './card111/card111.component';
import { Card21Component } from './card21/card21.component';
import { Card131Component } from './card131/card131.component';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './form/form.component';
import { Card4Component } from './form/card4/card4.component';
import { FormsModule, ReactiveFormsModule } from "@Angular/forms";

@NgModule({
  declarations: [MainComponent, Card3Component, Card12Component, Card111Component, Card21Component, Card131Component, CardComponent, FormComponent, Card4Component],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule, 
    ReactiveFormsModule ,
    FormsModule,
  ]
})
export class MainModule { }
