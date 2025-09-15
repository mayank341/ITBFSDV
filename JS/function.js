// function hello(username = 'Guest') {
//     console.log(`hello ${username}`);
// }
// hello("Mr.Ashish Bajpeyi Sir");
// hello();

// function sum(a=0,b=0){
// console.log("before return");
// return a+b;
// console.log("after return");
// }
// console.log(sum(5,10));
// console.log(sum(1));
// console.log(sum());


// arrow function:
// const hello=()=>console.log("hello from arrow function");
// hello();
// const add=(a,b)=>a+b;
// add(a,b);
// console.log(add(5,10));

// // ------------------------------
// // IIFE function:// Immediately Invoked Function Expression -
// (function(){
//     console.log("hello from IIFE function");
// })();

// ------------------------------
// generator function:
// function* generatorFunction(){
//     yield 'hello';
//     yield 'from';
//     yield 'generator';
//     yield 'function';
// }
// const generatorObject=generatorFunction();
// console.log(generatorObject.next().value);
// console.log(generatorObject.next().value);
// console.log(generatorObject.next().value);
// console.log(generatorObject.next().value);
// console.log(generatorObject.next().value);
// console.log(generatorObject.next().value);
// console.log(generatorObject.next().value);// undefined

// ------------------------------
// callback function:
function hii(user,callback){
    console.log(`Hello ${user}`);
    callback();
}
hii("Ashish Bajpeyi",function(){
    console.log("How are you?");});

hii("Umang Bhaiya",()=>console.log("How are you?"));
