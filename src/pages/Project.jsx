import { useParams, Navigate } from "react-router";
import { Navbar } from "../components/layout/Navbar";
import { Card } from "../components/ui/Card";
import { ICON_MAP } from "../context/Icon-map";
import projects from "../data/projects.json";

/* ---------- helpers ---------- */
const TechIcon = ({ tech }) => {
  const Icon = ICON_MAP[tech.toLowerCase()];
  return Icon ? (
    <Icon className="text-4xl text-text90 dark:text-gray-300" title={tech} />
  ) : (
    <span className="text-sm text-gray-500">{tech}</span>
  );
};

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
    keyMetrics = [],
    problem,
    solution,
    challenges = [],
    responsibilities = [],
    technologies = []
  } = project;


  const Hero = () =>
    image ? (
      <div className="w-full h-full rounded-[15px] bg-white flex justify-center items-center overflow-hidden shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-full rounded-[15px] object-contain"
      />
      </div>
    ) : (
      <div className="h-full w-full rounded-[15px] grid place-items-center bg-gray-100 dark:bg-gray-800 shadow-lg">
        <span className="text-gray-400 dark:text-gray-500 text-center px-6">
          Imagen no disponible<br />({title})
        </span>
      </div>
    );


  return (
    <div className="bg-primario-bglight min-h-screen">
  

      <div className="max-w-[1140px] mx-auto pt-10 pb-15">
     
        <h1 className="font-inter font-semibold text-hero text-text90">
          {title}
        </h1>
        <p className="font-inter text-tituloproyecto text-text90">{short}</p>

     
        <div className="mt-10 space-y-6">
       
          <div className="grid gap-6 sm:grid-cols-3 auto-rows-min items-start">
         
            <div className="sm:col-span-2 h-[300px] md:h-[400px] lg:h-[500px]">
              <Hero />
            </div>

           
            <div className="flex flex-col gap-6">
              <Card title="Métricas clave">
                <ul className="list-disc list-inside space-y-1">
                  {keyMetrics.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </Card>
              <Card title="Problema">
              <p>{problem}</p>
            </Card>
              

              
            </div>
          </div>

          {/* ---------- FILA 2 ---------- */}
          <div className="grid gap-6 sm:grid-cols-3 auto-rows-min items-start">
            <Card title="Responsabilidades">
              <ul className="list-disc list-inside space-y-1">
                {responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </Card>

            <Card title="Desafíos">
              <ul className="list-disc list-inside space-y-1">
                {challenges.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Card>

            <Card title="Solución">
              <p>{solution}</p>
            </Card>

            {/* Tecnologías → ancho doble */}
            <Card title="Tecnologías" className="sm:col-span-2">
              <div className="flex flex-wrap justify-around gap-6 mt-2 grow mt-5 mb-2">
                {technologies.map((t) => (
                  <TechIcon key={t} tech={t} />
                ))}
              </div>
            </Card><Card title="Información">
                <p>
                  Año: {year}
                  <br />
                  Rol: {role}
                </p>
              </Card>

            
          </div>
        </div>
      </div>
    </div>
  );
};