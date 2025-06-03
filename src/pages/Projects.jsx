import { TarjetaProyecto } from "../components/composite/TarjetaProyecto"
import { TarjetaProyecto2 } from "../components/composite/TarjetaProyecto2"
import { Navbar } from "../components/layout/Navbar"
import projects from "../data/projects.json";

export const Projects = () => {
  return (
    <div className="
          bg-primario-bglight
          h-full">
            {/* <Navbar/> */}
            <div className="
                max-w-[1140px]
                mx-auto
                pb-15
                pt-10">
                <h1 className="
                    font-inter font-semibold text-hero text-text90 
                ">Todos mis proyectos.</h1>
                <p className="
                    font-inter font-regular text-tituloproyecto text-text90
                ">Estos proyectos fueron patrocinados por noches largas y cafe.</p>
                <div className="
                    pt-20
                    columns-1 sm:columns-2 md:columns-3 gap-6
                ">
                    {projects.map((p) => (
          <TarjetaProyecto key={p.id} project={p} />
        ))}
                    
                </div>
            </div>
        </div>
  )
}
