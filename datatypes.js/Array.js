// let dish = ["Pizza","burger","dosa","idly","vada","bonda"];
// let number = [0,1,2,3,4,5];/
// let arrandnum = [0,1,2,3,"sachin","dhoni","kane",[1,2,3,4]];
// console.log(arrandnum[7][2]);

dish.push("vadaa");
console.log(dish)

// dish.pop();
// console.log(dish);

// dish.shift();
// console.log(dish);

// dish.unshift();
// console.log(dish);

// delete dish[1];
// console.log(dish);

// dish.splice(1,1,"dal");
// console.log(dish);


// console.log(dish.slice(1,2));

// let cars = ["maruthi","hyndai","honda","kwid","toyota"]
// for(let i=0; i<cars.length; i++){
//     console.log(cars[i])

// }

// cars.forEach((ca) => {
//     console.log(ca)
// });

// for (const ca of cars) {
//     // console.log(cars[2])
//     if(ca == 2) break;
//     console.log(ca)
// }
// for (const cr of cars) {
//     console.log(cr)
// }
// for (const key in cars) {
//     console.log(key)
//     let val = cars[key]
//     console.log(val[0,1])
// }
// cars.forEach((cr) =>{
//    console.log(cr)
// })
// for (const ab of cars) {
//     console.log(ab)
// }
// for (const crs in cars) {
//     let val = cars[crs]
    console.log(val[0,2])
    
        
//     }

// let string1  = "all is Well ";
// let string2  = "Everything is alright";

// console.log(string1.length);
// console.log(string1.indexOf("e"));
// console.log(string1.charAt(4))
// console.log(string1.endsWith("l"))

// const age = 18;

// const value = age>17?"can vote": "cannot vote" ;
// console.log(value)
// console.log(string1.concat("also " ,string2));
// console.log(string1.replace("is","not"))

// let age = 24;
// let value = age>18?"not eligible":"eligible"
// console.log(value)
function ten(e){
    console.log("Notice:" +e)
}
function kriteesh(d){
  console.log("sentence:"+d)

}

function krish(a,c,callback,callback2){

    b = a + " hi hello " + c 
    callback(b);
    callback2(b);
}
krish("hey","gm",kriteesh,ten)
