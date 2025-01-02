import {useState} from 'react'

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticsLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad

  if (all === 0) {
    return <div>No feedback given</div>
  }

  // if (!(good && neutral && bad)) {
  //   return <div>No feedback given</div>
  // }

  const avg = ((good - bad)/ all).toFixed(2)
  const posPer = ((good*100)/all).toFixed(2)

  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={good}/>
        <StatisticsLine text="neutral" value={neutral}/>
        <StatisticsLine text="bad" value={bad}/>
        <StatisticsLine text="all" value={all}/>
        <StatisticsLine text="average" value={avg} />
        <StatisticsLine text="positive" value={`${parseFloat(posPer)} %`}/>
        </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)  

  const handleSetGood = () => setGood(good + 1)
  const handleSetNeutral = () => setNeutral(neutral + 1)
  const handleSetBad = () => setBad(bad + 1)

  return (
    <div>
      <h2>Give Feedback</h2>

      <Button text="good" onClick={handleSetGood} />
      <Button text="neutral" onClick={handleSetNeutral} />
      <Button text="bad" onClick={handleSetBad} />

      <h2>statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App