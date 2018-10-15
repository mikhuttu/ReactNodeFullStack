import React from 'react'
import Sisalto from './Sisalto'

const Otsikko = ({kurssi}) => <h1>{kurssi.nimi}</h1>

const Yhteensa = ({osat}) => {
  const yhteensa = osat
    .map(o => o.tehtavia)
    .reduce((a, b) => a + b);

  return <p>yhteensä {yhteensa} tehtävää</p>;
}

const Kurssi = ({kurssi}) => (
  <div>
    <Otsikko kurssi={kurssi} />
    <Sisalto osat={kurssi.osat} />
    <Yhteensa osat={kurssi.osat} />
  </div>
)

export default Kurssi