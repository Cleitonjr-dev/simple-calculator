import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculosComponent } from './calculos/calculos.component';
import { CalculosService } from './services/calculos.service';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    CalculosComponent
  ],
  imports: [
    CommonModule,
    InputTextModule
  ],
  exports: [
    CalculosComponent,

  ],
  providers: [
    CalculosService
  ]
})
export class CalcularModule { }


