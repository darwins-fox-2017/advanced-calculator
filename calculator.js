"use strict";

export class Calculator {
  //write your code here
  constructor(param1){
    this.p1 = param1
    this.pi = 22/7
  }

  add(x){
    this.p1 += x
    return this
  }

  subtract(x){
    this.p1 -= x
    return this
  }

  multiply(x){
    this.p1 *= x
    return this
  }

  devide(x){
    this.p1 /= x
    return this
  }

  pow(x){
    this.p1 = Math.pow(this.p1,x)
    return this
  }

  sqrt(){
    this.p1 = Math.pow(this.p1,0.5)
    return this
  }

  areaOfCircle(){
    this.p1 = this.pi*this.p1*this.p1
    return this
  }

  print(){
    console.log(this.p1)
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
