export const Navbar = () => {
  return (
    <div className="
        bg-white
        w-full
        h-[90px]
        place-items-center
    ">
        <div className="
            max-w-[1130px]
            mx-auto
            h-full
            content-center
            flex
            items-center
            justify-between
            
        ">
            <img src="src\assets\Logoblanco.png"/>
            <div className="grid grid-cols-4 content-center">
                <p className="
                    font-inter font-semibold text-descripciondelproyecto text-text90 mx-2
                ">Sobre mi</p>
                <p className="
                    font-inter font-semibold text-descripciondelproyecto text-text90 mx-2
                ">Proyectos</p>
                <p className="
                    font-inter font-semibold text-descripciondelproyecto text-text90 mx-2
                ">Contacto</p>
                <p className="
                    font-inter font-semibold text-descripciondelproyecto text-text90 mx-2
                ">Experiencia</p>
            </div>
        </div>
    </div>
  )
}
