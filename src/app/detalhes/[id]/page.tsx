'use client'

import { useParams } from "next/navigation"
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

  return (
    <div className="container">
      <section className="detalhes">

        <div className="imagem">
          <img src={`http://image.tmdb.org/t/p/original/${filme?.poster_path}`} alt="Imagem de Teste" />
        </div>

        <div className="informacoes">
          <h2>{filme?.title}</h2>

          <div className="grupo">
            <span> <i className="fa-regular fa-star" aria-hidden="true"></i>  {filme?.vote_average}</span>
            <button>Ver trailer</button>
          </div>

          <p>{filme?.overview}</p>

          <button className="fixo">Adicionar aos favoritos</button>
        </div>

      </section>
    </div>
  )
}