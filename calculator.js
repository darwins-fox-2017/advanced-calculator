"use strict";

export class Calculator {
  constructor(angka){
    this.angka = angka
  }

  penjumlahan(input){
    this.angka += input
    return this
  }

  pengurangan(input){
  this.angka -= input
  return this
  }

  perkalian(input){
    this.angka *= input
    return this
  }

  pembagian(input){
    this.angka /= input
    return this
  }

  pangkat(input){
    this.angka =  Math.pow(this.angka, input);
    return this
  }

  konstanta(){
    //Luas = π r2
    let phi = 3.14
    let r = Math.pow(this.angka, 2)
    this.angka = phi * r
    return this
  }

  hasil(){
   console.log(this.angka);
   return this
}


}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
