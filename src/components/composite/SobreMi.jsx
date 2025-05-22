
export const SobreMi = () => {
  return (
    <div
        className="
            bg-white
            shadow-lg
            rounded-[15px]
            max-w-[1140px]
            max-h-[390px]
            mx-auto
            flex
            justify-between
            items-center
            p-10"
    >
        <div>
            <img src="https://placehold.co/260x310.png" className="rounded-[130px]"/>
        </div>
        <div className="
            max-w-[641px]
            max-h-[308px]
        ">
            <h1 className="
                font-inter font-semibold text-tituloproyecto text-text90 mb-5
            ">Sobre mi</h1>
            <p className="
                font-inter font-medium text-btn text-text90
            "
            >Líder técnico y dev React con 3+ años lanzando productos web. Combino buenas prácticas de ingeniería con entregas rápidas, creando aplicaciones robustas, accesibles y orientadas a resultados de negocio.</p>
        </div>

    </div>
  )
}
