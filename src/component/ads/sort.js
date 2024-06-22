/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";

export function CustomSelect({ options, name, onChange, value }) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionClick = (optionValue) => {
    if (optionValue === "All") {
      onChange(null); // Set selectedType to null to display all data
    } else {
      onChange(optionValue);
    }
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleEscapeKey = (event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
      window.addEventListener("keydown", handleEscapeKey);
    } else {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("keydown", handleEscapeKey);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

  return (
    <div
      className="flex  items-center mb-[-1rem] justify-end ml-[8rem] mt-[-4rem] p-[2rem]
      
          relative"
      ref={dropdownRef}
    >
      <span className="capitalize  font-medium text-2xl text-gray-900 mr-2">
        {/* filter by type */}
      </span>
      <div
        className={`bg-[whitesmoke]
            hover:bg-[rgba(45, 194, 52, 0.815)] capitalize 
          border border-green-500 rounded-md  text-xl text-gray-900 
          cursor-pointer p-[1rem] w-[14rem]
        `}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        role="button" // Add role attribute
      >
        {value || name}
      </div>
      {isOpen && (
        <div
          className={`absolute mt-[13.5rem] z-10 w-[14rem]  bg-[whitesmoke] text-gray-900 border border-[#53b470f6] rounded-md overflow-y-auto max-h-40`}
        >
          {options.map((option, index) => (
            <div
              key={index} // Use the index as the key if option.value is not unique
              className="px-4 py-2  cursor-pointer hover:bg-[#53b470d0]"
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
