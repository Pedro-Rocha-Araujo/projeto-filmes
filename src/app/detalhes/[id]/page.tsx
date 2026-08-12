'use client'

import { useParams } from "next/navigation"
import Link from "next/link"
import { useState, useEffect } from "react"
import "./detalhes.css"
import { toast } from "react-toastify"
import axios from "axios"

import { Filme } from "@/interfaces"

export default function Detalhes() {
  const { id } = useParams()

  const [filme, setFilme] = useState<Filme | null>(null)

  useEffect(()=> {
    async function getFilme() {
      try {
        const token = process.env.NEXT_PUBLIC_TOKEN_API
        if(!token) {
          return toast.error("Token não enviado.")
        }
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            language: "pt-BR"
          }
        })
        setFilme(response.data)
      } catch(erro) {
        console.log(erro)
      }
    }
    getFilme()
  }, [id])

  function addFavoritos() {
    try {
      if(!filme) {
        return toast.error("Nenhum filme encontrado.")
      }

      const listaFavoritos = localStorage.getItem("listaFavoritos")

      const filmesSalvos = listaFavoritos ? JSON.parse(listaFavoritos) : []

      const consulta = filmesSalvos.some((filmeLs:string)=>{
        return filmeLs === filme.title
      })

      if(consulta) {
        return toast.error("Este filme já foi adicionado.")
      }

      filmesSalvos.push(filme.title)

      localStorage.setItem("listaFavoritos", JSON.stringify(filmesSalvos))
      toast.success("Filme adicionado.")

    } catch(erro) {
      console.log(erro)
      toast.error("Erro ao adicionar.")
    }
  }

  return (
    <div className="container">
      { !filme ? (
        <section>
          <h2 className="aviso"> 
            <i className="fa-solid fa-triangle-exclamation" aria-hidden="true"></i> Filme Não encontrado
          </h2>
        </section>
      ): (
        <section className="detalhes">

          <div className="imagem">
            <img 
              src={`http://image.tmdb.org/t/p/original/${filme?.poster_path}`} 
              alt={`Poster do filme ${filme.title}`} 
            />
          </div>

          <div className="informacoes">
            <h2>{filme?.title}</h2>

            <div className="grupo">
              <span> <i className="fa-regular fa-star" aria-hidden="true"></i>  {filme?.vote_average}</span>
              <Link 
                href={`https://www.youtube.com/results?search_query=Trailer ${filme.title}`}
                target="_blank"
              >Ver trailer</Link>
            </div>

            <p>{filme?.overview}</p>

            <button onClick={()=>addFavoritos()} className="fixo">Adicionar aos favoritos</button>
          </div>

        </section>

      ) }
    </div>
  )
}