import React from 'react'

const PersonDetails = ({person, deleteFunction}) => (
  <tr>
    <td>{person.name}</td>
    <td>{person.number}</td>
    <td>
      <button onClick={() => deleteFunction(person)}>poista</button>
    </td>
  </tr>
)

const PeopleList = ({people, deleteFunction}) => (
  <table>
    <tbody>
      {people.map(person => 
        <PersonDetails key = {person.name} person = {person} deleteFunction = {deleteFunction} />
      )}
    </tbody>
  </table>
)

export default PeopleList