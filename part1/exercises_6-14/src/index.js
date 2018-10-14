import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({handle, text}) => (
  <button onClick={handle}>
    {text}
  </button>
)

const Statistic = ({description, value}) => (
  <div>{description} {value}</div>
)

const Statistics = ({good, neutral, bad}) => {
  const sum = (...args) => (
    args.reduce((previous, current) => previous + current)
  )

  const average = (good, neutral, bad) => (
    Number((good - bad) / sum(good, neutral, bad)).toFixed(1)
  )

  const positive = (good, neutral, bad) => {
    const percentage = Number(100 * good / sum(good, neutral, bad)).toFixed(1);
    return percentage.toString() + " %";
  }

  const statistics = (good, neutral, bad) => {
    if (sum(good, neutral, bad) > 0) {
      return (
        <div>
          <Statistic description = "hyvä" value = {good} />
          <Statistic description = "neutraali" value = {neutral} />
          <Statistic description = "huono" value = {bad} />
          <Statistic description = "keskiarvo" value = {average(good, neutral, bad)} />
          <Statistic description = "positiivisia" value = {positive(good, neutral, bad)} />
        </div>
      )
    } else {
      return (
        <div>
          <div>ei yhtään palautetta annettu</div>
        </div>
      )
    }   
  }

  return (
    <div>
      <h1>statistiikka</h1>

      {statistics(good, neutral, bad)}
    </div>
  )
}

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
    const increment = (choice, choiceName) => {
      return () => {
        this.setState({ [choiceName]: choice + 1})
      }
    }

    return (
      <div>
        <h1>anna palautetta</h1>

        <div>
          <Button
            handle={increment(this.state.good, "good")}
            text="hyvä" />
          <Button
            handle={increment(this.state.neutral, "neutral")}
            text="neutraali" />
          <Button
            handle={increment(this.state.bad, "bad")}
            text="huono" />
        </div>

        <Statistics good = {this.state.good} neutral = {this.state.neutral} bad = {this.state.bad} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
