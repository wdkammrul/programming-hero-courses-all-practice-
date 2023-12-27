import './App.css'

function App() {

  // step-2 next step-3 server site
  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }
    console.log(user)


    // step-4 next step-5 server site
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },

      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
          

        // step-7 next step-8 main.jsx
        if(data.insertedId){
          alert('Users added successfully')
          form.reset();
        }

      })
  }


  return (
    <>
      <h1>Simple Crud</h1>

      {/* step-1  */}
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder='Name' id="" /><br /><br />
        <input type="email" name="email" placeholder='Email' id="" /><br /><br />
        <input type="submit" value="Add User" />
      </form>
    </>
  )
}

export default App
