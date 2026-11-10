import Aluno from './components/Aluno.jsx'
import Card from './components/Card.jsx'
import Counter from './components/Counter.jsx'
import ProductList from './components/ProductList.jsx'
import UserList from './components/UserList.jsx'

const alunos = [
  { id: 1, nome: 'Ana', curso: 'Informática para Negócios' },
  { id: 2, nome: 'Bruno', curso: 'Análise e Desenvolvimento de Sistemas' },
  { id: 3, nome: 'Carla', curso: 'Informática para Negócios' }
]

export default function App() {
  return (
    <main className="container">
      <header className="cabecalho">
        <p className="etiqueta">Linguagem de Programação III</p>
        <h1>React — Aula 12</h1>
        <p>Props, useState, imutabilidade e renderização dinâmica.</p>
      </header>

      <Card titulo="Componentes e props — Aula 11">
        <ul>{alunos.map(aluno => <Aluno key={aluno.id} nome={aluno.nome} curso={aluno.curso} />)}</ul>
      </Card>

      <Counter />
      <UserList />
      <ProductList />
    </main>
  )
}
