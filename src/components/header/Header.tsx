import Link from "next/link"
import "./header.css"

export default function Header() {
  return (
    <header>
      <div className="container">
        <h1> <i className="fa-solid fa-film" aria-hidden="true"></i> <Link href={"/"}>Filmes</Link></h1>

        <i className="fa-solid fa-star fa-xl" aria-hidden="true"></i>
      </div>
    </header>
  )
}