import Link from "next/link"

export default function NotFound() {
  return (
    <div className="not-found">
      <h2> 
        <i className="fa-solid fa-triangle-exclamation" aria-hidden="true"></i> Página não encontrada.
      </h2>
      <button><Link href={"/"}>Ir para a Home</Link></button>
    </div>
  )
}