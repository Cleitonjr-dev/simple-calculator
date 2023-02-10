import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculosService {

  constructor() { }

  somar(numero1: number, numero2: number): number {

    let resultado: number;

    resultado = numero1 + numero2;

    return resultado;
  }

  subtrair(numeroSub1: number, numeroSub2: number): number {

    let resultado: number;

    resultado = numeroSub1 - numeroSub2;

    return resultado;
  }

  dividir(numeroDiv1: number, numeroDiv2: number ): number {
    let resultado: number;

    resultado = numeroDiv1 / numeroDiv2;

    return resultado;
  }

  multiplicar(numeroMult1: number, numeroMult2: number ): number {
    let resultado: number;

    resultado = numeroMult1 * numeroMult2;

    return resultado;
  }
}
