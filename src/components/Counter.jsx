import { useState } from 'react'
import Display from './Display.jsx'

export default function Counter() {
  const [contador, setContador] = useState(0)

  return (
    <section className="card">
      <h2>Contador</h2>
      <Display valor={contador} />
      <div className="acoes">
        <button onClick={() => setContador(valor => valor + 1)}>Incrementar</button>
        <button onClick={() => setContador(valor => valor - 1)}>Decrementar</button>
      </div>
    </section>
  )
}
