'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import "dotenv/config"
import "./home.css"
import { Filme } from "@/interfaces";

export default function Home() {
  const router = useRouter()

  const [filmes, setFilmes] = useState<Filme[]>([])

  useEffect(()=>{
    async function getFilmes() {
      try {
        const chave = process.env.NEXT_PUBLIC_CHAVE_API
        const token = process.env.NEXT_PUBLIC_TOKEN_API
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            language: "pt-BR"
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

              <button onClick={()=>router.push(`/detalhes/${filme.id}`)}>Ver mais</button>

            </div>
          )
        })}

      </section>
    </div>
  );
}
