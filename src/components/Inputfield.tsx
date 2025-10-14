import React from 'react';

// Define props for maximum flexibility
interface InputFieldProps {
  label: string;
  name: string; // Used to link the input to the form state
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  type?: 'text' | 'number' | 'textarea'; // Supports different HTML types
  hint?: string; // For small text like "Order of display..."
}

export const InputField: React.FC<InputFieldProps> = ({ 
  label, 
  name, 
  placeholder, 
  value, 
  onChange, 
  required = false, 
  type = 'text', 
  hint 
}) => {
  
  // Choose between input or textarea based on 'type' prop
  const FieldElement = type === 'textarea' ? 'textarea' : 'input';

  return (
    <div style={{ marginBottom: '15px' }}>
      <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#333' }}>
        {label}
        {required && <span style={{ color: 'red' }}>*</span>}
      </label>
      
      <FieldElement
        // Universal props for both input and textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        style={{ 
          width: '100%', 
          padding: '10px', 
          border: '1px solid #ddd', 
          borderRadius: '4px', 
          boxSizing: 'border-box',
          ...(type === 'textarea' && { minHeight: '80px', resize: 'vertical' }) // Style for textarea
        }}
        // Type attribute is only valid for input elements
        {...(type !== 'textarea' && { type: type })} 
      />

      {hint && <small style={{ display: 'block', marginTop: '5px', color: '#666', fontSize: '12px' }}>{hint}</small>}
    </div>
  );
};