import useInputState from "../../hooks/useInputState";

const HookForm = () => {
    
    // step-4 
    // const [name, handleNameChange] = useInputState('Kamrul Islam')
    const emailState = useInputState('wdkammrul@gmail.com')

    // step-2 
    const handleSubmit = e => {
        console.log('form data', emailState.value)
        e.preventDefault();
    }

    return (
        <div>
            {/* step-3  */}
            <form onSubmit={handleSubmit}>

                {/* step-5  */}
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /><br /> */}

                <input {...emailState} type="email" name="email" /><br />

                <input type="password" name="password" />
                <br />

                {/* step-1 input submit btn */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;