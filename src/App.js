import React, { useState, useEffect } from 'react';

import ListNested from './components/ListNested'
import api from './services'


const App = () => {
  const [props, setData] = useState([])

  useEffect(() => {
    api.get('/GuiiHenriq/04d6372eff5056e74dd5e88e713a3a1d/raw/9fcfdb4c4fac19f8dc13bfb8091ccbd06f1203af/dataitems.json')
      .then((r) => {
        setData(Object.values(r.data))
      })
      .catch(err => alert('API NÃO CARREGOU!'))
  }, [])

  return (
    <div className="app">
      <h1>Árvore de Itens</h1>
      <ListNested data={props} />
    </div>
  )
}

export default App;
