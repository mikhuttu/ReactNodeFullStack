import React from 'react'
import ReactDOM from 'react-dom'

const PrintAnecdote = ({anecdote, voteCount}) => (
  <div>
    <div>{anecdote}</div>
    <div>has {voteCount} votes</div>
  </div>
)

const MostVoted = ({votes, anecdotes}) => {
  const maxIndex = votes.indexOf(Math.max(...votes));
  const voteCount = votes[maxIndex];
  const anecdote = anecdotes[maxIndex];

  return (
    <div>
      <h2>anecdote with most votes:</h2>

      <PrintAnecdote
        anecdote = {anecdote}
        voteCount = {voteCount} />
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: anecdotes.map(_ => 0)
    }
  }

  vote = () => {
    const newVotes = [...this.state.votes]
    newVotes[this.state.selected] += 1

    this.setState({votes: newVotes})
  }

  nextAnecdote = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    this.setState({selected: random})
  }

  render() {
    const index = this.state.selected;

    return (
      <div>
        <PrintAnecdote
          anecdote = {anecdotes[index]}
          voteCount = {this.state.votes[index]} />

        <div>
          <button onClick = {this.vote}>
            vote
          </button>

          <button onClick = {this.nextAnecdote}>
            next anecdote
          </button>

          <MostVoted
            votes = {this.state.votes}
            anecdotes = {anecdotes} />
        </div>
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
