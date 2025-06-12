import { TarjetaSobreMiFoto } from "../components/composite/TarjetaSobreMiFoto"
import { Botones } from "../components/ui/Botones"


export const About = () => {
  return (
     <div className="
              bg-primario-bglight
              min-h-screen">
                <div className="
                    max-w-[1140px]
                    mx-auto
                    px-4 pb-15 pt-32">
                      <div className="
                        
                        flex flex-col md:grid md:grid-cols-2
                        gap-10 md:gap-0 
                      ">
                        <div className="
                          max-w-[605px]
                          
                        ">
                          <header className="space-y-6">
                          <h1 className="
                            font-inter font-semibold 
                        md:text-hero text-5xl sm:text-6xl text-text90
                          ">Sobre mi</h1>
                          <p className="
                            font-inter font-regular text-tituloproyecto text-text90 leading-10 mb-[25px]
                          ">Lider tecnico y desarrollador React con mas de 4 años de experiencia</p>
                          </header>
                          <p className="
                            font-inter font-regular text-btn text-descripciondelproyecto text-text90 leading-7 mb-[25px]
                          ">Soy líder técnico y desarrollador Front-end especializado 
                          en React con más de 4 años gestionando equipos y lanzando 
                          proyectos web exitosos. Me destaco por implementar arquitecturas 
                          robustas y prácticas ágiles que garantizan calidad y cumplimiento puntual.
                          </p>
                          <ul className="
                            font-inter font-regular text-descripciondelproyecto text-text90 leading-7 mb-[25px]
                            list-disc list-inside
                          ">
                            <li>Dirección técnica y gestión de proyectos.</li>
                            <li>Desarrollo Front-end, priorizando UX/UI.</li>
                            <li>Implementación de metodologías ágiles y mejores prácticas de código.</li>
                          </ul>
                          <div className="
                            max-w-[217px]
                            max-h-[60px]
                          ">
                            <a href="/Carlos_Adrián_Labra_CV.pdf" download>
                        <Botones/>
                    </a>
                          </div>
                        </div>
                        <div className="
                          w-full max-w-md md:max-w-[478px]
                          md:ml-24 
                        ">
                          <TarjetaSobreMiFoto/>
                        </div>
                      </div>
                </div>
        </div>
  )
}
