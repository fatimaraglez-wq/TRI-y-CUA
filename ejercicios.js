// EJERCICIO 1
// r = a + (b - c) * d + (e / f * g);

let a = 2, b = 5, c = 3, d = 4, e = 12, f = 3, g = 2;

let t1 = b - c;
let t2 = t1 * d;
let t3 = a + t2;
let t4 = e / f;
let t5 = t4 * g;
let r = t3 + t5;

console.log("Ejercicio 1");
console.log("r =", r);


// EJERCICIO 2
// x = ((m * n) / (p + q)) * (r * k);

let m = 6, n = 4, p = 2, q = 2, r2 = 3, k = 5;

let t1_2 = m * n;
let t2_2 = p + q;
let t3_2 = t1_2 / t2_2;
let t4_2 = r2 * k;
let x = t3_2 * t4_2;

console.log("Ejercicio 2");
console.log("x =", x);


// EJERCICIO 3
// total = (a + b * c) * (d - e) - (f + g);

let a3 = 2, b3 = 3, c3 = 4, d3 = 10, e3 = 6, f3 = 1, g3 = 2;

let t1_3 = b3 * c3;
let t2_3 = a3 + t1_3;
let t3_3 = d3 - e3;
let t4_3 = t2_3 * t3_3;
let t5_3 = f3 + g3;
let total = t4_3 - t5_3;

console.log("Ejercicio 3");
console.log("total =", total);


// EJERCICIO 4
// val = a * (b + (c / d)) - e * (f + g);

let a4 = 5, b4 = 3, c4 = 8, d4 = 2, e4 = 4, f4 = 2, g4 = 6;

let t1_4 = c4 / d4;
let t2_4 = b4 + t1_4;
let t3_4 = a4 * t2_4;
let t4_4 = f4 + g4;
let t5_4 = e4 * t4_4;
let val = t3_4 - t5_4;

console.log("Ejercicio 4");
console.log("val =", val);


// EJERCICIO 5
// z = (x + y / o) * r + ((a * b + k) / (c + d));

let x5 = 6, y5 = 8, o5 = 4, r5 = 3;
let a5 = 2, b5 = 5, k5 = 1, c5 = 3, d5 = 1;

let t1_5 = y5 / o5;
let t2_5 = x5 + t1_5;
let t3_5 = t2_5 * r5;
let t4_5 = a5 * b5;
let t5_5 = t4_5 + k5;
let t6_5 = c5 + d5;
let t7_5 = t5_5 / t6_5;
let z = t3_5 + t7_5;

console.log("Ejercicio 5");
console.log("z =", z);