function register(){
    //  waitforfiveseconds();
    
        console.log("register end")
}
function sendEmail(){
    // waitforfiveseconds();
    setTimeout(() => {
        console.log("send an email end:");
    }, 5000);
}
function login(){
    // waitforfiveseconds();
    setTimeout(() => {
        console.log("login end");
    }, 5000);
}
function getData(){
    // waitforfiveseconds();
    setTimeout(() => {
        console.log("get data end:");
    }, 5000);

}
function displayData(){
    // waitforfiveseconds();
    setTimeout(() => {
        console.log("display Data end :");
    }, 5000);

}

// synchronous function :
function waitforfiveseconds(){
    const ms=new Date().getTime()+5000;
   let ct=new Date().getTime();
   while(ct<ms){
       ct=new Date().getTime();
   }
  
}
// console.log(Date().getTime()+5000);

register();
sendEmail();
login();
getData();
displayData();
console.log("call other application :")