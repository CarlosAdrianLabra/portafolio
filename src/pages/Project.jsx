import { Navbar } from "../components/layout/Navbar"
import { useParams, Navigate } from "react-router";
import projects from "../data/projects.json";

export const Project = () => {

    const { id } = useParams();
    const project = projects.find((p) => p.id === id);
    if (!project) return <Navigate to="/projects" />;

    const {
        title,
        short,
        image,
        year,
        role,
        keyMetrics,
        problem,
        solution,
        challenges,
        responsibilities,
        technologies,
    } = project;

  return (
    <div className="
        bg-primario-bglight
        h-full">
        {/* <Navbar/> */}
        <div className="
            max-w-[1140px]
            mx-auto
            pb-15
            pt-10">
            <h1 className="
            font-inter font-semibold text-hero text-text90 
            ">{title}</h1>
            <p className="
            font-inter font-regular text-tituloproyecto text-text90
            ">{short}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3
                                gap-5 mt-10
                                grid-flow-row-dense ">
                    <div className="col-span-2 row-span-2">
                        <img src={image} className="rounded-[15px]"/>
                    </div>
                    <div className="bg-white rounded-[15px] shadow-lg p-5">
                        <h2 className="
                            font-inter font-medium text-btn text-text90
                        ">Metricas clave</h2>
                        <ul className="
                            font-inter font-regular text-descripciondelproyecto text-text90 
                            list-disc list-inside
                        ">
                            <li>Metricas 1</li>
                            <li>Metricas 2</li>
                            <li>Metricas 3</li>
                            <li>Metricas 4</li>

                        </ul>
                    </div>
                    <div className="bg-white rounded-[15px] shadow-lg p-5">
                        <h2 className="
                            font-inter font-medium text-btn text-text90
                        ">Informacion</h2>
                        <p className="
                            font-inter font-regular text-descripciondelproyecto text-text90
                        ">Ano: {year} <br/> Rol: {role}  
                        </p>
                    </div>
                    <div className="bg-white rounded-[15px] shadow-lg p-5">
                        <h2 className="
                            font-inter font-medium text-btn text-text90
                        ">Responsabilidades</h2>
                        <ul className="
                            font-inter font-regular text-descripciondelproyecto text-text90 
                            list-disc list-inside
                        ">
                            <li>Metricas 1</li>
                            <li>Metricas 2</li>
                            <li>Metricas 3</li>
                            

                        </ul>
                    </div>
                    <div className="bg-white rounded-[15px] shadow-lg p-5">
                        <h2 className="
                            font-inter font-medium text-btn text-text90
                        ">Problema</h2>
                        <p className="
                            font-inter font-regular text-descripciondelproyecto text-text90
                        ">{problem}</p>
                    </div>
                    <div className="bg-white rounded-[15px] shadow-lg p-5">
                        <h2 className="
                            font-inter font-medium text-btn text-text90
                        ">Solucion</h2>
                        <p className="
                            font-inter font-regular text-descripciondelproyecto text-text90
                        ">{solution}</p>
                    </div>
                    <div className="sm:col-span-2 bg-white rounded-[15px] shadow-lg p-5">
                        <h2 className="
                            font-inter font-medium text-btn text-text90
                        ">Tecnologias</h2>
                        <div className=" flex mt-4 justify-between">
                            <img src="https://placehold.co/90x90.png"/>
                            <img src="https://placehold.co/90x90.png"/>
                            <img src="https://placehold.co/90x90.png"/>
                            <img src="https://placehold.co/90x90.png"/>
                            
                        </div>
                    </div>
                    <div className="bg-white rounded-[15px] shadow-lg p-5">
                        <h2 className="
                            font-inter font-medium text-btn text-text90
                        ">Desafios</h2>
                        <p className="
                            font-inter font-regular text-descripciondelproyecto text-text90
                        ">Descripcion corta del proyecto</p>
                    </div>

                </div>
        </div>
                
    </div>
  )
}
