import { useEffect } from "react";
import { useState } from "react";

const Country = () => {

    // step-1 
    const [countries, setCountries] = useState([]);

    // step-2 
    useEffect(() => {
        // step-3 
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div>
            {/* step-4  */}
            <h3>Countries:{countries.length}</h3>

            {/* step  */}
            {
                countries.map(country =><Country ></Country>)
            }
        </div>
    );
};

export default Country;