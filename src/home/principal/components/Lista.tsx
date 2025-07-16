import { useState } from "react";

const Lista: React.FC<{ options: string[]; label: string }> = ({ options, label }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    const handleSelect = (option: string) => {
      setSelected(option);
      setIsOpen(false);
    };
  
    return (
      <div className="relative w-full">
        <button
          onClick={toggleDropdown}
          className="w-full flex justify-between items-center px-4 py-2 bg-slate-200 text-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
        >
          {selected ? selected : label}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transform transition-transform ${isOpen ? "rotate-180" : ""}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
  
        {isOpen && (
          <ul className="absolute z-10 h-40 overflow-auto mt-2 w-full bg-white rounded-md shadow-lg border">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default Lista;