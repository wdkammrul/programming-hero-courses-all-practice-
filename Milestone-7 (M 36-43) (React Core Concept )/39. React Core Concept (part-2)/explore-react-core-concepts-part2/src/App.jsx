import './App.css'
import Counter from './Counter.jsx'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {

  function handleClick() {
    alert('button clicked')
  }

  const handleClick2 = () => {
    alert('button clicked 2')
  }


  const addToFive = (num) => {
    alert(num + 5);
  }


  return (
    <>
      <h2>React Core Concepts Part2</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      {/* নরমাল HTML এ এভাবে অনক্লিক অ্যাড করতাম */}
      {/* <button onclick='handleClick()'>Click Me</button> */}

      {/* রিয়েক্টে অনক্লিক এভাবে ইউজ করবো এখন থেকে  */}
      <button onClick={handleClick}>Click Me</button>

      <button onClick={handleClick2}>Click2</button>

      <button onClick={() => { alert('third clicked') }}>Third</button>

      {/* এখানে একটু প্যাচানো আছে যদি সরাসরি ফাংশনের অনক্লিক অ্যাড করা হয় তাহলে বাটনে ক্লিক করার আগেই অ্যালার্ট দিয়ে দিচ্ছে এজন্য একটা অ্যারে ফাংশনের  মধ্যে অনক্লিকটা রাখা  হয়েছে  */}
      <button onClick={() => { addToFive(3) }}>Four</button>
    </>
  )
}

export default App
