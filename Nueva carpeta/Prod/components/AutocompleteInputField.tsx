
import React, { useState, useEffect, useRef } from 'react';

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z" clipRule="evenodd" />
    </svg>
);

export interface AutocompleteInputFieldProps {
  id: string;
  name?: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  suggestions: string[];
  placeholder?: string;
  required?: boolean;
}

const AutocompleteInputField: React.FC<AutocompleteInputFieldProps> = ({
  id,
  name,
  label,
  value,
  onChange,
  suggestions,
  placeholder,
  required = false,
}) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.currentTarget.value;
    const newFilteredSuggestions = suggestions.filter(
      suggestion => suggestion.toLowerCase().includes(userInput.toLowerCase())
    );
    onChange(e);
    setFilteredSuggestions(newFilteredSuggestions);
    setShowSuggestions(true);
    setActiveSuggestionIndex(0);
  };

  const handleFocus = () => {
    const newFilteredSuggestions = suggestions.filter(
      suggestion => suggestion.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSuggestions(newFilteredSuggestions);
    setShowSuggestions(true);
  };

  const handleClick = (suggestion: string) => {
    const syntheticEvent = {
      target: { id, name: name || id, value: suggestion },
      currentTarget: { id, name: name || id, value: suggestion }
    } as unknown as React.ChangeEvent<HTMLInputElement>;
    
    onChange(syntheticEvent);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (showSuggestions && filteredSuggestions[activeSuggestionIndex]) {
        handleClick(filteredSuggestions[activeSuggestionIndex]);
      }
    } else if (e.key === 'ArrowUp') {
      setActiveSuggestionIndex(Math.max(0, activeSuggestionIndex - 1));
    } else if (e.key === 'ArrowDown') {
      setActiveSuggestionIndex(Math.min(filteredSuggestions.length - 1, activeSuggestionIndex + 1));
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <label htmlFor={id} className="block text-xs font-black text-stone-700 mb-1 uppercase tracking-wider">
        {label}
      </label>
      <div className="relative group">
        <input
          type="text"
          id={id}
          name={name || id}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          placeholder={placeholder}
          required={required}
          autoComplete="off"
          className="w-full px-4 py-3 bg-[#f2a641] text-[#040214] border-2 border-[#040214]/10 rounded-xl shadow-inner placeholder-[#040214]/50 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 font-bold transition-all pr-10"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ChevronDownIcon className="h-5 w-5 text-[#040214]/30" />
        </div>
      </div>
      
      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="absolute z-[9999] w-full bg-white border-2 border-stone-300 rounded-2xl mt-2 max-h-64 overflow-y-auto shadow-2xl ring-4 ring-black/5">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={`${suggestion}-${index}`}
              onClick={() => handleClick(suggestion)}
              className={`px-5 py-4 cursor-pointer border-b border-stone-100 last:border-0 hover:bg-emerald-50 transition-colors font-bold text-[#040214] flex items-center gap-3 ${
                index === activeSuggestionIndex ? 'bg-emerald-100' : ''
              }`}
            >
              <span className="w-2 h-2 bg-emerald-500 rounded-full opacity-50"></span>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteInputField;
