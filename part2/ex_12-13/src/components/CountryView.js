import React from 'react'
import Country from './Country'

const CountryList = ({countries, viewCountryFunction}) => (
  <div>
    <ul>
      {countries.map(c =>
        <li key={c.name} onClick={() => viewCountryFunction(c)}>{c.name}</li>
      )}
    </ul>
  </div>
)

const CountryView = ({countries, viewCountryFunction}) => {
  let view;

  if (countries === undefined) {
    view = <div>fetching countries..</div>
  } else if (countries.length === 0) {
    view = <div>no country by given search criteria was found</div>
  } else if (countries.length === 1) {
    view = <Country country = {countries[0]} />
  } else if (countries.length < 10) {
    view = <CountryList countries = {countries} viewCountryFunction = {viewCountryFunction} />
  } else {
    view = <div>too many matches, specify another filter</div>
  }

  return (
    <div>{view}</div>
  )
}


export default CountryView