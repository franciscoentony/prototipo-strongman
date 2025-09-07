import { useState } from "react";
import "./App.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

export default function Botaocontinua() {
    
    return (
        <>
        <div className="w-100 h-20 flex items-center justify-center ">
            <button type="button" value={etapa} className='botaoanimado bg-blue-400 w-50 h-10 flex items-center justify-center hover:w-15 hover:h-15 hover:rounded-full cursor-pointer hover:bg-blue-950'>
              <span className='font-medium'>Continuar</span>
              <FontAwesomeIcon icon={faArrowRight} className='icone-seta hidden' color='white' size='1x'/>
            </button>
        </div>
        </>
    )
}