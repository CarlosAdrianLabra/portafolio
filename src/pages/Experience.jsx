import { TarjetaExperiencia } from "../components/composite/TarjetaExperiencia"
import { Navbar } from "../components/layout/Navbar"
import { Botones } from "../components/ui/Botones"


export const Experience = () => {
  return (
    <div className="
      bg-primario-bglight
      h-full">
        <Navbar/>
        <div className="
            max-w-[1140px]
            mx-auto
            pb-15">
            <h1 className="
                font-inter font-semibold text-hero text-text90 mt-10
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
                <TarjetaExperiencia/>
                <TarjetaExperiencia/>
                <TarjetaExperiencia/>
                <TarjetaExperiencia/>
                <div className="
                    w-[217px]
                    h-[60px]
                    justify-self-center
                    mt-5
                ">
                    <Botones/>
                </div>

            </div>

        </div>
      </div>
  )
}
