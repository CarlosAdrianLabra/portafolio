import React from 'react'
import { Botones } from '../ui/Botones'

export const Form = () => {
  return (
    <div className='
        bg-white
        rounded-lg
        shadow-lg
        p-6
        max-w-[437px]
        max-h-[550px]
        grid
        grid-cols-2
    '>
        <p className='
            font-inter font-medium text-descripciondelproyecto text-text90 mb-1 col-span-2
        '>Nombre</p>
        <input className='
            border-text90
            border-1
            rounded-sm
            h-[50px]
            font-inter font-normal text-text90
            px-4
            mb-5
            col-span-2
            placeholder:text-placeholder
        ' placeholder='¿Cómo te llamas?'></input>
        <p className='
            font-inter font-medium text-descripciondelproyecto text-text90 mb-1 col-span-2
        '>Email</p>
        <input className='
            border-text90
            border-1
            rounded-sm
            h-[50px]
            font-inter font-normal text-text90
            px-4
            mb-5
            col-span-2
            placeholder:text-placeholder
        ' placeholder='Correo para contactarte'></input>
        <p className='
            font-inter font-medium text-descripciondelproyecto text-text90 mb-1 col-span-2
        '>Mensaje</p>
        <textarea className='
            border-text90
            border-1
            rounded-sm
            h-[150px]
            font-inter font-normal text-text90
            px-4
            py-2
            mb-5
            col-span-2
            placeholder:text-placeholder'
            placeholder='Escribe tu mensaje. Prometo responder pronto.'></textarea>
        <div className='
            col-span-1
            h-[50px]
        '><Botones texto='Enviar'/></div>
        
        
    
    </div>
  )
}
