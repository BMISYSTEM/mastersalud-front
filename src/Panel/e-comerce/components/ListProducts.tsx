
interface Product {
    id: number;
    name: string;
    brand: string;
    price: number;
    promotion: string;
    status: string;
  }
  interface ProductListProps {
    products: Product[];
  }
export const ListProducts:React.FC<ProductListProps> = ({products}) => {

    return (
        <div>
          <h2 className="text-2xl font-semibold">Lista de Productos</h2>
          <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-gray-200 border-b border-gray-300">
              <tr>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">ID</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Marca</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Nombre</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Precio</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Promoción</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Estado</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id} className="hover:bg-gray-100 border-b border-gray-200">
                  <td className="py-3 px-6 text-gray-700">{product.id}</td>
                  <td className="py-3 px-6 text-gray-700">{product.brand}</td>
                  <td className="py-3 px-6 text-gray-700">{product.name}</td>
                  <td className="py-3 px-6 text-gray-700">${product.price.toFixed(2)}</td>
                  <td className="py-3 px-   6 text-gray-700">{product.promotion}</td>
                  <td className="py-3 px-6 text-gray-700">
                    <span className={`px-2 py-1 rounded ${product.status === 'active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                      {product.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      );
  
}
