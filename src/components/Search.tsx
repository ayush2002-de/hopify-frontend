import { useState } from "react";

interface SearchProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

export default function Search({ placeholder = "Search here...", onSearch }: SearchProps) {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center border border-gray-300 rounded-full p-2 w-120">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        onKeyDown={(e) => e.key === "Enter" && onSearch(query)}
        className="w-full outline-none text-black px-2"
      />
      <button
        onClick={() => onSearch(query)}
        className="bg-blue-500 text-white px-4 py-1 rounded-full cursor-pointer hover:scale-105"
      >
        Search
      </button>
    </div>
  );
}
