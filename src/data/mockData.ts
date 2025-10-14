// // Update the import path if your types file is located elsewhere, for example:
// import { SelectOption, ColorOption } from '../types';
// // Or create a 'types.ts' file in the same directory with the following content:
// // export interface SelectOption { value: string; label: string; }
// // export interface ColorOption { name: string; hex: string; }

// export const departmentOptions: SelectOption[] = [
//   { value: '', label: 'Select Department' },
//   { value: 'cardiology', label: 'Cardiology' },
//   { value: 'pathology', label: 'Pathology' },
// ];
import { SelectOption, ColorOption } from '../types';

export const departmentOptions: SelectOption[] = [
  { value: '', label: 'Select Department' },
  { value: 'cardiology', label: 'Cardiology' },
  { value: 'pathology', label: 'Pathology' },
];

// 👈 THIS IS THE MISSING OR INCORRECTLY EXPORTED SECTION
export const unitOptions: SelectOption[] = [
    { value: '', label: 'Select Unit' },
    { value: 'ml', label: 'ml' },
    { value: 'ul', label: 'µL (Micro-Liter)' },
    { value: 'g', label: 'g (Gram)' },
];
// 👆 ENSURE THIS IS PRESENT

export const testCategoryOptions: SelectOption[] = [
    { value: '', label: 'Test category' },
    { value: 'blood', label: 'Blood' },
    { value: 'urine', label: 'Urine' },
];

export const tubeColors: ColorOption[] = [
  { name: 'Red', hex: '#E74C3C' },
  { name: 'Blue', hex: '#3498DB' },
  { name: 'Yellow', hex: '#F1C40F' },
  { name: 'Gold', hex: '#FFD700' },
  { name: 'Green', hex: '#2ECC71' },
  { name: 'Pink', hex: '#FF69B4' },
  { name: 'Purple', hex: '#9B59B6' },
  { name: 'Dark Blue', hex: '#00008B' },
  { name: 'Block', hex: '#7F8C8D' }, // Gray for block/dark
  { name: 'Slide', hex: '#F0F0F0' }, // Light gray for slide
];









// import { SelectOption, ColorOption } from '../types';

// export const departmentOptions: SelectOption[] = [
//   { value: '', label: 'Select Department' },
//   { value: 'cardiology', label: 'Cardiology' },
//   { value: 'pathology', label: 'Pathology' },
// ];

// export const unitOptions: SelectOption[] = [
//     { value: '', label: 'Select Unit' },
//     { value: 'ml', label: 'ml' },
//     { value: 'units', label: 'Units' },
// ];

// export const tubeColors: ColorOption[] = [
//   { name: 'Red', hex: '#E74C3C' },
//   { name: 'Blue', hex: '#3498DB' },
//   { name: 'Yellow', hex: '#F1C40F' },
//     { name: 'Green', hex: '#2ECC71' },
  
// ];