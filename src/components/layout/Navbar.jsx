import { NavLink } from "react-router"
import { ToggleButton } from "../ui/ToggleButton"

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
            <NavLink to={"/"}>
            <img src="src\assets\Logoblanco.png"
             alt="Logo personal"
             className="dark:hidden"/>
             <img src="src\assets\Logodark.png"
             alt="Logo personal obscuro"
             className="hidden dark:block"/>
             </NavLink>
            <div className="grid grid-cols-5 content-center">
                <NavLink to={"/projects"}>
                <p className="
                    font-inter font-semibold text-descripciondelproyecto text-text90 mx-2
                ">Proyectos</p></NavLink>
                <NavLink to={"/experience"}>
                <p className="
                    font-inter font-semibold text-descripciondelproyecto text-text90 mx-2
                ">Experiencia</p></NavLink>
                <NavLink to={"/contact"}>
                <p className="
                    font-inter font-semibold text-descripciondelproyecto text-text90 mx-5
                ">Contacto</p></NavLink>
                <NavLink to={"/about"}>
                <p className="
                    font-inter font-semibold text-descripciondelproyecto text-text90 mx-2
                ">Sobre mi</p></NavLink>
                <div className="mx-2">
                    <ToggleButton/>

                </div>
                
            </div>
        </div>
    </div>
  )
}
