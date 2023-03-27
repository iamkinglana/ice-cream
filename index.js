// // //Asyncronus

// // console.log("I");


// // console.log("eat");

// // setTimeout(()=>{
// //     console.log("icecream");

// // },4000);


// // console.log("with a");


// // console.log("spoon");


// function one(call_two){
//     console.log("Step 1 complete. please call step 2"
//     );


// call_two();
// };
// function two(){
//     console.log("Step 2");
// }

// one(two);
// // two();
// // one();
let stocks={
    Fruits:["strawberry","grape","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","sticks"],
    toppings:["chocolate","peanuts"],
};


// let order=(Fruit_name, call_production)=>{

//     setTimeout(()=>{
//         console.log(`${stocks.Fruits[Fruit_name]} was selected`);
    
//         call_production();
    
//      },2000)

    
// };


// let production =()=>{
//     setTimeout(()=>{
//         console.log("production has started");

//         setTimeout(()=>{
//             console.log("The fruits have been chopped");

//             setTimeout(()=>{
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

//                 setTimeout(() => {
//                     console.log("The machine was started");

//                     setTimeout(() => {
//                     console.log(`Ice cream was placed on the ${stocks.holder[0]}`);

//                     setTimeout(() => {
                        
//                         console.log(`${stocks.toppings[0]} was added as toppings`);

//                         setTimeout(() => {
//                             console.log('serve ice cream');
//                         }, 2000);
                        
//                     }, 3000);
                        
//                     }, 2000);
                    
//                 }, 1000);
                
//             },1000)
            
//         },2000);
    
//     }, 0000);

// };

// order(0,production);


let is_shop_open = true;

let order=(time,work)=>{
    return new Promise((resolve, reject) => {
        if(is_shop_open){

            setTimeout(() => {
                resolve(work())
            },time);
            
        }
        else{
            reject(console.log("our shop is closed"))
        }
    })

};



order(2000,()=> console.log(`${stocks.Fruits[0]} was selected`))

.then(()=>{
    return order(0000,()=>console.log("production has started"));
})


.then(()=>{
    return order(2000,()=> console.log("The fruit was chopped"));
})

.then(()=> {
    return order(1000, ()=> console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`))
})

.then(()=>{
    return order(1000, ()=> console.log("Start the machine"))

})

.then (()=>{
    return order(2000,()=> console.log(`${stocks.holder[0]}`))
})

.then(()=>{
    return order(3000,()=>console.log(`${stocks.toppings[0]}`))
})
.then(()=>{
    return order(2000,()=> console.log("Serve Ice cream"))
})