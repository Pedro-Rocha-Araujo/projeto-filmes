import Link from "next/link"
import "./header.css"

export default function Header() {
  return (
    <header>
      <div className="container">
        <h1><Link href={"/"}>Filmes</Link></h1>

        <i className="fa-solid fa-star fa-xl"></i>
      </div>
    </header>
  )
}