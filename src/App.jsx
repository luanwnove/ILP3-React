import Aluno from './components/Aluno.jsx'
import Card from './components/Card.jsx'
import Counter from './components/Counter.jsx'
import ProductList from './components/ProductList.jsx'
import UserList from './components/UserList.jsx'
import TodoApp from './components/TodoApp.jsx'

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
        <h1>React — Aulas 11 a 13</h1>
        <p>Componentes, estados, eventos, formulários controlados e listas dinâmicas.</p>
      </header>

      <Card titulo="Componentes e props — Aula 11">
        <ul>{alunos.map(aluno => <Aluno key={aluno.id} nome={aluno.nome} curso={aluno.curso} />)}</ul>
      </Card>

      <Counter />
      <UserList />
      <ProductList />
      <TodoApp />
    </main>
  )
}
