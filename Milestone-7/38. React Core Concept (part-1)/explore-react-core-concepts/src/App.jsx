import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'

function App() {

  const actors = ['Sakib', 'Sariful Raj', 'Jasim', 'Rubel']
  return (
    <>
      <h1>Vite + React</h1>
      <Actor name={'Bappa Raz'}></Actor>

      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      {/* <Todo
        task='learn react'
        isDone={true}>
      </Todo>
      <Todo
        task='Explore core concepts'
        isDone={false}>
      </Todo>
      <Todo
        task='Try jsx'
        isDone={true}>
      </Todo> */}
      {/* <Device name='Laptop' price='33'></Device>
      <Device name='Mobile' price='23'></Device>
      <Device name='Watch' price='19'></Device>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student grade="6" score='99'></Student>
      <Student grade="6" score='99'></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props) {
  console.log(props)
  return <h2>This device: {props.name} price: {props.price} </h2>
}

function Person() {
  const age = 13
  const money = 10;
  const person = { name: 'Kamrul', age: 12 }
  return <h3>I am {person.name} with age: {age + money}</h3>
}

const { grade, score } = { grade: '7', score: '99' }
function Student({ grade = 1, score = 0 }) {
  console.log(grade, score)
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Class: {grade} </p>
      <p>Score: {score}</p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '1px solid purple',
    borderRadius: '10px'
  }

  return (
    <div style={developerStyle}>
      <h5>Developer</h5>
      <p>Coding: </p>
    </div>
  )
}


export default App
