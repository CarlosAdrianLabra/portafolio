import { Navbar } from "../components/layout/Navbar"
import { TarjetaSobreMiFoto } from "../components/composite/TarjetaSobreMiFoto"
import { Botones } from "../components/ui/Botones"

export const About = () => {
  return (
     <div className="
              bg-primario-bglight
              h-lvh">
                <Navbar/>
                <div className="
                    max-w-[1140px]
                    mx-auto
                    pb-15">
                      <div className="
                        grid
                        grid-cols-2
                        items-center
                        mt-10
                      ">
                        <div className="
                          max-w-[605px]
                          
                        ">
                          <h1 className="
                            font-inter font-semibold text-hero text-text90 mb-[10px]
                          ">Sobre mi</h1>
                          <p className="
                            font-inter font-regular text-tituloproyecto text-text90 leading-10 mb-[25px]
                          ">Lider tecnico y desarrollador React con mas de 3 anos de experiencia</p>
                          <p className="
                            font-inter font-regular text-btn text-descripciondelproyecto leading-7 mb-[25px]
                          ">Como lider tecnico, epecializado en React, he gestionado equipos de desarrolladores
                            y he liderado proyectos exitosos, asegurando la calidad del codigo y la entrega a tiempo.
                            Mi enfoque en la arquitectura de software y las mejores practicas me han permitido
                            crear aplicaciones escalables y mantenibles. 
                          </p>
                          <ul className="
                            font-inter font-regular text-descripciondelproyecto text-text90 leading-7 mb-[25px]
                            list-disc list-inside
                          ">
                            <li>Direccion tecnica de proyectos</li>
                            <li>Desarrollo Front-end en React</li>
                            <li>Metodologias agiles</li>
                          </ul>
                          <div className="
                            max-w-[217px]
                            max-h-[60px]
                          ">
                            <Botones/>
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
