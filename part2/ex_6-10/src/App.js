import React from 'react';
import AddEntry from './components/AddEntry'
import Filter from './components/Filter'
import Numbers from './components/Numbers'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      filter: ''
    }

    this.state.displayedPeople = this.state.persons
  }

  addEntry = (event) => {
    event.preventDefault()

    const name = this.state.newName
    const number = this.state.newNumber

    if (! this.state.persons.map(p => p.name).includes(name)) {
      const person = {name, number}
      const people = this.state.persons.concat(person)

      this.setState({persons: people})
      this.filterPeople(people, this.state.filter)
    }
  }

  filterHandler = (event) => (
    this.filterPeople(this.state.persons, event.target.value.toLowerCase())
  )
  
  filterPeople = (people, filter) => {
    const displayedPeople = filter.length === 0 ?
    people :
    people.filter(p => p.name.toLowerCase().includes(filter))

    this.setState({filter, displayedPeople})
  }

  updateNewName = (event) => this.setState({newName: event.target.value})
  updateNewNumber = (event) => this.setState({newNumber: event.target.value})

  render() {
    return (
      <div>
        <h1>Puhelinluettelo</h1>

        <Filter filter = {this.filterHandler} />

        <h2>Numerot</h2>

        <Numbers directory = {this.state.displayedPeople} />

        <h2>Lisää uusi</h2>

        <AddEntry
          addEntry = {this.addEntry}
          updateNewName = {this.updateNewName}
          updateNewNumber = {this.updateNewNumber}
        />
      </div>
    )
  }
}

export default App