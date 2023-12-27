import { useState } from "react";

// step-1
const useInputState = (defaultValue = null) => {
  const [value, setValue] = useState(defaultValue);

  // step-2
//   const handleChange = e => {
//     setValue(e.target.value);
//   };

//  step-2 
  const onChange = e => {
    setValue(e.target.value);
  };
   

  // step-3
//   return [value, handleChange];
 
 return{
    value,
    onChange
 }

};

export default useInputState;