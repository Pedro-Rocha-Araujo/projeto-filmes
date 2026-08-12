import "./detalhes.css"

export default function Detalhes() {
  return (
    <div className="container">
      <section className="detalhes">

        <div className="imagem">
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8k0x2ByBKgZU39f3j8XMB_AoJOGg0jKNqaybmniLsAA&s=10"} alt="Imagem de Teste" />
        </div>

        <div className="informacoes">
          <h2>Título do Filme</h2>

          <div className="grupo">
            <span> <i className="fa-regular fa-star" aria-hidden="true"></i>  7.8</span>
            <button>Ver trailer</button>
          </div>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto error ducimus dicta odit nulla delectus suscipit ut quae velit, dolore quis sunt officiis nihil? Culpa facilis repellendus repudiandae sapiente officia.</p>

          <button className="fixo">Adicionar aos favoritos</button>
        </div>

      </section>
    </div>
  )
}