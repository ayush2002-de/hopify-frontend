import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownProps {
  label: string; 
  options: { text: string; link?: string; onClick?: () => void }[]; // Options
}

export default function Dropdown({ label, options }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
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
                  onClick={option.onClick}
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
