import { TarjetaExperiencia } from "../components/composite/TarjetaExperiencia"
import { Navbar } from "../components/layout/Navbar"
import { Botones } from "../components/ui/Botones"
import experiences from "../data/experience.json";


export const Experience = () => {
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
            "> Mi experiencia.</h1>
            <p className="
                font-inter font-regular text-tituloproyecto text-text90
            ">3+ anos desempenado roles en desarrollo web</p>
            <div className="
                bg-white
                shadow-lg
                rounded-[15px]
                max-w-[1140px]
                pt-10 pr-10 pb-10
                mt-10
            ">
                {
                    experiences.map((exp) => ( <TarjetaExperiencia key={exp.id} exp={exp} />))
                }
                <div className="
                    w-[217px]
                    h-[60px]
                    justify-self-center
                    mt-5
                ">
                    <a href="/Carlos_Adrián_Labra_Granados_CV.pdf" download>
                        <Botones/>
                    </a>
                    
                </div>

            </div>

        </div>
      </div>
  )
}
