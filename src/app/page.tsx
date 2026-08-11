'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import "dotenv/config"

export default function Home() {
  const [filmes, setFilmes] = useState([])

  useEffect(()=>{
    async function getFilmes() {
      try {
        const chave = process.env.NEXT_PUBLIC_CHAVE_API
        const token = process.env.NEXT_PUBLIC_TOKEN_API
        const response = await axios.get(`https://api.themoviedb.org/3/account/${chave}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setFilmes(response.data)
      } catch(erro) {
        console.log(erro)
      }
    }
    getFilmes()
  }, [])

  return (
    <>
    </>
  );
}
