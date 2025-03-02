import { useState } from "react";

interface SearchProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

export default function Search({ placeholder = "Search All...", onSearch }: SearchProps) {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center border border-gray-300 rounded-md p-2 w-120">
      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full outline-none text-black px-2"
      />
      {/* Search Button */}
      <button
        onClick={() => onSearch(query)}
        className="bg-blue-500 text-white px-4 py-1 rounded-md"
      >
        Search
      </button>
    </div>
  );
}
