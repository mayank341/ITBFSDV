// function register(cb){
//     //  waitforfiveseconds();
//     setTimeout(() => {
//         console.log("register end");
//         cb();
//     }, 5000);
// }
// function sendEmail(cb){
//     // waitforfiveseconds();
//     setTimeout(() => {
//         console.log("send an email end:");
//         cb();
//     }, 5000);
// }
// function login(cb){
//     // waitforfiveseconds();
//     setTimeout(() => {
//         console.log("login end");
//         cb();
//     }, 5000);
// }
// function getData(cb){
//     // waitforfiveseconds();
//     setTimeout(() => {
//         console.log("get data end:");
//         cb();
//     }, 5000);

// }
// function displayData(cb){
//     // waitforfiveseconds();
//     setTimeout(() => {
//         console.log("display Data end :");
//     }, 5000);

// }
// // Call Back Hell :
// register(() => {
//     sendEmail(() => {
//         login(() => {
//             getData(() => {
//                 displayData(() => {
//                     console.log("all tasks are done :)");
//                 });
//             });
//         });
//     });
// });

// console.log("call other application :")
// ___________________________________________________________________________________________
// Promise
function register (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("register end");
            resolve();
        }, 5000);
    });
}
function login(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("login end");
            resolve();
        }, 5000);
    });
}
function sendEmail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("send an email end:");
            resolve();
        },5000);
    });
}
function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("get data end:");
            // resolve();
            reject("data not found");
        },5000);
    });
}
// register()
// .then(sendEmail)
// .then(login)
// .then(getData)
// .catch((err)=>{console.log("some error occured :"+err);})
// .finally(()=>{console.log("call other application :");})

// console.log("call other application :");

// ___________________________________________________________________________________________________________________
// async await :
async function authenticate(){
    try {
        await register();
        await sendEmail();
        await login();
        await getData();
    } catch (err) {
        console.log("some error occured :" + err);
    } finally {
        console.log("call other application :");
    }
}