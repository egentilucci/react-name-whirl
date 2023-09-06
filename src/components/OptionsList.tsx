import React, { useState } from "react";

interface OptionsListProps {
  options: string[];
  setOptions: React.Dispatch<React.SetStateAction<string[]>>;
}

export function OptionsList({ options, setOptions }: OptionsListProps) {
  const [option, setOption] = useState<string>("");

  const handleDeleteOption = (indexToDelete: number) => {
    const updatedOptions = options.filter((_, index) => index !== indexToDelete);
    setOptions(updatedOptions);
  };

  return (
    <div>
      <input
        type="text"
        name="option"
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder="insert some text and press Enter..."
        value={option}
        onChange={(e) => setOption(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (option !== "") {
              setOptions([...options, option]);
              setOption("");
            }
          }
        }}
      />
      {options.map((option, index) => (
        <div className="flex hover:bg-gray-100" key={index}>
          <div className="w-3/4 p-1">{option}</div>
          <div className="w-1/4 p-1">
            <button className="hover:bg-gray-300 rounded uppercase" onClick={() => handleDeleteOption(index)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
