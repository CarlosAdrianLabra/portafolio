
export const SobreMi = () => {
  return (
    <div
        className="
            bg-white
            shadow-lg
            backdrop-blur
            rounded-[15px]
            flex flex-col md:flex-row items-center gap-6 p-6 md:p-10"
    >
        <div className="h-72 w-72 rounded-full overflow-hidden shrink-0">
            <img src="/yop.png" className="h-full w-full object-cover object-top transform scale-110 -translate-y-4"/>
        </div>
        <div className="
            max-w-xl text-center md:text-left md:ml-30
        ">
            <h2 className="
                font-inter font-semibold text-tituloproyecto text-text90 mb-5
            ">Sobre mi</h2>
            <p className="
                font-inter font-medium text-btn text-text90 text-base/relaxed
            "
            >Desarrollador web con más de 4 años lanzando productos web efectivos. Me enfoco en soluciones ágiles, escalables y centradas en el usuario, optimizando siempre calidad y velocidad.</p>
        </div>

    </div>
  )
}
