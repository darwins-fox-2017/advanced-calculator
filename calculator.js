"use strict";

export class Calculator {
  constructot(input){
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

  calBagi(val){
    this.input  /= val
    return this
  }

  calPangkat(val){
    this.input = Math.pow(this.input, val)
    return this
  }

  calKonstanta(val){
    this.input = Math.pow(this.input, 2) * 3.14
    return this
  }

  calResult(){
    return `Result : ${this.input}`
  }

}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
