import React, { createContext, ReactNode, useState } from "react"

interface props{
    children:ReactNode
}

interface providerProps{
    vieTransitionName:string
    setvieTransitionName:React.Dispatch<React.SetStateAction<string>>
}

export const context = createContext<providerProps>({vieTransitionName:'',setvieTransitionName:()=>{}})

const {Provider} = context





export const MastersaludContext:React.FC<props> = ({children}) => {
    const [vieTransitionName,setvieTransitionName] = useState<string>('')
  return (
    <Provider value={{vieTransitionName,setvieTransitionName}}>
        {children}
    </Provider>
  )
}
