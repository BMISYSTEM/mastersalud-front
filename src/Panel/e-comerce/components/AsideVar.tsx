import { ArrowsPointingInIcon, BuildingStorefrontIcon, FaceSmileIcon, RocketLaunchIcon, TagIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export const AsideVar = () => {
  return (
    <aside className="w-52 bg-slate-400 border-l-2 text-white h-screen p-4">
    <h1 className="text-2xl font-semibold mb-6">E-Comerce</h1>
    <nav>
      <ul>
        <li className="mb-4">
          <Link
            to="/panel/ecomerce/productos"
            className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <BuildingStorefrontIcon className="w-6 h-6 mr-3" />
            <span>Productos</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/panel/ecomerce/marcas"
            className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <TagIcon className="w-6 h-6 mr-3" />
            <span>Marcas</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/panel/ecomerce/caracteristicas"
            className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <ArrowsPointingInIcon className="w-6 h-6 mr-3" />
            <span>Caracteristicas</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/panel/ecomerce/promociones"
            className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <FaceSmileIcon className="w-6 h-6 mr-3" />
            <span>Promociones</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/panel/ecomerce/pedidos"
            className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <RocketLaunchIcon className="w-6 h-6 mr-3" />
            <span>Pedidos</span>
          </Link>
        </li>
      </ul>
    </nav>
  </aside>
  )
}



 


