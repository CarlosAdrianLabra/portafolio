import { Github, Linkedin, LinkedinIcon, Mail, Phone } from "lucide-react"


export const TarjetaContacto = () => {
  return (
    <div className="
        bg-white
        shadow-lg
        max-w-[528px]
        max-h-[401px]
        rounded-[15px]
        justify-items-start
        p-10
        grid grid-cols-1 gap-y-4
    ">
        <h1 className="
            font-inter font-medium text-tituloproyecto text-text90
        ">Contacto</h1>
        <div className="
            flex flex-row gap-x-4
            justify-start items-center
        ">
           <Mail className="w-[50px] h-[50px] text-text90"/>
            <p className="
                font-inter font-regular text-descripciondelproyecto text-text90
            ">carlosadrianlabragranados@gmail.com</p>
        </div>
        {/* <div className="
            flex flex-row gap-x-4
            justify-start items-center
        ">
            <Phone className="w-[50px] h-[50px] text-text90"/>
            <p className="
                font-inter font-regular text-descripciondelproyecto text-text90
            ">12 34 56 78 90</p>
        </div> */}
        <div className="
            flex flex-row gap-x-4
            justify-start items-center
        ">
            <Github className="w-[50px] h-[50px] text-text90"/>
            <p className="
                font-inter font-regular text-descripciondelproyecto text-text90
            ">CarlosLabraGranados</p>
        </div>
        <div className="
            flex flex-row gap-x-4
            justify-start items-center
        ">
            <Linkedin className="w-[50px] h-[50px] text-text90"/>
            <p className="
                font-inter font-regular text-descripciondelproyecto text-text90
            ">Carlos Adrian Labra Granados</p>
        </div>
    </div>
  )
}
