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
            border-b-1
            content-center
            flex
            items-center
            justify-between
            
        ">
            <img src="src\assets\Logoblanco.png"/>
            <div className="grid grid-cols-4 content-center ">
                <p>Sobre mi</p>
                <p>Proyectos</p>
                <p>Contacto</p>
                <p>Experiencia</p>
            </div>
        </div>
    </div>
  )
}
