import React, { useState } from "react";

interface DropdownProps<T> {
  options: T[];
  onSelect: (options: T[]) => void;
  label?: string;
  title: string;
  getOptionLabel: (option: T) => string;
  getOptionKey: (option: T) => string | number;
  disabled?: boolean;
}

const MultiSelectDropdown = <T,>({
  options,
  onSelect,
  label,
  title,
  getOptionLabel,
  getOptionKey,
  disabled,
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<T[]>([]);

  const handleSelect = (option: T) => {
    // Toggle option selection
    const isSelected = selectedOptions.some(
      (selected) => getOptionKey(selected) === getOptionKey(option)
    );

    let updatedSelection;
    if (isSelected) {
      updatedSelection = selectedOptions.filter(
        (selected) => getOptionKey(selected) !== getOptionKey(option)
      );
    } else {
      updatedSelection = [...selectedOptions, option];
    }

    setSelectedOptions(updatedSelection);
    onSelect(updatedSelection);
  };

  return (
    <div className="relative inline-block text-left text-black">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          disabled={disabled}
        >
          <span>
            {title}:{" "}
            {selectedOptions.length > 0
              ? selectedOptions.map(getOptionLabel).join(", ")
              : "Select options"}
          </span>
          <svg
            className="ml-2 -mr-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 h-[10rem] overflow-y-scroll">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <button
                key={getOptionKey(option)}
                onClick={() => handleSelect(option)}
                className={`block px-4 py-2 text-sm w-full text-left ${
                  selectedOptions.some(
                    (selected) =>
                      getOptionKey(selected) === getOptionKey(option)
                  )
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
                role="menuitem"
              >
                <span className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedOptions.some(
                      (selected) =>
                        getOptionKey(selected) === getOptionKey(option)
                    )}
                    onChange={() => handleSelect(option)}
                    className="mr-2"
                  />
                  {getOptionLabel(option)}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
