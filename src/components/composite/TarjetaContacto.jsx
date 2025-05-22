
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
            <img src="src\assets\material-symbols_mail.png" className="w-[50px] h-[50px]"/>
            <p className="
                font-inter font-regular text-descripciondelproyecto text-text90
            ">carlosadrianlabragranados@gmail.com</p>
        </div>
        <div className="
            flex flex-row gap-x-4
            justify-start items-center
        ">
            <img src="src\assets\material-symbols_phone-enabled.png" className="w-[50px] h-[50px]"/>
            <p className="
                font-inter font-regular text-descripciondelproyecto text-text90
            ">55 25 08 03 93</p>
        </div>
        <div className="
            flex flex-row gap-x-4
            justify-start items-center
        ">
            <img src="src\assets\mdi_github.png" className="w-[50px] h-[50px]"/>
            <p className="
                font-inter font-regular text-descripciondelproyecto text-text90
            ">CarlosLabraGranados</p>
        </div>
        <div className="
            flex flex-row gap-x-4
            justify-start items-center
        ">
            <img src="src\assets\mdi_linkedin.png" className="w-[50px] h-[50px]"/>
            <p className="
                font-inter font-regular text-descripciondelproyecto text-text90
            ">Carlos Adrian Labra Granados</p>
        </div>
    </div>
  )
}
