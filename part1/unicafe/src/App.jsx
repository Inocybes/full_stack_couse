import { useState } from "react";
import "./App.css";


const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = good * (100 / total);

  if (total === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="total" value ={total} />
      <StatisticLine text="average" value ={average} />
      <StatisticLine text="positive" value ={positive} />
    </>
  );
};

const Button = ({onClick, text}) => (
  
  <button onClick={onClick}>
  {text}
  </button>
)

const StatisticLine = ({text, value}) => {
  if (text === "positive") {
    return (
      <div>
        <p>{text} {value} %</p>
      </div>
    ) 
  }
  return (
    <div>
      <p>{text} {value}</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood((good) => good + 1);
  };
  const handleClickNeutral = () => {
    setNeutral((neutral) => neutral + 1);
  };
  const handleClickBad = () => {
    setBad((bad) => bad + 1);
  };

  return (
    <div>
      <section>
        <h1>give feedback</h1>
        <Button onClick={handleClickGood} text="good"/>
        <Button onClick={handleClickNeutral} text="neutral"/>
        <Button onClick={handleClickBad} text="bad"/>
      </section>
      <section>
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </section>
    </div>
  );
};

export default App;
