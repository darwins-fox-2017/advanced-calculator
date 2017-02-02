"use strict";

class Calculator {
  constructor(p1){
    this.p1=p1;
    this.phi=3.14;
  }
  penjumlahan(p2){
    this.p1=this.p1+p2;
    return this;
  }
  pengurangan(p2){
    this.p1=this.p1-p2;
    return this;
  }
  perkalian(p2){
    this.p1=this.p1*p2;
    return this;
  }
  pembagian(p2){
    this.p1=this.p1/p2;
    return this;
  }
  pangkat(p2){
    let pangkat=Math.pow(this.p1,p2);
    this.p1=pangkat;
    return this;
  }
  akar(p2){
    pankatakar=1/p2;
    let akar=Math.pow(this.p1,pankatakar);
    this.p1=akar;
    return this
  }
  lingkaran(){
     let luas=this.phi*Math.pow(this.p1,2);
     return luas;
  }
  print(){
    return(this.p1);
  }
}

export default Calculator

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
