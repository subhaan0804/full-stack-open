import {useState} from "react"

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))
  const [mostVote, setMostVote] = useState(0)

  const handleSetVote = () => {
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy)
    console.log(copy)

    const maxVotes = Math.max(...copy)
    const mostVotedIndex = copy.indexOf(maxVotes)
    setMostVote(mostVotedIndex)
  }

  const handleSetSelected = () => {
    let x = Math.floor(Math.random() * anecdotes.length)
    setSelected(x);
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <div>{ anecdotes[selected] }</div>
      <div>has {vote[selected]} votes</div>
      <br />
      <button onClick={handleSetSelected}>Next</button>
      <button onClick={handleSetVote}>Vote</button>

      <h2>Anecdote with most votes</h2>
      <div>{anecdotes[mostVote]}</div>

    </div>
  )
}

export default App