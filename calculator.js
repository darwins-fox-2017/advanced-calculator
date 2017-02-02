"use strict";

export class Calculator {
  constructor(input){
    this.input = input
  }

  calTambah(val){
    this.input += val
    return this
  }

  calKurang (val){
    this.input -= val
    return this
  }

  calKali(val){
    this.input *= val
    return this
  }

  calBagi(val){
    this.input  /= val
    return this
  }

  calPangkat(val){
    this.input = Math.pow(this.input, val)
    return this
  }

  calAkar(){
    this.input = Math.sqrt(this.input, 0.5)
    return this
  }

  calLingkarang(){
    this.input = Math.pow(this.input, 2) * 22/7
    return this
  }

  calResult(){
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
