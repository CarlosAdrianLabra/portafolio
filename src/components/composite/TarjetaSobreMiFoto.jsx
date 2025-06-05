import { FaAws } from "react-icons/fa"
import { SiReact, SiNextdotjs, SiAwslambda, SiTypescript } from "react-icons/si"

export const TarjetaSobreMiFoto = () => {
  return (
    <div className="
        bg-white
        shadow-lg
        max-w-[478px]
        max-h-[581px]
        grid grid-cols-1 gap-y-10
        justify-items-center
        p-10
        rounded-[15px]
    ">
        <img src="https://placehold.co/250x250.png" className="rounded-[130px]"/>
        <div className="
            max-w-[225px]
            max-h-[225px]
            grid grid-cols-2 gap-x-8 gap-y-5
        ">
        <SiReact className="h-[100px] w-[100px] text-text90" />
        <SiNextdotjs className="h-[100px] w-[100px] text-text90" />
        <FaAws className="h-[100px] w-[100px] text-text90" />
        <SiTypescript className="h-[100px] w-[100px] text-text90" />  
        </div>
    </div>
  )
}
