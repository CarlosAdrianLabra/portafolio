import React from 'react'
import { CajaTecnologia } from '../ui/CajaTecnologia'
import { Link } from 'react-router'

export const TarjetaProyecto = ({project}) => {
  if (!project) return null;  
  const { id, title, image, short, technologies } = project;

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
      <Link
        to={`/projects/${id}`}
        
      >
        
        <img src={image} className='mb-6'/>
        <h1 className='
        font-inter font-medium text-tituloproyecto text-text90
        max-w-[272px]
        '>{title}</h1>
        <p className='
        font inter font-regular text-descripciondelproyecto text-text90
        mt-1
        max-w-[300px]
        line-clamp-3
        text-sm/6
        '>{short}</p>
        <div className='grid grid-cols-3 gap-2 mt-4'>
        {technologies.slice(0, 3).map((tech) => (
          <CajaTecnologia key={tech} Tecnologia={tech} />
        ))}
        
        </div>
        
      </Link>
    
    
    </div>
  )
}
