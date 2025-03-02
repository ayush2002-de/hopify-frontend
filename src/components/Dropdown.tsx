import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownProps {
  label: string;
  options: { text: string; link?: string; onClick?: () => void }[];
}

export default function Dropdown({ label, options }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); 

  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }


    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 text-black bg-transparent focus:outline-none"
      >
        {label} <ChevronDown className="ml-2 w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2">
          {options.map((option, index) => (
            <div key={index}>
              {option.link ? (
                <a
                  href={option.link}
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  {option.text}
                </a>
              ) : (
                <button
                  onClick={() => {
                    option.onClick?.();
                    setIsOpen(false); 
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  {option.text}
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
