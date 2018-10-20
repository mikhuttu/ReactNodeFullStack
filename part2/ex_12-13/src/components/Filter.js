import React from 'react'

const Filter = ({handler}) => (
  <div>
    find countries: <input onChange={handler} />
  </div>
)

export default Filter