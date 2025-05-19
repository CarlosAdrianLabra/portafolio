import React from 'react'

export const CajaTecnologia = ({Tecnologia = "React"}) => {
  return (
    <div className='
        bg-azul-claro rounded-lg
        font-inter font-light text-accent-blue text-cajatecnologia
        px-2
        py-1
        max-w-[90px]
        text-center
    '>{Tecnologia}</div>
  )
}
