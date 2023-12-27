import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {

  // ধাপ-1 Fake data fetch use 
  const [watches, setWatches] = useState([])

  // ধাপ-2 Fake data fetch use 
  useEffect(()=>{
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  },[])


//  নিচে  একটা ফেইক ডাটা তৈরি করা হলো 
  // // step-1 Fake data
  // const watches = [
  //   {id: 1, name: 'Apple Watch', price: 200},
  //   {id: 2, name: 'Samsu Watch', price: 300},
  //   {id: 3, name: 'MI Watch', price: 100}
  // ]

  // আমি চাইলে উপরের ফেইক ডাটাটা চ্যাটজিপির কাছ থেকেও নিতে পারি ।
  // give me 5 smart watch array of objects format data . i need just the id, name and price
  // step-1 Fake data
  // const watches = [
  //   {
  //     id: 1,
  //     name: "Apple Watch Series 6",
  //     price: 399.99,
  //   },
  //   {
  //     id: 2,
  //     name: "Samsung Galaxy Watch 4",
  //     price: 299.99,
  //   },
  //   {
  //     id: 3,
  //     name: "Fitbit Versa 3",
  //     price: 229.95,
  //   },
  //   {
  //     id: 4,
  //     name: "Garmin Forerunner 945",
  //     price: 599.99,
  //   },
  //   {
  //     id: 5,
  //     name: "Fossil Gen 5",
  //     price: 249.00,
  //   },
  // ];


  return (
    <>   
      <h1>ES6 Module Overview</h1>
      {/*  step-2 Fake data */}
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
