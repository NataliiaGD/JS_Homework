var result = 'number' + 3 + 3 // = number33
//  3 + 3 перетворюються на string

var result = null + 3 // = 3
//  null -> 0, 0 + 3 = 3

var result = 5 && "qwerty" // = qwerty
// 5 є істинним значенням, тому повертається "qwerty"

var result = +'40' + +'2' + "hillel"; // = 42hillel
// +'40' перетворює '40' в число 40, +'2' перетворює рядок '2' в число 2, додається hillel перетворюючи 42 в рядок: "42hillel"


var result = '10' - 5 === 6; // = false
//  '10' перетворюється в число 10
//  10 - 5 = 5
//  5!= 6


var result = true + false // = 1
// true = 1
// false = 0
// 1 + 0 = 1


var result = '4px' - 3 // = NaN
// '4px' не перетворюєтсья число


var result = '4' - 3 // = 1
// '4' перетворюється в число 4,
// 4 - 3 = 1


var result = '6' + 3 ** 0; // = 61
// 3 ** 0 підноситься до степеня і = 1
// '6' + 1 перетворює 1 в рядок -> = '61'


var result = 12 / '6' // = 2
// '6' перетворюється в число
// 12 / 6 = 2


var result = '10' + (5 === 6); // = 10false
// 5 === 6 — false 
// false перетворюється в рядок
// '10' + 'false' = '10false'


var result = null == '' // = false
// null порівнюється тільки з undefined, тобто null == undefined дорівнюватиме true 

var result = 3 ** (9 / 3); // = 27
// 9/3 = 3
// 3 підноситься до 3 ступеня


var result = !!'false' == !!'true' // = true
// !!'false' перетворює рядок в true
// !!'true' також перетворює рядок в true
// true == true


var result = 0 || '0' && 1 // = 1
// 0 || '0' повертає '0'
// '0' && 1 повертає 1


var result = (+null == false) < 1; // = false
// +null перетворюється в 0
// 0 == false — true
// true перетворюється в 1
// 1 < 1 = false


var result = false && true || true // = true
// false && true = false
// false || true = true


var result = false && (false || true); // = false
// false || true = true
// false && true = false


var result = (+null == false) < 1 ** 5; // = false
//  +null перетворюється в 0
//  0 == false — true
//  1 ** 5 = 1
//  true < 1 = false



