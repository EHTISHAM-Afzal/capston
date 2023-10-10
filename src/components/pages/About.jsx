import { useState } from "react";

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
  const [setSelectedCity] = useState();
  return (
    <>
      <div className="grids-section-width flex flex-col justify-center items-center min-h-[63vh]">
        <select
          name="country"
          id="country"
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="">select Country</option>
          {countriese.map(({ country }) => (
            <option key={country}>{country}</option>
          ))}
        </select>
        {selectedCountry && (
          <select name="city" id="city">
            <option value=""> select city</option>
            {countriese.find(({country})=> country === selectedCountry).cities.map(city => <option key={city} value={city} >{city}</option>)}
          </select>
        )}
      </div>
    </>
  );
};

export default About;
