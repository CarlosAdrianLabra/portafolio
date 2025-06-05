
export const Botones = ({ texto = "Descargar CV", onClick }) => {
  return (
    <button className="bg-accent-blue text-primario-bglight
      hover:bg-transparent
      hover:text-accent-blue
      hover:border-accent-blue  
      border border-transparent
      font-inter font-semibold text-btn         
      py-2 px-4 rounded-lg transition-colors duration-200
      w-full
      h-full"
      onClick={onClick}>
        {texto}
    </button>
  )
}
