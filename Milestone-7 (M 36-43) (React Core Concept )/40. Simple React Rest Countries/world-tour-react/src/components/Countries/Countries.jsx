import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    // step-1 
    const [countries, setCountries] = useState([])

    const [visitedCountries, setVisitedCountries] = useState([]);

    // step-1 visitedFlags
    const [visitedFlags, setVisitedFlags] = useState([]);

    // step-2 
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountry =country =>{
        console.log('add this to your visited country')
        // console.log(country)
        // visitedCountries.push(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)
    }


    // step-2 visitedFlags
    const handleVisitedFlags = flag =>{ 
        // console.log('flag adding')

        // step-6 visitedFlags
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <div >
            {/* step-3  */}
            <h3>Countries: {countries.length}</h3>

            <div>
                <h4>Visited Countries: {visitedCountries.length}</h4>
                <ul>
                   {
                     visitedCountries.map(country =><li key={country.cca3}>{country.name.common}</li>)
                   }
                </ul>
            </div>

            {/*  step-7 visitedFlags */}
            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>

            {/* step-4  */}
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3} 
                        handleVisitedCountry={handleVisitedCountry}
                        // step-3 visitedFlags
                        handleVisitedFlags={handleVisitedFlags}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;