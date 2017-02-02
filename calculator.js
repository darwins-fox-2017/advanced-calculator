"use strict";

class Calculator {
  constructor(value){
    this.nilai = value
  }

  penjumlahan(value){
    this.nilai += value
    return this
  }

  pengurangan(value){
    this.nilai -= value
    return this
  }

  perkalian(value){
    this.nilai *= value
    return this
  }

  pembagian(value){
    this.nilai /= value
    return this
  }

  perpangkatan(value){
    this.nilai = Math.pow(this.nilai,value)
    return this
  }

  akar(){
    this.nilai = Math.sqrt(this.nilai)
    return this
  }

  pi(){
    return 3.14
  }

  lingkaran(){
    this.nilai = this.pi()*Math.pow(this.nilai,2)
    return this
  }

  hasil(){
    return this.nilai
  }
}

var kalkulator = new Calculator(100)
console.log("Hasilnya adalah : " + kalkulator.penjumlahan(100).pengurangan(100).perkalian(1).pembagian(10).perpangkatan(2).akar().lingkaran().hasil())

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
