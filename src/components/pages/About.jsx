import {  useState } from "react";

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
    cities: ["islamAbad ", "karachi", "lahor", "quetta"],
  },
];


const About = () => {
  const [selectedCountry, setSelectedCountry] = useState();
  const [ setSelectedCity] = useState();
  return (
    <>
      <div className="grids-section-width flex flex-col justify-center items-center min-h-[63vh]">
        <select name="coutry" id="country" onChange={e => setSelectedCountry(e.target.value)}>
          <option value="">select country</option>
          {countriese.map(countries => <option key={countries.country} value={countries.country}>{countries.country}</option>)}
        </select>
        {selectedCountry && 
        <select name="city" id="city" onChange={e => setSelectedCity(e.target.value)}>
          <option value="">select city</option>
          {countriese.find(({country}) => country === selectedCountry).cities.map(city => <option key={city} value={city}>{city}</option>)}
        </select>}

      
      </div>
    </>
  );
};

export default About;