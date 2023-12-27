const SimpleForm = () => {

    // step-2 
    const handleSubmit = e => {
        // e.preventDefault(); এর মাধ্যমে কোনো সাবমিট বাটনে ক্লিক করলে পেজটা আর রিলোড হয় না ।
        e.preventDefault();

        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value)

        console.log('form submitted')
    }

    return (
        <div>
            {/* step-3  on submit */}
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" /><br />

                <input type="email" name="email" /><br />

                <input type="text" name="phone" />
                <br />

                {/* step-1 input submit btn */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;