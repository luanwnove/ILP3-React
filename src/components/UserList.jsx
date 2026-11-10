import { useState } from 'react'

export default function UserList() {
  const [usuarios, setUsuarios] = useState([])
  const [proximoId, setProximoId] = useState(1)

  function adicionarUsuario() {
    setUsuarios(atuais => [...atuais, { id: proximoId, nome: `Usuário ${proximoId}` }])
    setProximoId(atual => atual + 1)
  }

  return (
    <section className="card">
      <h2>Lista de usuários</h2>
      <button onClick={adicionarUsuario}>Adicionar usuário</button>
      {usuarios.length === 0 ? (
        <p className="secundario">Nenhum usuário adicionado.</p>
      ) : (
        <ul>{usuarios.map(usuario => <li key={usuario.id}>{usuario.nome}</li>)}</ul>
      )}
    </section>
  )
}
