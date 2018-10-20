import React from 'react'

const AddEntry = ({addEntry, updateNewName, updateNewNumber}) => (
  <form onSubmit={addEntry}>
    <div>
      nimi: <input onChange={updateNewName} />
    </div>
    <div>
      numero: <input onChange={updateNewNumber} />
    </div>
    <div>
      <button type="submit">lisää</button>
    </div>
  </form>
)

export default AddEntry