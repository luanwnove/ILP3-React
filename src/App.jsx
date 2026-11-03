import Card from './components/Card.jsx'
import Aluno from './components/Aluno.jsx'

export default function App() {
  const curso = 'ILP3 — React.js'
  const aula = 11

  return (
    <main className="container">
      <h1>{curso}</h1>
      <h2>Aula {aula} — Introdução ao React</h2>
      <p>Este é o primeiro componente React criado com Vite.</p>

      <h2>Conceitos da aula</h2>
      <div className="cards">
        <Card titulo="Virtual DOM" />
        <Card titulo="Componentes Funcionais" />
        <Card titulo="JSX" />
      </div>

      <h2>Alunos</h2>
      <section className="lista-alunos" aria-label="Lista de alunos">
        <Aluno nome="Ana" curso="Informática para Negócios" />
        <Aluno nome="Bruno" curso="Análise e Desenvolvimento de Sistemas" />
        <Aluno nome="Carla" curso="Gestão da Tecnologia da Informação" />
      </section>
    </main>
  )
}
