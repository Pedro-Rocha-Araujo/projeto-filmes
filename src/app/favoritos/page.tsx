'use client'

import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import "./favoritos.css"

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  useEffect(()=>{
    function getFavoritos() {
      try {
        const ls = localStorage.getItem("listaFavoritos")
        if(!ls) {
          return
        } 
        setFavoritos(JSON.parse(ls))
      } catch(erro) {
        console.log(erro)
      }
    }
    getFavoritos()
  }, [])

  function deletarFilme(nome: string) {
    try {
      const atualizacao = favoritos.filter((filme)=>{
        return filme !== nome
      })

      localStorage.setItem("listaFavoritos", JSON.stringify(atualizacao))

      setFavoritos(atualizacao)

      toast.success("Filme excluido!")
    } catch(erro) {
      console.log(erro)
      toast.error("Erro ao deletar")
    }
  }
  

  return (
    <div className="container">
      <section className="favoritos">

        <h2> <i className="fa-regular fa-star" aria-hidden="true"></i> Filmes favoritos</h2>

        <div className="filmes">

          {favoritos.length === 0 && (
            <p>Nenhum filme adicionado ainda.</p>
          )}

          {favoritos.map((filme, index)=>{
            return (
              <div key={index} className="filme">
                <h3>{ filme }</h3>
                <i onClick={()=>deletarFilme(filme)} className="fa-solid fa-trash fa-lg" aria-hidden="true"></i>
              </div>
            )
          })}

        </div>

      </section>
    </div>
  )
}