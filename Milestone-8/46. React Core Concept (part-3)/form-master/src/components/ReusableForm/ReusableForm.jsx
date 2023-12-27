const ReusableForm = ({formTitle, handleSubmit, submitBtnText = 'Submit',
children}) => {


    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.value,
            email: e.target.value,
            password: e.target.value,
        }

        handleSubmit(data);
    }

    return (
        <div>

            
            {children}

            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" /><br />

                <input type="email" name="email" /><br />

                <input type="password" name="password" />
                <br />

                {/* step-1 input submit btn */}
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusableForm;