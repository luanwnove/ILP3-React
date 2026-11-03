export default function Card({ titulo }) {
  return (
    <section className="card">
      <h3>{titulo}</h3>
      <p>Conteúdo renderizado dinamicamente com JSX.</p>
    </section>
  )
}
