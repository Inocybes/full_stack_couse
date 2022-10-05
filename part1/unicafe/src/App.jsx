import { useState } from "react";
import "./App.css";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = good * (100 / total);

 

  return (
    <>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </>
    
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood((good) => good + 1);
    // console.log(good);
  };
  const handleClickNeutral = () => {
    setNeutral((neutral) => neutral + 1);
    //console.log(neutral);
  };
  const handleClickBad = () => {
    setBad((bad) => bad + 1);
    // console.log(bad);
  };

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
        <Statistics good={good} neutral={neutral} bad={bad} />
        {/* <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
       */}
      </section>
    </div>
  );
};

export default App;
