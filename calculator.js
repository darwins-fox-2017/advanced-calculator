"use strict"

export class Calculator {
  constructor (input){
  	this.input = input
  }
Ditambah(input){
  this.input += input
  return this
	}
Dikali(input){
  this.input *= input
  return this
	}
Dibagi(input){
  this.input /= input
  return this
	}
Dikurang(input){
  this.input -= input
  return this
	}
Perpangkatan(input){
  this.input = Math.pow(this.input, input);
  return this
	}
Akar(){
	this.input = Math.sqrt(this.input);
	return this
	}
Lingkaran(){
	this.input = Math.pow(this.input, 2) * 3,14
	return this
	}
hasil(){
	console.log(this.input)
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
