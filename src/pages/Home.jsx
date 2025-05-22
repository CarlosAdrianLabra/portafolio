import { Form } from "../components/composite/Form"
import { SobreMi } from "../components/composite/SobreMi"
import { TarjetaProyecto } from "../components/composite/TarjetaProyecto"
import { TarjetaSobreMiFoto } from "../components/composite/TarjetaSobreMiFoto"
import { Navbar } from "../components/layout/Navbar"
import { Botones } from "../components/ui/Botones"

export const Home = () => {
  return (
    <div className="
      bg-primario-bglight
      h-full
    ">
      <Navbar/>
      <div className="
        max-w-[1140px]
        mx-auto
        grid grid-rows-5">
        <div className="
          grid
          grid-cols-2
          justify-items-center
          content-center
          items-center
          
        ">
          <div className="
            flex
            flex-col gap-5
            max-w-[500px]
            
          ">
            <h1 className="
              font-inter font-semibold text-hero text-text90 leading-19
            ">
              Hola, soy Carlos Labra
            </h1>
            
            <p className="
              font-inter font-regular text-tituloproyecto text-text90 leading-10
            ">
              Soluciones web, guiadas por excelencia tecnica
            </p>
            <div className="
              w-[217px]
              h-[60px]
            ">
              <Botones/>
            </div>
            
          </div>
          <div>
            <img src="src\assets\hero-light-1.png"/>
          </div>
        </div>
        <div className="
         max-h-[390px]
        ">
          <SobreMi/>
        </div>
        
        <div className="
          max-h-[510px]
        ">
          <h1 className="
            font-inter font-semibold text-tituloproyecto text-text90 mb-5
          ">Proyectos</h1>
          <div className="
            grid
            grid-cols-3
            
            justify-items-center">
              <TarjetaProyecto/>
              <TarjetaProyecto/>
              <TarjetaProyecto/>

          </div>
        </div>
        <div className=" 
          grid
          grid-cols-2
          justify-items-center
          content-center
          items-center
          row-span-2
        ">
          <h1 className="
          font-inter font-semibold text-hero text-text90 pl-20
          ">Trabajemos juntos.</h1>
          <div className="
           w-[430px]
          ">
            <Form/>
          </div>
        </div>
      </div>
    </div>
  )
}
