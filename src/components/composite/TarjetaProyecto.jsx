import React from 'react'
import { CajaTecnologia } from '../ui/CajaTecnologia'

export const TarjetaProyecto = () => {
  return (
    <div className='
        bg-white
        rounded-lg
        shadow-lg
        break-inside-avoid
        p-5
        max-w-[325px]
        max-h-[411px]
        mb-10
    '>
        
        <img src='https://placehold.co/272x180.png' className='mb-6'/>
        <h1 className='
        font-inter font-medium text-tituloproyecto text-text90
        max-w-[272px]
        '>Proyecto 1</h1>
        <p className='
        font inter font-regular text-descripciondelproyecto text-text90
        mt-1
        max-w-[300px]
        line-clamp-3
        text-sm/6
        '>Descripcion breve del proyecto aqui, para que sepan de que es.</p>
        <div className='grid grid-cols-3 gap-2 mt-4'>
        <CajaTecnologia Tecnologia="React"/>
        <CajaTecnologia Tecnologia="Javascript"/>
        <CajaTecnologia Tecnologia="AWS"/>
        
        </div>
        
    
    
    </div>
  )
}
