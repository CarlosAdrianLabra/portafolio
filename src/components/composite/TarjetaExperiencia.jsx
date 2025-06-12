import { ICON_MAP } from "../../context/Icon-map";

export const TarjetaExperiencia = ({ exp, isLast }) => {
  if (!exp) return null;
  const { role, period, highlights, stackLogos } = exp;

  return (
    
    <li className="relative flex flex-col md:flex-row
    md:gap-8 gap-6 sm:gap-8
    md:pl-12 pl-10 sm:pl-12
    ">
     
      <span className="absolute 
      md:left-0 left-[2px]
      md:top-5 top-[18px] 
      z-10 
      md:h-4 md:w-4 h-3.5 w-3.5
      rounded-full 
      bg-gray-300 ring-2 ring-white 
      dark:bg-gray-600" 
      />

      {!isLast && (
        <span className="absolute 
        md:left-2 left-[8px] 
        md:top-8 top-[34px]
        md:-bottom-20 -bottom-20
        w-px 
        bg-gray-300 dark:bg-gray-600" />
      )}

     
      <div className="flex-1">
        <h2 className="font-inter font-medium text-btn text-text90 dark:text-gray-100">
          {role}
        </h2>

        <p className="font-inter text-descripciondelproyecto text-text90 dark:text-gray-400">
          {period}
        </p>

        <ul className="list-none list-inside ms-4 space-y-1 font-inter text-descripciondelproyecto text-text90 dark:text-gray-300">
          {highlights.map((h) => (
            <li
            className="relative ps-4
            before:content-['•']
            before:absolute
            before:left-0 before:top-1
            before:text-base
            before:text-text90" 
            key={h}>{h}</li>
          ))}
        </ul>
      </div>


      <div className="

      flex flex-wrap gap-6 w-full pt-4 pl-8 mb-4 md:mb-0
      md:grid md:grid-cols-2 flex flex-wrap md:pl-0
      md:gap-4  
      md:w-28 
      md:self-center md:content-start">
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