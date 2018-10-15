import React from 'react'

const Osa = ({osa}) => <p>{osa.nimi} {osa.tehtavia}</p>

const Sisalto = ({osat}) => osat.map(o =>
  <Osa osa={o} key={o.id} />
)

export default Sisalto