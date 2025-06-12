import { TarjetaProyecto } from "../components/composite/TarjetaProyecto"
import projects from "../data/projects.json";

export const Projects = () => {
  return (
    <main className="
          bg-primario-bglight
          min-h-screen">

            <div className="
                max-w-[1140px]
                mx-auto
                px-4 pb-15 pt-32">
                  <header className="space-y-6">
                    <h1 className="
                        font-inter font-semibold 
                        md:text-hero text-5xl sm:text-6xl text-text90 
                    ">Todos mis proyectos.</h1>
                    <p className="
                        font-inter font-regular md:text-tituloproyecto text-text90 text-xl sm:text-2xl
                    ">Estos proyectos fueron patrocinados por noches largas y cafe.</p>
                  </header>
                <div className="
                    pt-10 justify-items-center
                    columns-1 sm:columns-2 md:columns-3 gap-6
                ">
                     {[...projects]
                      .sort(() => Math.random() - 0.5)
                      .map((p) => (
                        <TarjetaProyecto key={p.id} project={p} />
                      ))} 
                    
                </div>
            </div>
        </main>
  )
}
