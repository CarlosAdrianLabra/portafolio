import { Form } from "../components/composite/Form"
import { TarjetaContacto } from "../components/composite/TarjetaContacto"
import { Navbar } from "../components/layout/Navbar"

export const Contact = () => {
  return (
     <div className="
          bg-primario-bglight
          h-lvh">
            <Navbar/>
            <div className="
                max-w-[1140px]
                mx-auto
                pb-15">
                <h1 className="
                    font-inter font-semibold text-hero text-text90 mt-10
                ">Trabajemos juntos.</h1>
                <p className="
                    font-inter font-regular text-tituloproyecto text-text90
                ">Pongamonos en contacto</p>
                <div className="
                grid
                grid-cols-2
                mt-10
            ">
                <div className="
                        max-w-[450px]
                ">
                    <Form/>
                </div>
                <div className="
                    max-w-[510px]">
                    <TarjetaContacto/>
                </div>
            </div>
            </div>
            
    </div>
  )
}
