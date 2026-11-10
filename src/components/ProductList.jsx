import { useState } from 'react'

const catalogo = [
  { nome: 'Caderno', preco: 18.9 },
  { nome: 'Caneta', preco: 4.5 },
  { nome: 'Lápis', preco: 2.75 }
]

const formatarMoeda = valor =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)

export default function ProductList() {
  const [produtos, setProdutos] = useState([])
  const [proximoId, setProximoId] = useState(1)

  function adicionarProduto() {
    const produto = catalogo[(proximoId - 1) % catalogo.length]
    setProdutos(atuais => [...atuais, { ...produto, id: proximoId }])
    setProximoId(atual => atual + 1)
  }

  const total = produtos.reduce((soma, produto) => soma + produto.preco, 0)

  return (
    <section className="card">
      <h2>Lista de produtos</h2>
      <button onClick={adicionarProduto}>Adicionar produto</button>
      {produtos.length === 0 ? (
        <p className="secundario">Nenhum produto adicionado.</p>
      ) : (
        <ul>
          {produtos.map(produto => (
            <li key={produto.id}>
              <span>{produto.nome}</span>
              <strong>{formatarMoeda(produto.preco)}</strong>
            </li>
          ))}
        </ul>
      )}
      <p className="total">Total: {formatarMoeda(total)}</p>
    </section>
  )
}
