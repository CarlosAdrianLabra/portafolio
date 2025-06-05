import { Link } from "react-router";
import { CajaTecnologia } from "../ui/CajaTecnologia";

export const TarjetaProyecto = ({ project }) => {
  if (!project) return null;

  const { id, title, image, short, technologies } = project;
  const hasImage = Boolean(image);

  return (
    <article
      className="
      bg-white rounded-lg shadow-lg break-inside-avoid p-5
      w-[325px] flex flex-col mb-5
    "
    >
      <Link to={`/projects/${id}`} className="block space-y-4">
        
        {image && (
          <img
            src={image}
            alt={`Screenshot de ${title}`}
            className="mb-4 h-32 w-full object-cover rounded-md"
          />
        )}
       
        <h2 className="font-inter font-medium text-tituloproyecto text-text90">
          {title}
        </h2>
       
        <p className="
          font-inter font-regular text-descripciondelproyecto text-text90
          mt-1 line-clamp-3 text-sm/relaxed
        ">
          {short}
        </p>

        <div className="grid grid-cols-3 gap-3">
          {technologies.slice(0, 3).map((tech) => (
            <CajaTecnologia key={tech} Tecnologia={tech} />
          ))}
        </div>
      </Link>
    </article>
  );
};