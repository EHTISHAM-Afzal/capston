import React, { useReducer } from 'react'

const reducer = (state , action) => {
  if (action.type === "salad"){
    return {...state , money : state.money + 10 }
  }
  else if (action.type === "juice"){
    return {...state , money : state.money + 20 }
  }
  else if (action.type === "buy"){ 
    return {...state , money : state.money - 30 }
  }
}


const About = () => {
  const initialState = {money : 100}
  const [state , Dispatch ] = useReducer(reducer , initialState)
  return (
    <div className="grids-section-width flex flex-col justify-center items-center h-96 ">
      <p>Total Wallet Amount {state.money}</p>
      <button onClick={()=> Dispatch({type : "salad"})}>
        sell Salad
      </button>
      <button onClick={()=> Dispatch({type : "salad"})}>
        sell Juice
      </button>
      <button onClick={()=> Dispatch({type : "buy"})}>
        Buy ingredients
      </button>
    </div>
  )
}

export default About



// import React, { useReducer , useState } from "react";

// const reducer = (state , action) => {
//   if (action.type === "sell"){
//     return {...state , money : state.money + 10}
//   }
//   else if (action.type === "buy"){
//     return {...state , money : state.money - 10}
//   }
// }

// const About = () => {
//   const initialState = {money : 100}
//   const [state , Dispatch] = useReducer(reducer , initialState)
//   return (
//     <div className="grids-section-width flex flex-col justify-center items-center h-96 ">
//       <p>Total Wallet Amount {state.money}</p>
//       <button onClick={()=> Dispatch({type: "sell"})}>sell</button>
//       <button onClick={()=> Dispatch({type: "buy"})}>Buy</button>
//     </div>
//   );
// };

// export default About;
