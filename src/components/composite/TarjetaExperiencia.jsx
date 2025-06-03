
export const TarjetaExperiencia = ({ exp }) => {
    if (!exp) return null;   

    const {
    role,
    period,              // "Jun 2024 – Presente"
    companyLogo,         // "/img/konfront-logo.png" o URL externa
    highlights,          // array de strings
    stackLogos           // array de URLs (máx 6 para tu grid)
  } = exp;

  return (
    <div className="
        bg-white
        max-w-[1138px]
        max-h-[240px]
        mx-auto
        flex
        justify-between
        items-center
    ">
        <div className="bg-white
            max-w-[685px]
            max-h-[240px]
            flex">
            <img src="src\assets\Frame 33.png"/>
            <div className="
            bg-white
            max-w-[600px]
            ">
                <h1 className="
                    font-inter font-medium text-btn text-text90 pt-2
                ">{role}</h1>
                <p className="
                    font-inter font-regular text-descripciondelproyecto text-text90
                ">{period}</p>
                <ul className="
                    list-inside list-disc ms-4
                    font-inter font-regular text-descripciondelproyecto text-text90
                ">
                    {highlights.map((h) => (
                        <li key={h}>{h}</li>
                        ))}
                    
                    
                    
                </ul>
            </div>

        </div>
        
        <div className="
            grid grid-cols-2 gap-x-4 gap-y-2
            max-w-[181px]
        ">
            <img src='https://placehold.co/55x55.png' className="
                max-w-[55px]
                max-h-[55px]
            "/>
            <img src='https://placehold.co/55x55.png' className="
                max-w-[55px]
                max-h-[55px]
            "/> 
            <img src='https://placehold.co/55x55.png' className="
                max-w-[55px]
                max-h-[55px]
            "/> 
            <img src='https://placehold.co/55x55.png' className="
                max-w-[55px]
                max-h-[55px]
            "/> 
            <img src='https://placehold.co/55x55.png' className="
                max-w-[55px]
                max-h-[55px]
            "/> 
            <img src='https://placehold.co/55x55.png' className="
                max-w-[55px]
                max-h-[55px]
            "/>     
        </div>


    </div>
  )
}
