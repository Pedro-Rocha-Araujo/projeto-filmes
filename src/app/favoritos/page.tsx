import "./favoritos.css"

export default function Favoritos() {
  return (
    <div className="container">
      <section className="favoritos">

        <h2> <i className="fa-regular fa-star" aria-hidden="true"></i> Filmes favoritos</h2>

        <div className="filmes">
          <div className="filme">
            <h3>Filme 1</h3>
            <i className="fa-solid fa-trash" aria-hidden="true"></i>
          </div>

          <div className="filme">
            <h3>Filme 2</h3>
            <i className="fa-solid fa-trash" aria-hidden="true"></i>
          </div>
        </div>

      </section>
    </div>
  )
}