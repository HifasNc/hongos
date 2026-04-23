import React from 'react';

// Using solid icons for consistency with the rest of the app
const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
    </svg>
);

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  // FIX: Add optional 'name' prop to fix type errors when passed from parent components.
  name?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  name,
}) => {
    const isTime = type === 'time';
    
    let inputClasses = "w-full px-3 py-2 bg-[#f2a641] text-[#040214] border border-stone-300 rounded-md shadow-sm placeholder-[#040214]/70 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm disabled:bg-amber-200 disabled:text-stone-500 disabled:cursor-not-allowed";

    if (isTime) {
        inputClasses += " pr-10";
    }

    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-stone-700 mb-1">
                {label}
            </label>
            <div className="relative">
                <input
                    type={type}
                    id={id}
                    name={name || id}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                    className={inputClasses}
                />
                {isTime && (
                    <label htmlFor={id} className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                        <ClockIcon className="h-5 w-5 text-stone-400" />
                    </label>
                )}
            </div>
        </div>
    );
};

export default InputField;