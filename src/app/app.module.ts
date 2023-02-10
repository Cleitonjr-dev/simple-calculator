import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcularModule } from './calcular/calcular.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalcularModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
