"use strict";

class Calculator {
  //write your code here
  constructor(input){
    this.input = input
  }

  tambah(val){
    this.input += val
    return this
  }

  kurang (val){
    this.input -= val
    return this
  }

  kali(val){
    this.input *= val
    return this
  }

  bagi(val){
    this.input  /= val
    return this
  }

  pangkat(val){
    this.input = Math.pow(this.input, val)
    return this
  }

  akar(){
    this.input = Math.sqrt(this.input, 0.5)
    return this
  }

  lingkaran(){
    this.input = Math.pow(this.input, 2) * 22/7
    return this
  }

  result(){
    console.log(`Result : ${this.input}`)
  }

}


/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

let hitung = new Calculator(5)

hitung.pangkat(2).kali(10).result()
