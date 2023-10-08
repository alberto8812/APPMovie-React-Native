//to create a contest we need
//initial state,privide and context

import { createContext, useState } from "react";

interface imageColors{
    primary: string,
    secundary: string,
}

interface contextProps{
    colors:imageColors,
    prevColors:imageColors,
    setMainColors: (colors: imageColors) => void; 
    setPrevColor: (colors: imageColors) => void; 
    
}

export const GradientContext=createContext({} as contextProps );//definir tipo  lo que queremos exponer asi afuera 



//definir provide  que sive como Hoc
export const GradientProvider=({children}:any)=>{
    
    const [colors, setColors] = useState<imageColors>({
        primary:'transparent',
        secundary:'transparent',
    })

    const [prevColors, setPrevColor] = useState<imageColors>({
        primary:'transparent',
        secundary:'transparent',
    })

    const setMainColors=(colors:imageColors)=>{
        setColors(colors)
    }
    const setPrevMainColors=(colors:imageColors)=>{
        setPrevColor(colors)
    }

    return (
        <GradientContext.Provider 
        value={{
          colors,
          prevColors,
          setMainColors,
          setPrevColor,
        }}
        >
            {children}
        </GradientContext.Provider>
    )
}