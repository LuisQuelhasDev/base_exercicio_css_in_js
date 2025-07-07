import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import Global, { Div } from './global'

function App() {
  return (
    <>
      <Global />
      <Header />
      <Hero />
      <Div>
        <ListaVagas />
      </Div>
    </>
  )
}

export default App
