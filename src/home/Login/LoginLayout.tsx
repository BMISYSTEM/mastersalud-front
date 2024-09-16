import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const LoginLayout = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate()
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar el login
    navigate('/panel')
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 to-blue-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Centro Médico - Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-blue-800 font-semibold mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-blue-300 rounded focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-blue-800 font-semibold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-blue-300 rounded focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors"
          >
            Iniciar Sesión
          </button>
        </form>
        <div className="mt-6 text-center">
          <a href="#" className="text-blue-700 hover:text-blue-900 text-sm">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </div>
    </div>
  )
}
