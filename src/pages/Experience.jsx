import { TarjetaExperiencia } from "../components/composite/TarjetaExperiencia"
import { Botones } from "../components/ui/Botones"
import experiences from "../data/experience.json";


export const Experience = () => {
  return (
    <div className="bg-primario-bglight min-h-screen">

      <div className="max-w-[1140px]
                mx-auto
                px-4 pb-15 pt-32">
        <header className="space-y-4">
        <h1 className="font-inter font-semibold 
                        md:text-hero text-5xl sm:text-6xl text-text90">
          Mi experiencia.
        </h1>

        <p className="font-inter font-regular md:text-tituloproyecto text-text90 text-xl sm:text-2xl">
          5 años desempeñando roles en desarrollo web
        </p>
        </header>

        {/* Tarjeta blanca que contiene TODO el timeline */}
        <div className="
          bg-white shadow-lg rounded-[15px]
          max-w-[1140px] mt-10 px-10 py-10
        ">
          {/* timeline */}
          <ol className="space-y-10">
            {experiences.map((exp, idx) => (
              <TarjetaExperiencia
                key={exp.id}
                exp={exp}
                isLast={idx === experiences.length - 1}
              />
            ))}
          </ol>

          {/* botón de descarga */}
          <div className="w-[217px] h-[60px] mx-auto mt-5">
            <a href="/Carlos_Adrián_Labra_CV.pdf" download>
              <Botones />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};