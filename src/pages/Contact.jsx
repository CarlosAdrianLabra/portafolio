import { Form } from "../components/composite/Form"
import { TarjetaContacto } from "../components/composite/TarjetaContacto"

export const Contact = () => {
  return (
     <div className="
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
                         ">Trabajemos juntos.</h1>
                         <p className="
                             font-inter font-regular md:text-tituloproyecto text-text90 text-xl sm:text-2xl
                         ">Pongamonos en contacto</p>
                     </header>
                <div className="
                mt-10
                     grid gap-8
                     md:grid-cols-2
                     items-start
            ">
                <div className="
                        w-full max-w-md md:max-w-none
                ">
                    <Form/>
                </div>
                <div className="
                    w-full max-w-md md:max-w-none">
                    <TarjetaContacto/>
                </div>
            </div>
            </div>
            
    </div>
  )
}
