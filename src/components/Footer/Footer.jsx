import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <div className="items-center bg-gray-100 text-lg p-3">
        <div className="grid grid-cols-1 ml-4">
            <p className="text-xl mb-2">Categorías:</p>
            <Link to={"/category/dispositivos"} className="underline text-gray-700 hover:text-gray-500">Consolas y dispositivos</Link>
            <Link to={"/category/videojuegos"} className="underline text-gray-700 hover:text-gray-500">Videojuegos</Link>
            <Link to={"/category/accesorios"} className="underline text-gray-700 hover:text-gray-500">Accesorios</Link>
            <Link to={"/category/componentes"} className="underline text-gray-700 hover:text-gray-500">Componentes de PC</Link>
            <Link to={"/cart"} className="underline text-gray-700 hover:text-gray-500">Ir al Carrito</Link>
            <p className="text-violet-600 font-medium">© On Game. 2023</p>
        </div>
    </div>
  )
}

export default Footer
