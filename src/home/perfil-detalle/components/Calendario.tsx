
import {  useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface props{
    diaselect:React.Dispatch<React.SetStateAction<string>>;
    motivo:number;
    primera_visita: string|null
}

export const Calendario = ({diaselect,motivo,primera_visita}:props) => {
    /**
     * Mes seleccionado
     */
    const [mesSeleccion,setMesseleccion] = useState<number>(new Date().getMonth())
    const [diaseleccion,setDiaSeleccion] = useState<number>(0);

    /**
     * Fecha actual
     */
    const [fecha] = useState(new Date());
    const [ano]= useState(fecha.getFullYear());
    const [dia] = useState(fecha.getDate());

    /** 
         * Arreglos para el calendario
         */
    let semanauno:number[] = [];
    let semanados:number[] = [];
    let semanatres:number[] = [];
    let semanacuatro:number[] = [];
    let semanasinco:number[] = [];
    let primero = 1;

    useEffect(()=>{
        const fechaFin = new Date(ano, mesSeleccion , 0)
        const diaFin =fechaFin.getDate()
        /**Fecha fin  */
        const fechaInicio = new Date(ano, mesSeleccion  , 1)
        const diaSemana = fechaInicio.getDay()
        /** recorrio para llenar los array por semana */
        for (let index = 0; index < 35; index++) {
            /** index mayor que el dia de la semana para iniciar a colocar los dias  */
            if(index >=(diaSemana ) && index <= (diaFin + (diaSemana - 1))){
                if(index >= diaSemana && index < 7){
                    semanauno.push(...[primero++]);

                }
                 if (index >= 7 && index < 14){
                    semanados.push(...[primero++]);

                }
                 if (index >= 14 && index < 21){
                    semanatres.push(...[primero++]);
                }
                 if (index >= 21 && index < 28){
                    semanacuatro.push(...[primero++]);

                }
                 if (index >= 28 && index <= 40){
                    semanasinco.push(...[primero++]);
                }
            }
            // cuando no entra en las condiciones del if es por que no es un dia de este mes entonces coloca 0 
            else{
                if(index >= 0 && index < 7){
                    semanauno.push(...[0]);
                }
                else if (index >= 7 && index < 14){
                    semanados.push(...[0]);
                }
                else if (index >= 14 && index < 21){
                    semanatres.push(...[0]);
                }else if (index >= 21 && index < 28){
                    semanacuatro.push(...[0]);
                }else if (index >= 28 && index < 35){
                    semanasinco.push(...[0]);
                }
            }
        }
        setDiasCalendario([semanauno,semanados,semanatres,semanacuatro,semanasinco])
    },[mesSeleccion])
   
    const [diasCalendario,setDiasCalendario] = useState([semanauno,semanados,semanatres,semanacuatro,semanasinco]);
    const seleccionfecha = (dia:number) =>{
        if(motivo && primera_visita){
            setDiaSeleccion(dia)
            diaselect(`${mesSeleccion + 1}/${dia}/${ano}`)
        }else{
            toast.warning('Seleccione un moivo y si es su primera vez con el especialista.')
        }
    }
    
    useEffect(()=>{
        setDiaSeleccion(dia)
    },[])
    
  return (
    <div className=' w-full h-auto flex flex-col   rounded-xl  border gap-2'>
        <select className='p-1 border  rounded-sm w-40' name="" id="" onChange={(e)=>setMesseleccion(Number(e.target.value))} value={mesSeleccion}>
            <option value="0"   selected={mesSeleccion === 0 ? true : false}>Enero</option>
            <option value="1"   selected={mesSeleccion === 1 ? true : false}>Febrero</option>
            <option value="2"   selected={mesSeleccion === 2 ? true : false}>Marzo</option>
            <option value="3"   selected={mesSeleccion === 3 ? true : false}>Abril</option>
            <option value="4"   selected={mesSeleccion === 4 ? true : false}>Mayo</option>
            <option value="5"   selected={mesSeleccion === 5 ? true : false}>Junio</option>
            <option value="6"   selected={mesSeleccion === 6 ? true : false}>Julio</option>
            <option value="7"   selected={mesSeleccion === 7 ? true : false}>Agosto</option>
            <option value="8"   selected={mesSeleccion === 8 ? true : false}>Septiembre</option>
            <option value="9"   selected={mesSeleccion === 9 ? true : false} >Octubre</option>
            <option value="10"  selected={mesSeleccion === 10 ? true : false} >Noviembre</option>
            <option value="11"  selected={mesSeleccion === 11 ? true : false} >Diciembre</option>
        </select>
        <div className='w-full h-10 flex flex-row justify-between border-2 rounded-sm p-1 items-center cursor-pointer'>
            <div  key={7} className={`text-slate-600  transition text-sm font-bold  p-1 w-full text-center`} >Do</div>
            <div  key={1} className={`text-slate-600  transition text-sm font-bold  p-1 w-full text-center`} >Lu</div>
            <div  key={2} className={`text-slate-600  transition text-sm font-bold  p-1 w-full text-center`} >Ma</div>
            <div  key={3} className={`text-slate-600  transition text-sm font-bold  p-1 w-full text-center`} >Mi</div>
            <div  key={4} className={`text-slate-600  transition text-sm font-bold  p-1 w-full text-center`} >Ju</div>
            <div  key={5} className={`text-slate-600  transition text-sm font-bold  p-1 w-full text-center`} >Vi</div>
            <div  key={6} className={`text-slate-600  transition text-sm font-bold  p-1 w-full text-center`} >Sa</div>
        </div>
        {diasCalendario.map((diasCalendario,index) => (
            <div key={index} className='w-full h-10 flex flex-row justify-between p-1 items-center text-sm '>
                <button type='button' onClick={()=>seleccionfecha(diasCalendario[0] )} 
                className={`${diaseleccion === diasCalendario[0] ? 
                'bg-sky-600/60 text-white font-bold ' :
                 "text-sm font-bold text-slate-600   border-r-2 hover:bg-slate-600/60 cursor-pointer   hover:scale-105 transition  hover:text-white"}
                  p-1 w-full rounded-xs text-center h-10 ${diasCalendario[0] < diaseleccion ? 'bg-slate-300' : null}`}>
                    {diasCalendario[0]  > 0 ?  diasCalendario[0] : ''   }
                </button>
                <button type='button' onClick={()=>seleccionfecha(diasCalendario[1] )} 
                className={`${diaseleccion === diasCalendario[1] ?
                 'bg-sky-600/60 text-white font-bold ' :
                  "text-sm font-bold text-slate-600   border-r-2 hover:bg-slate-600/60 cursor-pointer   hover:scale-105 transition hover:text-white"} 
                  p-1 w-full rounded-xs text-center h-10 ${diasCalendario[1] < diaseleccion ? 'bg-slate-300' : null}`}>
                    {diasCalendario[1]> 0 ?  diasCalendario[1] : '' }
                </button>
                <button type='button' onClick={()=>seleccionfecha(diasCalendario[2] )} 
                className={`${diaseleccion === diasCalendario[2] ? 
                'bg-sky-600/60 text-white font-bold ' : 
                "text-sm font-bold text-slate-600   border-r-2 hover:bg-slate-600/60 cursor-pointer   hover:scale-105 transition hover:text-white"} 
                p-1 w-full rounded-xs text-center h-10 ${diasCalendario[2] < diaseleccion ? 'bg-slate-300' : null}`}>
                    {diasCalendario[2] > 0 ?  diasCalendario[2] : '' }
                </button>
                <button type='button' onClick={()=>seleccionfecha(diasCalendario[3] )} 
                className={`${diaseleccion === diasCalendario[3] ? 
                'bg-sky-600/60 text-white font-bold ' :
                 "text-sm font-bold text-slate-600   border-r-2 hover:bg-slate-600/60 cursor-pointer   hover:scale-105 transition hover:text-white"} 
                 p-1 w-full rounded-xs text-center h-10  ${diasCalendario[3] < diaseleccion ? 'bg-slate-300' : null}`}>
                    {diasCalendario[3] > 0 ?  diasCalendario[3] : '' }
                </button>
                <button type='button' onClick={()=>seleccionfecha(diasCalendario[4])} 
                className={`${diaseleccion === diasCalendario[4] ? 
                'bg-sky-600/60 text-white font-bold ' :
                 "text-sm font-bold text-slate-600   border-r-2 hover:bg-slate-600/60 cursor-pointer   hover:scale-105 transition hover:text-white"}
                  p-1 w-full rounded-xs text-center h-10 ${diasCalendario[4] < diaseleccion ? 'bg-slate-300' : null}`}>
                    {diasCalendario[4] > 0 ?  diasCalendario[4] : '' }
                </button>
                <button type='button' onClick={()=>seleccionfecha(diasCalendario[5])} 
                className={`${diaseleccion === diasCalendario[5] ? 
                'bg-sky-600/60 text-white font-bold ' :
                 "text-sm font-bold text-slate-600   border-r-2 hover:bg-slate-600/60 cursor-pointer   hover:scale-105 transition hover:text-white"}
                  p-1 w-full rounded-xs text-center h-10 ${diasCalendario[5] < diaseleccion ? 'bg-slate-300' : null}`}>
                    {diasCalendario[5] > 0 ?  diasCalendario[5] : '' }
                </button>
                <button type='button' onClick={()=>seleccionfecha(diasCalendario[6] )} 
                className={`${diaseleccion === diasCalendario[6] ? 
                'bg-sky-600/60 text-white font-bold ' :
                 "text-sm font-bold text-slate-600   border-r-2 hover:bg-slate-600/60 cursor-pointer   hover:scale-105 transition hover:text-white"}
                  p-1 w-full rounded-xs text-center h-10 ${diasCalendario[6] < diaseleccion ? 'bg-slate-300' : null}`}>
                    {diasCalendario[6] > 0 ?  diasCalendario[6] : '' }
                </button>
            </div>
        ))}
    </div>
  )
}