
import doctores from '../assets/doctoresimg.png'
import curriculum from '../assets/curriculum.png'
import calendario from '../assets/calendario.png'
import fondo from '../assets/fondoPasos.png'
import medicos from '../assets/medicos.jpg'
import flecha from '../assets/flechaPunteada.png'
export const Main = () => {
  return (
    <main className='w-full h-screen   bg-[#F7F7F7] flex flex-col gap-10'>
      {/* como pedir tu cita  */}
      <section className="relative w-full justify-center p-5 flex flex-col gap-5">
        <h1 className="text-5xl font-bold text-slate-900 z-50">Como pedir tu cita</h1> 
        <section className="flex flex-row gap-2 justify-center w-full h-[24rem] z-50 ">
            <div className="w-96 h-auto  flex flex-col gap-2">
              <img src={doctores} alt="" className='w-full h-96' />
              <p className='text-center'>Busca los mejores doctores online</p>
              <div className='w-full border-t-2 border-black'></div>
            </div>
            <div className='w-20 h-full  flex flex-col justify-center items-center'>
              <img src={flecha} alt="" />
            </div>
            <div className="w-96 h-auto  flex flex-col gap-2">
              <img src={curriculum} alt="" className='w-full h-96' />
              <p className='text-center'>Ver el perfil de tu especialista</p>
              <div className='w-full border-t-2 border-black'></div>
            </div>
            <div className='w-20 h-full  flex flex-col justify-center items-center'>
              <img src={flecha} alt="" />
            </div>
            <div className="w-96 h-auto  flex flex-col gap-2">
              <img src={calendario} alt="" className='w-full h-96' />
              <p className='text-center'>Obtén una cita con el doctor de manera instantánea</p>
              <div className='w-full border-t-2 border-black'></div>
            </div>
        </section>
        <div className='absolute'>
          <img src={fondo} alt="" />
        </div>
      </section>
      {/* especialidades */}
      <section className='relative w-full justify-center  flex flex-col gap-5 mt-24 '>
        <div className=' absolute w-full h-full blur-lg'>
          <img src={medicos} alt="" className='object-cover w-full h-full'/>
        </div>
        <div className=' absolute w-full h-full bg-black/1'>
        </div>
        <div className='p-5 z-50 h-full flex flex-col gap-5'>
          <h2 className='text-5xl font-bold mt-10 z-50 ml-10'>Explora por especialistas </h2>
          {/* contenedor de especialidades */}
          <div className='w-full flex flex-row gap-10 z-50 '>
            {/* contenedor 1  */}
            <div className='w-full flex flex-col gap-2'>
              <div className='w-full flex flex-row gap-2'>
                <div className='w-full h-72 bg-[#FFF6F6]/50 backdrop-blur-xl border-sky-500 border-2 rounded-lg'>
                  
                </div>
                <div className='w-full h-72 bg-[#FFF6F6]/50 backdrop-blur-xl border-sky-500 border-2 rounded-lg'>

                </div>
              </div>
              <div className='w-full h-52 bg-[#FFF6F6]/50 backdrop-blur-xl  border-sky-500 border-2 rounded-lg'>

              </div>
            </div>
            {/* contenedor 2  */}
            <div className='w-full flex flex-col gap-2'>
              <div className='w-full flex flex-row gap-2'>
                <div className='w-full h-72 bg-[#FFF6F6]/50 backdrop-blur-xl border-sky-500 border-2 rounded-lg'>
                  
                </div>
                <div className='w-full h-72 bg-[#FFF6F6]/50 backdrop-blur-xl border-sky-500 border-2 rounded-lg'>

                </div>
              </div>
              <div className='w-full h-52 bg-[#FFF6F6]/50 backdrop-blur-xl  border-sky-500 border-2 rounded-lg'>

              </div>
            </div>
          </div>  
        </div>
        
      </section>
    </main>
  )
}
