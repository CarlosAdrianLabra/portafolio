
export const Card = ({ title, children, className = "" }) => (
  <div className={`bg-white dark:bg-[#1c1f24] rounded-[15px] shadow-lg p-5 ${className}`}>
    {title && (
      <h2 className="font-inter font-medium text-btn text-text90 dark:text-gray-100 mb-2">
        {title}
      </h2>
    )}
    <div className="font-inter text-descripciondelproyecto text-text90 dark:text-gray-300">
      {children}
    </div>
  </div>
);