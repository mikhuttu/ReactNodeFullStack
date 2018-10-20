import React from 'react'

const Country = ({country}) => {
  
  const flagSize = {
    width: "25%",
    heigth: "25%"
  }

  const bottomMargin = {
    "marginBottom": "15px"
  }

  const flagAlt = country => (
    "Flag of " + country.name
  )
  
  return (
    <div>
      <h1>{country.name} ({country.nativeName})</h1>

      <div style = {bottomMargin}>
        capital: {country.capital}
      </div>

      <div style = {bottomMargin}>
        population: {country.population}
      </div>

      <div>
        <img src = {country.flag} alt={flagAlt(country)} style={flagSize} />
      </div>
    </div>
  )
}

export default Country