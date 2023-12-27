import { useState } from 'react';
import './Country.css'

// step-4 visitedFlags step-5 
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);


    const handleVisited = () => {
        setVisited(!visited);
    }

    // console.log(handleVisitedCountry)
    // const passWithParams = () => handleVisitedCountry(country) 


    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`} >
            <h3>{name?.common}</h3>
            <img src={flags?.png} />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>

            <button onClick={() => handleVisitedCountry(country)
            }>Mark Visited</button>
            <br />

            {/* step-5 visitedFlags */}
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? ' I have visited this country.' : ' I want to visit'}

        </div>
    );
};

export default Country;