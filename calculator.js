"use strict";

export class Calculator {
  constructor(input){
    this.input = input
  }

  addition(countNumber){
    this.input += countNumber
    return this
  }

  substraction(countNumber){
    this.input -= countNumber
    return this
  }

  multiply(countNumber){
    this.input *= countNumber
    return this
  }

  devide(countNumber){
    this.input  /= countNumber
    return this
  }

  power(countNumber){
    this.input = Math.pow(this.input, countNumber)
    return this
  }

  square(){
    this.input = Math.sqrt(this.input)
    return this
  }

  circle(){
    const PI = 3.14
    this.input = PI * Math.pow(this.input, 2)
    return this
  }

  Result(){
    console.log(`Result : ${this.input}`)
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
