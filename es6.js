// ecmascript practice topics: 

// 1: let const difference


// var: Function-scoped, hoisted, can be reassigned, and ignores block-level scope.
// let: Block-scoped, hoisted but in the temporal dead zone, can be reassigned.
// const: Block-scoped, hoisted but in the temporal dead zone, cannot be reassigned after initialization.

// 2: arrow functon 

// normal function \

// function calc(){
//     alert("hello there !");
// }
// calc();

// const arrowFunc = () => alert("hello world !");
// arrowFunc();



//  arrow funciton 

// let a = 20;
// let b = 21;

// const arrowFunc = (a, b) => {
//     console.log(a * b);
// };



// 1: If the function has a single expression, the return keyword and curly braces {} can be omitted, and the result of the expression is automatically returned.

// let a = +prompt("please enter a value");

// let b = 20;

// const add = (a, b) => a + b;

// console.log(add);


// 2: need of paranthesis,


// if single parameter, no parathansesis is needed, whereas if multipe or no parameter is inserted, parenthesis are reqiured,



// const arrowFunc = x => {return x * x};
// console.log(arrowFunc(8));

// with parenthesis

// const arrowFunc = () => alert("hello world !");
// arrowFunc();


// destructuring: 

// object destructuring: 


// const object = {
//     name: "abdul hannan",
//     age: 18
// }
// alert(object.name);
// alert(object.age);

// const {name, age} = object;

// alert(name);


// note: Same name of the keys is mandatory

// in this example, the "name " key should be same as the "object" name above,


// const object = {
//     name: "abdul hannan",
//     age: 18
// }
// const {objectName, objectAge} = object;

// if the value of objectName and objectAge is logged, the value will be undefined due to unsimilar names of the keys of both the object.


// spread operators:

// const object = {
//     name: prompt("enter your name "),
//     age: +prompt("please enter your age "),
//     subject1: prompt("favourite subject number 1"),
//     subject2: prompt("favourite subject number 1"),
//     subject3: prompt("favourite subject number 1")

// }


// const {name, age, ...favouriteSubs} = object;

// alert(name);
// alert(age);
// console.log(favouriteSubs);








