const hotelbooking = new Promise((resolve,reject) =>{
   let bookingsucess = true;
   if(bookingsucess){
    resolve()
   }
   else{
    reject();
   }

});
hotelbooking.then(success).catch(failure);
function success(){
    console.log("booking success")
}
function failure(){
console.log("booking failure")
}

// function  team1() {
//          return new Promise((resolve,reject)=> {
//     let basketball = true

//     if(basketball){
//         resolve()
//     }
//     else{
//         reject()
//     }

// })

// team1.then(()=> resolve.log(success)).reject(()=> console.log(failure))}