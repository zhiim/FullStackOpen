import React,{useState} from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0])
  console.log("points ", points)

  const getRandomInt = (min, max)  => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const handleClick = () => {
    let ran = getRandomInt(0,7)
    //console.log("selected before", selected)
    setSelected(ran)
    //console.log("selected after", ran)
  }
  const handleVotes = () => {
    //console.log("selected = ", selected)
    const copy = [...points]
    //console.log("points", points)
    //console.log("copy", copy)
    copy[selected] += 1
    console.log(copy[selected])
    setPoints(copy)
  }

  let max = Math.max(...points)
  console.log("max ", max)
  let max_selected
  for (let i = 0;;i++) {
    if (points[i] === max) {
      max_selected = i
      break
    }
  }
  console.log("max_selected ", max_selected)
  if (max_selected === selected) {
    return (
      <div>
        <div>
          <h2>Anecdote of the day</h2>
        </div>
        {anecdotes[selected]}
        <div>
          has {points[selected]} votes
        </div>
        <div>
          <button onClick={handleVotes}>vote</button>
          <button onClick={handleClick}>next anecdote</button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div>
        <h2>Anecdote of the day</h2>
      </div>
      {anecdotes[selected]}
      <div>
        has {points[selected]} votes
      </div>
      <div>
        <button onClick={handleVotes}>vote</button>
        <button onClick={handleClick}>next anecdote</button>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
      </div>
      {anecdotes[max_selected]}
    </div>
  )
}

export default App