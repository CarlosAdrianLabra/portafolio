import { Form } from "../components/composite/Form"
import { SobreMi } from "../components/composite/SobreMi"
import { TarjetaProyecto } from "../components/composite/TarjetaProyecto"
import { Botones } from "../components/ui/Botones"
import projects from "../data/projects.json";
import { useMemo } from "react";

export const Home = () => {

    // Se ejecuta sólo la primera vez que Home se monta
  const randomProjects = useMemo(() => {
    const copy = [...projects];

    // Fisher–Yates shuffle light
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy.slice(0, 3);         // ← 3 proyectos
  }, []);

  return (
    <main className="
      bg-primario-bglight
      min-h-screen
    ">
      <div className="
        max-w-[1140px]
        mx-auto
        px-4 space-y-20 md:pt-24 
        pt-32 md:pb-20 pb-10
        ">
          {/* ------------- HERO ------------- */}
        <section className="
          md:grid md:grid-cols-2 md:px-8
          md:ap-8 md:items-center
          grid grid-cols-[1fr_auto] 
          gap-y-4 gap-x-4
          md:grid-cols-2 md:gap-x-8 md:px-8 -mb-2 md:mb-0 
        ">
          {/* Col A */}
          <div className="
            flex flex-col gap-5
            max-w-md md:max-w-[500px] w-full
            col-span-2 md:col-span-1
          ">
            <h1 className="
              font-inter font-semibold text-5xl sm:text-6xl text-text90 leading-tight md:text-hero
            ">
              Hola, soy<br/> Carlos Labra
            </h1>
            
            <p className="
              font-inter font-regular text-tituloproyecto text-text90 leading-10
              
            ">
              Soluciones web, guiadas por excelencia tecnica
            </p>
            <div className="
              w-full max-w-[217px] h-[60px]
            ">
              <a href="/Carlos_Adrián_Labra_CV.pdf" download>
                        <Botones/>
                    </a>
            </div>
          </div>
            
           {/* Col B */} 
          <div className="
          col-start-2 row-start-2
          flex justify-end 
          -mt-20
          md:mt-0
          md:justify-end md:row-start-1">
            <img src="/hero-light-1.png"
              className="hidden md:block w-52 xs:w-40 sm:w-48 md:w-[466px] md:h-[465px]"
              loading="lazy"
            />
            <img
              src="/hero-mobile.png"
              className="block md:hidden
                w-62 xs:w-40 sm:w-48 [clip-path:inset(2px_2px_2px_2px)] "
              loading="lazy"
            />
          </div>
        </section>

        {/* ------------- SOBRE MI ------------- */}
        <div className="
         md:max-h-[390px]
        ">
          <SobreMi/>
        </div>
        
        {/* ------------- PROYECTOS ------------- */}
        <section>
          <h2 className="font-inter font-semibold text-tituloproyecto text-text90 mb-6">
            Proyectos
          </h2>
          <div className=" justify-items-center
           columns-1 sm:columns-2 lg:columns-3 gap-x-8">
              {randomProjects.map((p) => (
            <TarjetaProyecto key={p.id} project={p} compact />
          ))}
          </div>
        </section>

        {/* ------------- FORM ------------- */}
        
        <section className=" 
          flex flex-col md:grid md:grid-cols-2 gap-8 items-center md:pt-20
        ">
          <h2 className="
          md:text-hero md:pl-20 md:text-left
          font-inter font-semibold text-5xl text-text90 text-center md:leading-24
          ">Trabajemos <br className="hidden md:block" /> juntos.</h2>
          <div className="
           w-full max-w-md
          ">
            <Form/>
          </div>
        </section>
      </div>
    </main>
  )
}
