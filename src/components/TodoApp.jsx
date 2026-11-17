import { useState } from 'react'

const prioridades = ['Alta', 'Média', 'Baixa']

export default function TodoApp() {
  const [titulo, setTitulo] = useState('')
  const [prioridade, setPrioridade] = useState('Média')
  const [tarefas, setTarefas] = useState([])

  function adicionarTarefa(evento) {
    evento.preventDefault()
    const tituloFormatado = titulo.trim()

    if (!tituloFormatado) return

    setTarefas(anteriores => [
      ...anteriores,
      { id: crypto.randomUUID(), titulo: tituloFormatado, prioridade }
    ])
    setTitulo('')
    setPrioridade('Média')
  }

  function removerTarefa(id) {
    setTarefas(anteriores => anteriores.filter(tarefa => tarefa.id !== id))
  }

  function limparLista() {
    setTarefas([])
  }

  return (
    <section className="card" aria-labelledby="titulo-tarefas">
      <h2 id="titulo-tarefas">Lista de tarefas — Aula 13</h2>
      <form className="formulario-tarefas" onSubmit={adicionarTarefa}>
        <label htmlFor="titulo-tarefa">Tarefa</label>
        <input
          id="titulo-tarefa"
          type="text"
          value={titulo}
          onChange={evento => setTitulo(evento.target.value)}
          placeholder="Digite uma tarefa"
        />
        <label htmlFor="prioridade-tarefa">Prioridade</label>
        <select
          id="prioridade-tarefa"
          value={prioridade}
          onChange={evento => setPrioridade(evento.target.value)}
        >
          {prioridades.map(opcao => (
            <option key={opcao} value={opcao}>{opcao}</option>
          ))}
        </select>
        <button type="submit" disabled={!titulo.trim()}>
          Adicionar
        </button>
      </form>

      {tarefas.length > 0 ? (
        <ul className="lista-tarefas">
          {tarefas.map(tarefa => (
            <li key={tarefa.id}>
              <span className="descricao-tarefa">{tarefa.titulo}</span>
              <span className={`prioridade prioridade-${tarefa.prioridade.toLowerCase()}`}>
                {tarefa.prioridade}
              </span>
              <button
                type="button"
                className="botao-remover"
                onClick={() => removerTarefa(tarefa.id)}
                aria-label={`Remover tarefa ${tarefa.titulo}`}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="secundario">Nenhuma tarefa adicionada.</p>
      )}

      <div className="rodape-tarefas">
        <p>Total de tarefas: <strong>{tarefas.length}</strong></p>
        <button type="button" onClick={limparLista} disabled={tarefas.length === 0}>
          Limpar Lista
        </button>
      </div>
    </section>
  )
}
