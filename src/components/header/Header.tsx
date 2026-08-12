'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import "./header.css"

export default function Header() {
  const router = useRouter()
  
  return (
    <header>
      <div className="container">
        <h1> <i className="fa-solid fa-film" aria-hidden="true"></i> <Link href={"/"}>Filmes</Link></h1>

        <i onClick={()=>router.push("/favoritos")} className="fa-solid fa-star fa-xl" aria-hidden="true"></i>
      </div>
    </header>
  )
}