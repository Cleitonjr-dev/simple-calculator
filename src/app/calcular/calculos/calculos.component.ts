import { Component } from '@angular/core';
import { CalculosService } from '../services/calculos.service';

@Component({
  selector: 'app-calculos',
  templateUrl: './calculos.component.html',
  styleUrls: ['./calculos.component.css']
})
export class CalculosComponent {

  private res : number = 0;

  constructor(private calculosService: CalculosService) {}

  ngOnInit(): void { }

  somar(numero1: string, numero2: string): void {
    let n1: number;
    let n2: number;

    n1 = parseFloat(numero1);
    n2 = parseFloat(numero2);

    this.res = this.calculosService.somar(n1,n2);
  }

  subtrair(numeroSub1: string, numeroSub2: string): void {
    let s1: number;
    let s2: number;

    s1 = parseFloat(numeroSub1);
    s2 = parseFloat(numeroSub2);

    this.res = this.calculosService.subtrair(s1,s2);
  }

  dividir(numeroDiv1: string, numeroDiv2: string): void {
    let d1: number;
    let d2: number;

    d1 = parseFloat(numeroDiv1);
    d2 = parseFloat(numeroDiv2);

    this.res = this.calculosService.dividir(d1,d2);
  }

  multiplicar(numeroMult1: string, numeroMult2: string): void {
    let m1: number;
    let m2: number;

    m1 = parseFloat(numeroMult1);
    m2 = parseFloat(numeroMult2);

    this.res = this.calculosService.multiplicar(m1,m2);
  }


  get resultado(): string {
    return this.res.toString();
  }

}
