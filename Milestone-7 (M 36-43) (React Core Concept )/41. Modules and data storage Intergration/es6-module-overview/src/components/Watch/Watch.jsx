import React from 'react';

//  step-3 Fake data  props watch
const Watch = ({watch}) => {

    // step-4 Fake data
    const {id, name, price} = watch;
    return (
        <div>

            {/* step-5 Fake data */}

            <h2>Id: {id}</h2>
            <h2>Watches: {name}</h2>
            <h2>Price: {price}</h2>
        </div>
    );
};

export default Watch;