import React from 'react'

const Filter = ({filter}) => (
  <div>
    rajaa näytettäviä: <input onChange={filter} />
  </div>
)

export default Filter