import React from 'react'

const DisplayNumber = ({name, number}) => (
  <tr>
    <td>{name}</td>
    <td>{number}</td>
  </tr>
)

const Numbers = ({directory}) => (
  <table>
    <tbody>
      {directory.map(p => 
        <DisplayNumber key = {p.name} name = {p.name} number = {p.number} />
      )}
    </tbody>
  </table>
)

export default Numbers