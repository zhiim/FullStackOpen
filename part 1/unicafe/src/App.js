import React,{useState} from 'react'

const Title = (props) => {
  return (
    <div>
      <h2>{props.text}</h2>
    </div>
  )
}

const Button = (props) => {
  return (
  <div>
    <button onClick={props.onClick[0]}>
      {props.text[0]}
    </button>
    <button onClick={props.onClick[1]}>
      {props.text[1]}
    </button>
    <button onClick={props.onClick[2]}>
      {props.text[2]}
    </button>
  </div>
  )
}

const StatisticLine = (props) => {
  return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
  )
} 

const Display = (props) => {
  if ((props.good + props.neutral + props.bad) === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
  <div>
    <table>
    <tbody>
    <StatisticLine text="good" value={props.good} />
    <StatisticLine text="neutral" value={props.neutral} />
    <StatisticLine text="bad" value={props.bad} />
    <StatisticLine text="all" value={props.good + props.neutral + props.bad} />
    <StatisticLine text="average" value={(props.good - props.bad)/(props.good + props.neutral + props.bad)} />
    <StatisticLine text="positive" value={((props.good)/(props.good + props.neutral + props.bad)*100)+' %'} />
    </tbody>
    </table>
  </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title text="give feedback" />
      <Button onClick={[() => setGood(good + 1),
                        () => setNeutral(neutral + 1),
                        () => setBad(bad + 1)]} 
              text={["good", "neutral", "bad"]} />
      <Title text="statistics" />
      <div>
        <Display good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  )
}

export default App