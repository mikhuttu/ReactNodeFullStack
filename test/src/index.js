import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const Display = ({counter}) => <div>Counter value: {counter}</div>

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  setValue = (value) => () => this.setState({ counter: value})

  render() {
    return (
      <div>
        <Display counter={this.state.counter}/>
        <div>
          <Button
            handleClick={this.setValue(this.state.counter + 1)}
            text="Increment" />
          <Button
            handleClick={this.setValue(this.state.counter - 1)}
            text="Decrement" />
          <Button
            handleClick={this.setValue(0)}
            text="Reset" />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
