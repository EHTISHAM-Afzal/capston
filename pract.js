// /// find duplicate array 
// /// remove the duplicate value from initial array 

const state = [{ Date: "2023-08-30", Time: "18:00", Guests: "05", Occasion: "Birthday", }, { Date: "2023-08-25", Time: "19:00", Guests: "05", Occasion: "Anniversary", }]
const action = [{ Date: "2023-08-30", Time: "17:00", Guests: "05", Occasion: "Birthday", }]
const initialArray = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const f = (state, action) => {
    // Step 1: Create a map from the state array with Date as key and Time as value
    const dateToTimeMap = new Map();
    state.forEach(item => {
        dateToTimeMap.set(item.Date, item.Time);
    });
    // Step 2: Iterate over the action array and remove the Time
    // from the initialArray if the Date exists in the map
    action.forEach(item => {
        if (dateToTimeMap.has(item.Date)) {
            const index = initialArray.indexOf(dateToTimeMap.get(item.Date));
            if (index !== -1) {
                initialArray.splice(index, 1);
            }
        }
    });

    // Return the modified initialArray
    return initialArray;
};

// Call the function with the provided state and action arrays
console.log(f(state, action));



for (const index of state) {
    console.log(index)
}

let o = [1 , 5 ,2 , 8 , 10]

const c = o.reduce((a , c) => a + c )
console.log(c)