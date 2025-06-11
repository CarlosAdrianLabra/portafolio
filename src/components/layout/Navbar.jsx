import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import { ToggleButton } from "../ui/ToggleButton";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    const navItems = [
    { to: "/projects", label: "Proyectos" },
    { to: "/experience", label: "Experiencia" },
    { to: "/contact", label: "Contacto" },
    { to: "/about", label: "Sobre mi" },
  ];


  return (
    <>
    <header className="bg-white w-full shadow-sm fixed top-0 left-0 z-40">
    <div className="
        max-w-[1130px] mx-auto flex items-center justify-between h-[90px] px-4
    ">
        {/* <div className="
            max-w-[1130px]
            mx-auto
            h-full
            content-center
            flex
            items-center
            justify-between
            
        "> */}
            <NavLink to={"/"}  onClick={() => setIsOpen(false)}>
            <img src="\Logoblanco.png"
             alt="Logo personal"
             className="dark:hidden w-auto"/>
             <img src="\Logodark.png"
             alt="Logo personal obscuro"
             className="hidden dark:block w-auto"/>
             </NavLink>

            {/* Desktop links */}

            <nav className="hidden md:flex items-center gap-6">
                {navItems.map(({ to, label }) => (
                    <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                        `font-inter font-semibold text-text90 text-descripciondelproyecto transition-colors
                        ${isActive ? "text-[--color-accent-blue]" : "text-text90 dark:text-gray-100"}`
                    }
                    >
                    {label}
                    </NavLink>
                ))}
                <ToggleButton />
            </nav>

             {/* Hamburger */}
        <button
          aria-label="Abrir menú"
          className="md:hidden text-text90 dark:text-gray-100 text-3xl"
          onClick={() => setIsOpen(true)}
        >
          <HiOutlineMenu />
        </button>

            {/* <div className="grid grid-cols-5 content-center">
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
                
            </div> */}
        </div>
        </header>

        {/* Mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white absolute right-0 w-4/5 max-w-xs h-full p-6 flex flex-col gap-6 animate-slide-in-right"
            onClick={(e) => e.stopPropagation()} // evita que el click cierre si hace tap dentro
          >
            <button
              aria-label="Cerrar menú"
              className="self-end text-3xl mb-4 text-text90 dark:text-gray-100"
              onClick={() => setIsOpen(false)}
            >
              <HiX />
            </button>

            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `font-inter font-medium text-lg
                  ${isActive ? "text-accent-blue" : "text-text90"}`
                }
              >
                {label}
              </NavLink>
            ))}

            <div className="mt-auto">
              <ToggleButton />
            </div>
          </div>
        </div>
      )}
    {/* </div> */}
    {/* </header> */}
    </>
  )
}
