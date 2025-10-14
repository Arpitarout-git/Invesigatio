import React from 'react';
import { SelectOption } from '../types'; // Import your interface

interface DropdownProps {
  label: string;
  name: string;
  options: SelectOption[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  hint?: string; // For small text like "Defines the nature of report"
}

export const Dropdown: React.FC<DropdownProps> = ({ 
  label, 
  name, 
  options, 
  value, 
  onChange, 
  required = false, 
  hint 
}) => (
  <div style={{ marginBottom: '15px' }}>
    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#333' }}>
      {label}
      {required && <span style={{ color: 'red' }}>*</span>}
    </label>
    
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      style={{
        width: '100%',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxSizing: 'border-box',
        appearance: 'none', // Helps in custom styling to look cleaner
        backgroundColor: '#fff',
      }}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>

    {hint && <small style={{ display: 'block', marginTop: '5px', color: '#666', fontSize: '12px' }}>{hint}</small>}
  </div>
);