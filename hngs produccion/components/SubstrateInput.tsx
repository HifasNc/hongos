import React from 'react';
import type { Substrate } from '../types';
import InputField from './InputField';
import AutocompleteInputField from './AutocompleteInputField';

interface SubstrateInputProps {
  substrate: Substrate;
  index: number;
  onUpdate: (index: number, field: keyof Substrate, value: string) => void;
  onRemove: (index: number) => void;
  substrateTypeSuggestions: string[];
  sterilizationTypeSuggestions: string[];
}

const TrashIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
    </svg>
);


const SubstrateInput: React.FC<SubstrateInputProps> = ({ 
    substrate, 
    index, 
    onUpdate, 
    onRemove, 
    substrateTypeSuggestions, 
    sterilizationTypeSuggestions,
}) => {
  const handleChange = (field: keyof Substrate) => (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate(index, field, e.target.value);
  };

  return (
    <div className="p-4 bg-white rounded-lg border border-stone-200 shadow-sm relative">
        <div className="flex justify-between items-start mb-4">
             <h3 className="text-lg font-medium text-stone-800 pt-2">
                {substrate.type || `Sustrato #${index + 1}`}
            </h3>
            <button
            type="button"
            onClick={() => onRemove(index)}
            className="p-2 text-red-500 hover:text-red-700 hover:bg-red-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            aria-label={`Eliminar Sustrato ${index + 1}`}
            >
            <TrashIcon className="h-5 w-5" />
            </button>
        </div>
      
        <div className="space-y-4">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="md:col-span-2">
                    <AutocompleteInputField
                    id={`substrate-type-${index}`}
                    label="Tipo de Sustrato"
                    value={substrate.type}
                    onChange={handleChange('type')}
                    placeholder="Ej: Paja de trigo"
                    suggestions={substrateTypeSuggestions}
                    />
                </div>
                <div>
                    <InputField
                    id={`substrate-dryWeight-${index}`}
                    label="Peso Seco (kg)"
                    type="number"
                    value={substrate.dryWeight}
                    onChange={handleChange('dryWeight')}
                    placeholder="Ej: 10"
                    />
                </div>
                <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-stone-700 mb-1">
                        % Sugerido
                    </label>
                    <div className="w-full px-3 py-2 h-10 flex items-center bg-[#f2a641] border border-stone-300 rounded-md shadow-sm">
                        <p className="text-[#040214] font-medium">{substrate.combinationPercentage || 0}%</p>
                    </div>
                </div>
            </div>
            <InputField
                id={`substrate-nutrients-${index}`}
                label="Nutrientes Adicionales"
                value={substrate.nutrients}
                onChange={handleChange('nutrients')}
                placeholder="Ej: Salvado de trigo, yeso"
            />

            {/* Processing */}
            <div className="pt-4 border-t border-stone-200">
                <h4 className="text-md font-semibold text-stone-700 mb-3">Procesamiento del Sustrato</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField
                        id={`substrate-hydrationTime-${index}`}
                        label="Tiempo de Humectación (horas)"
                        type="number"
                        value={substrate.hydrationTime}
                        onChange={handleChange('hydrationTime')}
                        placeholder="Ej: 12"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 items-start">
                    <AutocompleteInputField
                        id={`substrate-sterilizationType-${index}`}
                        label="Tipo de Esterilización"
                        value={substrate.sterilizationType}
                        onChange={handleChange('sterilizationType')}
                        placeholder="Ej: Pasteurización"
                        suggestions={sterilizationTypeSuggestions}
                    />
                    <InputField
                        id={`substrate-sterilizationHours-${index}`}
                        label="Tiempo (horas)"
                        type="number"
                        value={substrate.sterilizationHours}
                        onChange={handleChange('sterilizationHours')}
                        placeholder="Ej: 2"
                    />
                    <div>
                        <InputField
                            id={`substrate-sterilizationMinutes-${index}`}
                            label="Tiempo (minutos)"
                            type="number"
                            value={substrate.sterilizationMinutes}
                            onChange={handleChange('sterilizationMinutes')}
                            placeholder="Ej: 30"
                        />
                        <p className="text-xs text-stone-500 mt-1">en minutos</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SubstrateInput;