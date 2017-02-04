"use strict";

import {Calculator} from "./calculator.js";

// execute function on calculator.js in here
let calculator = new Calculator()

let count = calculator
            .penjumlahan(2)
            .penjumlahan(5)
            .perkalian(10)
            .pembagian(7)
            .pengurangan(1)
            .pangkat(3)
            .akarPangkat()
            .luasLingkaran()
            .samaDengan()
console.log(count);