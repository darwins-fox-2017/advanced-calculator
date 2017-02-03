"use strict";

export class Calculator {
  //write your code here
  constructor (num) {
    this.num = num
    this.result = 0
  }

  tambah(angka) {
    this.result = this.num + angka
    return this
  }

  kurang(angka) {
    this.result = this.result - angka
    return this
  }

  kali(angka) {
    this.result *= angka
    return this
  }

  bagi(angka) {
    this.result /= angka
    return this
  }

  pangkat(angka) {
    this.result = Math.pow(this.result,angka)
    return this
  }

  akar() {
    this.result = Math.sqrt(this.result)
    return this
  }

  lingkaran() {
    const phi = 3.14
    this.result = Math.pow(this.result,2) * phi
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
