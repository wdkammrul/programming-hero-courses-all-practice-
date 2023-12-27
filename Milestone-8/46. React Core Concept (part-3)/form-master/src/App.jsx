import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import HookForm from './components/HookForm/HookForm'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {

  // const handleSignUpSubmit = data => {
  //    console.log('sign up data', data)
  // }

  // const handleUpdateProfile = data => {
  //    console.log('update data', data)
  // }



  return (
    <>
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}

      {/* <ReusableForm
        formTitle={'Sign Up'}
        handleSubmit={handleSignUpSubmit}>
          <div>
             <h2>Sign Up</h2>
             <p>Please sign up right now</p>
          </div>
      </ReusableForm>

      <ReusableForm formTitle={'Profile Update'}
        handleSubmit={handleUpdateProfile}
        submitBtnText='Update'>
          <div>
            <h2>Update Profile</h2>
            <p>Please update profile</p>
          </div>
      </ReusableForm> */}
    </>
  )
}

export default App
