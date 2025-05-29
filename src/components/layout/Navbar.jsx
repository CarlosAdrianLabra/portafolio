import { NavLink } from "react-router"

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
            <NavLink to={"/"}><img src="src\assets\Logoblanco.png"/></NavLink>
            <div className="grid grid-cols-4 content-center">
                <NavLink to={"/about"}>
                <p className="
                    font-inter font-semibold text-descripciondelproyecto text-text90 mx-2
                ">Sobre mi</p></NavLink>
                <NavLink to={"/projects"}>
                <p className="
                    font-inter font-semibold text-descripciondelproyecto text-text90 mx-2
                ">Proyectos</p></NavLink>
                <NavLink to={"/contact"}>
                <p className="
                    font-inter font-semibold text-descripciondelproyecto text-text90 mx-2
                ">Contacto</p></NavLink>
                <NavLink to={"/experience"}>
                <p className="
                    font-inter font-semibold text-descripciondelproyecto text-text90 mx-2
                ">Experiencia</p></NavLink>
            </div>
        </div>
    </div>
  )
}
