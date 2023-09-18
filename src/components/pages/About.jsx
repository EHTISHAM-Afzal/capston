import React, { useReducer, useState } from "react";

const countriese = [
  {
    country: "india",
    cities: ["mumbai", "delhi", "chennai", "bangalore"],
  },
  {
    country: "usa",
    cities: ["new york", "los angeles", "san fransisco", "chicago"],
  },
  {
    country: "pakistan",
    cities: ["islamAbad ", "karachi", "lahore", "quetta"],
  },
];

const reducer = (state, action) => {
  if (action.type === "salad") {
    return { ...state, money: state.money + 10 };
  } else if (action.type === "juice") {
    return { ...state, money: state.money + 20 };
  } else if (action.type === "buy") {
    return { ...state, money: state.money - 30 };
  }
};

const About = () => {
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const initialState = { money: 100 };
  const [state, Dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="grids-section-width flex flex-col justify-center items-center h-96 ">
        <p>Total Wallet Amount {state.money}</p>
        <button onClick={() => Dispatch({ type: "salad" })}>sell Salad</button>
        <button onClick={() => Dispatch({ type: "salad" })}>sell Juice</button>
        <button onClick={() => Dispatch({ type: "buy" })}>
          Buy ingredients
        </button>
      </div>
      <div className="grids-section-width flex flex-col justify-center items-center h-96">
        <select
          className="border "
          placeholder="select"
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="" selected hidden>
            select
          </option>
          {countriese.map(({ country }) => {
            return <option value={country}>{country}</option>;
          })}
        </select>

        {selectedCountry && (
          <select
            className="border "
            placeholder="select"
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="" selected hidden>
              select
            </option>
            {countriese
              .find(({ country }) => country === selectedCountry)
              .cities.map((city) => {
                return <option value={city}>{city}</option>;
              })}
          </select>
        )}
      </div>
    </>
  );
};

export default About;