import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const Button = ({handle, text}) => (
  <button onClick={handle}>
    {text}
  </button>
)

const Statistics = ({good, neutral, bad}) => (
  <div>
    <h1>statistiikka</h1>

    <div>
      <div>hyvä {good}</div>
      <div>neutraali {neutral}</div>
      <div>huono {bad}</div>
    </div>
  </div>
)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  }

  render() {
    const incrementGood = () => this.setState( { good: this.state.good + 1 })
    const incrementNeutral = () => this.setState( { neutral: this.state.neutral + 1 })
    const incrementBad = () => this.setState( { bad: this.state.bad + 1 })

    return (
      <div>
        <h1>anna palautetta</h1>

        <div>
          <Button
            handle={incrementGood}
            text="hyvä" />
          <Button
            handle={incrementNeutral}
            text="neutraali" />
          <Button
            handle={incrementBad}
            text="huono" />
        </div>

        <Statistics
          good = {this.state.good}
          neutral = {this.state.neutral}
          bad = {this.state.bad} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
