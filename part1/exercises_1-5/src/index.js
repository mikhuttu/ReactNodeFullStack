import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = props => (
  <h1>{props.kurssi.nimi}</h1>
)

const Osa = props => {
  const osa = props.osa;
  return <p>{osa.nimi} {osa.tehtavia}</p>
}

const Sisalto = props => (
  props.osat.map(o =>
    <Osa osa={o} key={o.nimi} />
  )
)

const Yhteensa = props => {
  const add = (a, b) => a + b;

  const yhteensa = props
  .osat
  .map(o => o.tehtavia)
  .reduce(add, 0);

  return <p>yhteensä {yhteensa} tehtävää</p>;
}

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa osat={kurssi.osat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
