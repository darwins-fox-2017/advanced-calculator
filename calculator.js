"use strict";

export class Calculator {
  //write your code here
  constructor(num = 0) {
    this.num = num
    this.pi = Math.PI
  }

  penjumlahan(newNum) {
    this.num += newNum
    return this
  }

  pengurangan(newNum) {
    this.num -= newNum
    return this
  }

  perkalian(newNum) {
    this.num *= newNum
    return this
  }

  pembagian(newNum) {
    this.num /= newNum
    return this
  }

  pangkat(exponent) {
    this.num = Math.pow(this.num,exponent)
    return this
  }

  akarPangkat() {
    this.num = Math.sqrt(this.num)
    return this
  }

  luasLingkaran() {
    this.num = (this.num*this.num)*this.pi
    return this
  }

  samaDengan() {
    return this.num
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
