import { ICON_MAP } from "../../context/Icon-map";

export const TarjetaExperiencia = ({ exp, isLast }) => {
  if (!exp) return null;
  const { role, period, highlights, stackLogos } = exp;

  return (
    
    <li className="relative flex gap-8 pl-12">
     
      <span className="absolute left-0 top-5 z-10 h-4 w-4 rounded-full bg-gray-300 ring-2 ring-white dark:bg-gray-600" />

     
      {!isLast && (
        <span className="absolute left-2 top-8 -bottom-20 w-px bg-gray-300 dark:bg-gray-600" />
      )}

     
      <div className="flex-1">
        <h2 className="font-inter font-medium text-btn text-text90 dark:text-gray-100">
          {role}
        </h2>

        <p className="font-inter text-descripciondelproyecto text-text90 dark:text-gray-400">
          {period}
        </p>

        <ul className="list-disc list-inside ms-4 space-y-1 font-inter text-descripciondelproyecto text-text90 dark:text-gray-300">
          {highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>


      <div className="grid grid-cols-2 gap-4 w-28 self-center content-start">
        {stackLogos.map((tech) => {
          const Icon = ICON_MAP[tech];
          return Icon ? (
            <Icon
              key={tech}
              title={tech}
              className="text-4xl text-text90"
            />
          ) : null;
        })}
      </div>
    </li>
  );
};