import React from 'react';
import CountryView from './components/CountryView'
import Filter from './components/Filter'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: []
    }
  }

  componentDidMount() {
    axios
    .get("https://restcountries.eu/rest/v2/all")
    .then(response => {
      const countries = response.data
      const visibleCountries = countries
      this.setState({countries, visibleCountries})
    })
  }

  filterHandler = (event) => {
    const filter = event.target.value.toLowerCase()
    
    const visibleCountries = filter.length === 0 ?
      this.state.countries :
      this.state.countries.filter(c => c.name.toLowerCase().includes(filter))
  
    this.setState({visibleCountries})
  }

  viewCountry = (country) => {
    const visibleCountries = [country]
    this.setState({visibleCountries})
  }

  render() {
    return (
      <div>
        <Filter handler = {this.filterHandler} />
        <CountryView
          countries = {this.state.visibleCountries}
          viewCountryFunction = {this.viewCountry}
        />
      </div>
    )
  }
}

export default App