import { TarjetaSobreMiFoto } from "../components/composite/TarjetaSobreMiFoto"
import { Botones } from "../components/ui/Botones"


export const About = () => {
  return (
     <div className="
              bg-primario-bglight
              h-lvh">
                <div className="
                    max-w-[1140px]
                    mx-auto
                    pb-15
                    pt-10">
                      <div className="
                        grid
                        grid-cols-2
                        items-center
                        
                      ">
                        <div className="
                          max-w-[605px]
                          
                        ">
                          <h1 className="
                            font-inter font-semibold text-hero text-text90 mb-[10px]
                          ">Sobre mi</h1>
                          <p className="
                            font-inter font-regular text-tituloproyecto text-text90 leading-10 mb-[25px]
                          ">Lider tecnico y desarrollador React con mas de 4 años de experiencia</p>
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
                          ml-25
                          max-w-[478px]
                        ">
                          <TarjetaSobreMiFoto/>
                        </div>
                      </div>
                </div>
        </div>
  )
}
