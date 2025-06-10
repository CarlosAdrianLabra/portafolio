
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
        <div className="h-72 w-72 rounded-full overflow-hidden shrink-0">
            <img src="/yop.png" className="h-full w-full object-cover object-top transform scale-110 -translate-y-4"/>
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
            >Desarrollador web con más de 4 años lanzando productos web efectivos. Me enfoco en soluciones ágiles, escalables y centradas en el usuario, optimizando siempre calidad y velocidad.</p>
        </div>

    </div>
  )
}
