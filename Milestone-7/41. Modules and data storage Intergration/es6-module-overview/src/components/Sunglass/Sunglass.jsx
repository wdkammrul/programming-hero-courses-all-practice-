import React from 'react';

import '/.Sunglass.css'
import Watch from '../Watch/Watch';
import { add, multiply, divideTheFirstNumberByTheSecondNumber as divide} from '../../Utils/Calculate';


const Sunglass = () => {
    const first = 55;
    const second = 44;
    const sum = add(first, second)
    const mult = multiply(first, second)

    // বড় নাম থাকলে ছোট করেও এক্সপোর্ট করতে পারি 
    const vaag = divide(first, second)
}

const Sunglass = () => {
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;