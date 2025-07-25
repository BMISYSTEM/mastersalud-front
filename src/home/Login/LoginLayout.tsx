import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { clienteAxios } from "../../config/axios";
import "animate.css";
// Generated by https://quicktype.io

export interface Auth {
  succes: string;
}
// Generated by https://quicktype.io

export interface Error {
  message: string;
  errors: Errors;
}

export interface Errors {
  email: string[];
}

import loadingSpiner from "./assets/loading.svg";
import { isAxiosError } from "axios";
import { Input } from "./components/Input";
export const LoginLayout = () => {
  const [formulario,setForm] = useState(1);
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  
  
  // inputs registro
  const [password, setPassword] = useState<string|number>("");
  const [email, setEmail] = useState<string|number>("");
  const [nombre,setNombre] = useState<string|number>('');
  const [apellido,setApellido] = useState<string|number>('');
  const [cedula,setCedula] = useState<string|number>(0);
  const [telefono,setTelefono] = useState<string|number>(0);
  const [fijo,setFijo] = useState<string|number>(0);
  const [direccion,setDireccion] = useState<string|number>('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar el login
    setloading(true);
    try {
      const datos = {
        email: email,
        password: password,
      };
      const { data } = await clienteAxios.post("/api/user/auth", datos);
      const resp: Auth = data;
      if (data?.error) {
        toast.error(data?.error);
      }
      if (resp?.succes) {
        localStorage.setItem("token", resp?.succes);
        navigate("/panel/home");
      }
    } catch (error) {
      if (isAxiosError(error)) {
        const errorback: Error = error.response?.data;
        toast.error(errorback.message);
      }
    }
    setloading(false);
    // navigate('/panel')
  };


  const handleRegistro = async(e:React.FormEvent) =>{
    setloading(true)
    e.preventDefault()
    if(
      nombre &&
      apellido &&
      cedula &&
      fijo &&
      telefono &&
      direccion &&
      email &&
      password 
    ){
      const datos = {
        nombre:nombre,
        apellido:apellido,
        cedula:cedula,
        fijo:fijo,
        telefono:telefono,
        direccion:direccion,
        email:email,
        password:password,
        virtual:1,
        ciudad:' ',
        presencial:1

      }

      try {
        const {data} = await clienteAxios.post('/api/user/create',datos)
        console.log(data)
        if(data.succes){
          toast.success(data.succes)
          toast.success('Ahora podra iniciar seccion con su usuario y passwor registrados')
          setForm(1)
        }
        
      } catch (error) {
        if(isAxiosError(error)){
          const errores:string[] = Object.values(error.response?.data.errors)
          errores.map((message)=>toast.error(message[0]))
        }
      }finally{
        setloading(false)
      }
    }else{
      toast.warning('Se requieren todos los campos diligenciados para crear una cuenta ')
    }
    setloading(false)
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 to-blue-600">
      {formulario === 1 ? 
        <div className={`animate__animated ${formulario === 1 ? '  animate__flipInY' : null } bg-white p-8 rounded-lg shadow-lg w-full max-w-md`}>
          <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
            Centro Médico - Iniciar Sesión
          </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-blue-800 font-semibold mb-1"
                htmlFor="email"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-blue-800 font-semibold mb-1"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {loading ? (
              <button
                type="button"
                className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors flex justify-center items-center"
              >
                <img src={loadingSpiner} alt="" className="w-8 h-8" />
              </button>
            ) : (
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors"
              >
                Iniciar Sesión
              </button>
            )}
          </form>
          <div className="mt-6 text-center">
            <button onClick={()=>setForm(2)} className="text-blue-700 hover:text-blue-900 text-sm">
              ¿No tienes una cuenta? Registrate.
            </button>
          </div>
        </div>
      :
        <div className={`animate__animated ${formulario === 2 ? '   animate__flipInY ' : 'hidden' } bg-white p-8 rounded-lg shadow-lg w-full max-w-md`}>
          <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
            Registro
          </h2>
          <form onSubmit={handleRegistro}>
            <Input valueInput={nombre} setValue={setNombre} type="text" nombre="Nombre"/>
            <Input valueInput={apellido} setValue={setApellido} type="text" nombre="Apellido"/>
            <Input valueInput={cedula} setValue={setCedula} type="number" nombre="Cedula/Nit"/>
            <Input valueInput={fijo} setValue={setFijo} type="tel" nombre="Telefono fijo"/>
            <Input valueInput={telefono} setValue={setTelefono} type="tel" nombre="Celular"/>
            <Input valueInput={direccion} setValue={setDireccion} type="text" nombre="Direccion"/>
            <Input valueInput={email} setValue={setEmail} type="email" nombre="Email"/>
            <Input valueInput={password} setValue={setPassword} type="password" nombre="Password"/>
            {loading ? (
              <button
                type="button"
                className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors flex justify-center items-center"
              >
                <img src={loadingSpiner} alt="" className="w-8 h-8" />
              </button>
            ) : (
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors"
              >
                Registrarte
              </button>
            )}
          </form>
          <div className="mt-6 text-center">
            <button onClick={()=>setForm(1)} className="text-blue-700 hover:text-blue-900 text-sm">
              ¿Ya tienes una cuenta? Ingresa.
            </button>
          </div>
        </div>
      }

      <ToastContainer />
    </div>
  );
};
