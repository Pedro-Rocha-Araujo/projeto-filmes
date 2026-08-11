'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import "dotenv/config"

export default function Home() {
  const [filmes, setFilmes] = useState([])
  console.log(filmes)
  useEffect(()=>{
    async function getFilmes() {
      try {
        const chave = process.env.NEXT_PUBLIC_CHAVE_API
        const token = process.env.NEXT_PUBLIC_TOKEN_API
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        setFilmes(response.data.results)
      } catch(erro) {
        console.log(erro)
      }
    }
    getFilmes()
  }, [])

  return (
    <div className="container">
      <section className="filmes">

        {filmes.map((filme)=> {
          return (
            <div key={filme.id} className="filme">
              <img src={`http://image.tmdb.org/t/p/original/${filme.poster_path}`} />
              <div className="informacoes">
                <h2>{filme.title}</h2>

              </div>
            </div>
          )
        })}

      </section>
    </div>
  );
}
