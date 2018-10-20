import React from 'react';
import AddEntry from './components/AddEntry'
import Filter from './components/Filter'
import PeopleList from './components/PeopleList'
import axios from 'axios'
import personService from './services/personService'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      displayedPeople: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentDidMount() {
    axios
    .get("http://localhost:3001/persons")
    .then(response => {
      const people = response.data

      this.setState({
        persons: people,
        displayedPeople: people
      })
    })
  }


  addEntry = (event) => {
    const insertPerson = person => (
      personService
      .insert(person)
      .then(insertedPerson => {
        const people = this.state.persons.concat(insertedPerson)

        this.setState({persons: people})
        this.filterPeople(people, this.state.filter)         
      })
    )

    const updateNumber = (person, newNumber) => {
      const updatedPerson = { ...person, number: newNumber }

      personService
        .update(updatedPerson)
        .then(data => {
          const persons = this.state.persons.map(p => p.id === updatedPerson.id ? updatedPerson : p)
          const displayedPeople = this.state.displayedPeople.map(p => p.id === updatedPerson.id ? updatedPerson : p)
          this.setState({persons, displayedPeople})
        })
    }

    event.preventDefault()

    const name = this.state.newName
    const number = this.state.newNumber
    const person = {name, number}

    const existingPerson = this.state.persons.find(p => p.name === person.name)

    if (! existingPerson) {
      insertPerson(person)
    } else if (window.confirm(`${name} on jo luettelossa. Korvataanko vanha numero uudella?`)) {
      updateNumber(existingPerson, number)
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

  remove = (person) => {
    if (window.confirm(`Haluatko varmasti poistaa henkilön ${person.name}?`)) {
      personService
        .remove(person.id)
        .then(response => {
          const persons = this.state.persons.filter(p => p.id !== person.id)
          const displayedPeople = this.state.displayedPeople.filter(p => p.id !== person.id)

          this.setState({persons, displayedPeople})
        })
    }
  }

  updateNewName = (event) => this.setState({newName: event.target.value})
  updateNewNumber = (event) => this.setState({newNumber: event.target.value})

  render() {
    return (
      <div>
        <h1>Puhelinluettelo</h1>

        <Filter filter = {this.filterHandler} />

        <h2>Numerot</h2>

        <PeopleList people = {this.state.displayedPeople} deleteFunction = {this.remove} />

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