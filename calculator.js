"use strict";

export class Calculator {
  constructor(nilai) {
    this.nilai = nilai
    this.PI = 3.14
  }

  penjumlahan(nilai) {
    this.nilai += nilai
    return this
  }

  pengurangan(nilai) {
    this.nilai -= nilai
    return this
  }

  perkalian(nilai) {
    this.nilai *= nilai
    return this
  }

  pembagian(nilai) {
    this.nilai /= nilai
    return this
  }

  pangkat(nilai) {
    this.nilai = Math.pow(this.nilai, nilai)
    return this
  }

  akar_pangkat(nilai) {
    this.nilai = Math.sqrt(this.nilai)
    return this
  }

  jari_jari_lingkaran(nilai) {
    // PI r kuadrat
    this.nilai = this.PI * Math.pow(this.nilai, 2)
    return this
  }

  display() {
    console.log(this.nilai);
    return this
  }

}


// let counter = new Calculator();
/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
