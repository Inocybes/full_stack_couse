import { useState } from 'react'
import './App.css'

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleClickGood = () => {
    setGood((good) => good + 1)
    // console.log(good);
  }
  const handleClickNeutral = () => {
    setNeutral((neutral) => neutral + 1)
    //console.log(neutral);
  }
  const handleClickBad = () => {
    setBad((bad) => bad + 1)
    // console.log(bad);
  }

  const total = good + neutral + bad
  const average = (good - bad )/ total
  const positive = good*(100/total)


  return (
    <div>
    <section>
      <h1>give feedback</h1>
      <button onClick={handleClickGood}>good</button>
      <button onClick={handleClickNeutral}>neutral</button>
      <button onClick={handleClickBad}>bad</button>
    </section>
    <section>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
      
    </section>
    
  </div>
  )
  // const [count, setCount] = useState(0)

  // return (
  //   <div className="App">
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src="/vite.svg" className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://reactjs.org" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
    // </div>
  // )
}

export default App
