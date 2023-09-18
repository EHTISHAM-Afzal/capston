// // /// find duplicate array 
// // /// remove the duplicate value from initial array 


// const state = [{ Date: "2023-09-02", Time: "19:00", Guests: "05", Occasion: "Anniversary", }]
// const action = [{ Date: "2023-09-02" }]
// const initialArray = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

// const a = (state, action) => {
//     // Step 1: Create a map from the state array with Date as key and Time as value
//     const dateToTimeMap = new Map();
//     state.forEach(item => {
//         dateToTimeMap.set(item.Date, item.Time);
//     });
//     // Step 2: Iterate over the action array and remove the Time
//     // from the initialArray if the Date exists in the map

//     action.forEach(item => {
//         if (dateToTimeMap.has(item.Date)) {
//             const index = initialArray.indexOf(dateToTimeMap.get(item.Date));
//             if (index !== -1) {
//                 initialArray.splice(index, 1);
//             }
//         }
//     });

//     // for (const indx of action) {
//     //     if (dateToTimeMap.has(indx.Date)) {
//     //         const index = initialArray.indexOf(dateToTimeMap.get(indx.Date));
//     //         if (index !== -1) {
//     //             initialArray.splice(index, 1);
//     //         }
//     //     }
//     // }
//     // Return the modified initialArray
//     return initialArray;
// };

// // Call the function with the provided state and action arrays
// // a(state, action);

// console.log(a(state, action))

// for (const index of state) {
//     console.log(index)
// }

// let o = [1 , 5 ,2 , 8 , 10]

// const c = o.reduce((a , c) => a + c )
// console.log(c)

// //////////////////////////////////////////////////////////////

// const b = (state, action) => {
//     const initialArray = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

//     action.forEach(indx => {
//         const found = state.find(item => item.Date === indx.Date);
//         if (found) {
//             const index = initialArray.indexOf(found.Time);
//             if (index !== -1) {
//                 initialArray.splice(index, 1);
//             }
//         }
//     });

//     return initialArray;
// };

// b(state, action);

// ////////////////////////////////////////
// ////////////////////////////////////////
// const d = (state, action) => {
//     const initialArray = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

//     const timesToRemove = state
//         .filter(item => action.some(indx => indx.Date === item.Date))
//         .map(item => item.Time);

//     return initialArray.filter(time => !timesToRemove.includes(time));
// };

// d(state, action);


// //////////////////////

// const e = (state, action) => {
//     const initialArray = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

//     const timesToRemove = state
//         .filter(item => action.some(indx => indx.Date === item.Date))
//         .map(item => item.Time);

//     return initialArray.reduce((acc, time) => {
//         if (!timesToRemove.includes(time)) {
//             acc.push(time);
//         }
//         return acc;
//     }, []);
// };

// e(state, action);

// //////////////////////////////
// const f = (state, action) => {
//     const initialArray = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

//     action.forEach(indx => {
//         state.filter(item => {
//             if (item.Date === indx.Date) {
//                 const index = initialArray.indexOf(item.Time);
//                 if (index !== -1) {
//                     initialArray.splice(index, 1);
//                 }
//             }
//         });
//     });

//     return initialArray;
// };

// f(state, action);


// //////////////////////////

// const g = (state, action) => {
//     const initialArray = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

//     return initialArray.filter(time => {
//         return !state.some(item => {
//             return action.some(indx => indx.Date === item.Date && time === item.Time);
//         });
//     });
// };

// g(state, action);


// ////////////////////////

// const h = (state, action) => {
//     const initialArray = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

//     const timesToRemove = action.map(indx => {
//         const found = state.find(item => item.Date === indx.Date);
//         return found ? found.Time : null;
//     });

//     return initialArray.filter(time => !timesToRemove.includes(time));
// };

// h(state, action);

const some = [{
    firstName: "John",
    lastName: "Doe",
    ssn: 299 - 24 - 2351
}]




let bc = 0
let evenNo = []

while(bc < 20){
    if(bc / 2 % 1){
        evenNo.push(bc)
    }
    bc ++
}

console.log(evenNo)

let a1 = [1,2,3,4,5,6,7,8,9,10]

const found = a1.find(item => item === 3)
console.log(found)

const found2 = a1.findIndex(item => item === 3)
console.log("🚀 ~ file: pract.js:186 ~ found2:", found2)

const found3 = a1.indexOf(3)
console.log("🚀 ~ file: pract.js:189 ~ found3:", found3)

const found5 = a1.find(item => item  === 5)
console.log("🚀 ~ file: pract.js:192 ~ found5:", found5)

let array = [10, 20, 30, 40, 50];
let array1 = [10,50];

let found6 = array.filter((ar , idx) => idx < 3)
console.log("🚀 ~ file: pract.js:196 ~ found6:", found6)

let found7 = array.filter(ar => ar%2 === 1)
console.log("🚀 ~ file: pract.js:199 ~ found7:", found7)

let found8 = (array , array1) => {
    let init = array
array1.forEach(element => {
    if(init.includes(element)){
        let idx = init.indexOf(element)
        init.splice(idx , 1 , "mutated")
    }
});
init
console.log("🚀 ~ file: pract.js:211 ~ found8 ~ init:", init)
}

found8(array , array1)

console.log([12, 5, 8, 130, 44].every(x => x >= 10))
console.log([12, 50, 18, 130, 44].every(x => x >= 10))

const value1 = [1, 2, 3, 4, 5, 6, 7]
const value2 = [5, 7, 6]

const check = ( value1 , value2) => {
    return value2.every(element => value1.includes(element))
}
console.log("🚀 ~ file: pract.js:223 ~ check ~ check:", check(value1 , value2))

const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];

const   mappedKvArray = kvArray.map(({key , value}) => {
    return ({[key] : value})
})

console.log(mappedKvArray)

const fruits = ["apple", "banana", "grapes", "mango", "orange",];

const filterdItem = (array , item) => {
    return array.filter(element => element.toLowerCase().includes(item.toLowerCase()))
}
console.log(filterdItem(fruits , 'ManG'))


const ArrayForR = [ 2, 3, 5, 7]

const reducer = (acc , reducer) => {
   const  returns =  acc+reducer
   return returns
}

console.log(ArrayForR.reduce(reducer))

const re = ArrayForR.reduce((a , c) => {return  a+c})
console.log("🚀 ~ file: pract.js:257 ~ re:", re)

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then (response => response.json())
// .then (json => console.log("fetched data 1",json))

// const fetchData = async () => { 
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const Json = await response.json()
//     console.log("fetched data",Json)
// }

// fetchData()