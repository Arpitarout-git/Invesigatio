// import React, { useState, useCallback } from 'react';
// import { InputField } from '../components/Inputfield';
// import { Dropdown } from '../components/Dropdown'; 
// import TubeColorSelector from '../components/TubeColorSelector';
// import { InvestigationForm } from '../types'; 
// import { departmentOptions, unitOptions } from '../data/mockData'; 
// const initialFormState: InvestigationForm = {
//   loincCode: '', cptCode: '', testName: '', testCategory: '', shortName: '', shortCode: '',
//   department: departmentOptions[0].value, subDepartment: departmentOptions[0].value,
//   roleType: '', reportType: '', sampleType: '',
//   sampleQuantity: 10, sampleQuantityUnit: unitOptions[0].value, 
//   sampleTemperature: '', sampleTemperatureUnit: unitOptions[0].value, 
//   testMethod: 'Method', instrumentType: '',
//   description: 'Description', sacCode: 'SAC Code', order: 100000, derivedTest: '',
//   externalTestId: 'Example: For Test ID', selectedColors: [],
// };

// interface AddInvestigationFormProps {
//     onCancel: () => void;
// }

// const AddInvestigationForm: React.FC<AddInvestigationFormProps> = ({ onCancel }) => {
//   const [formData, setFormData] = useState<InvestigationForm>(initialFormState);

//   const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ 
//       ...prev, 
//       [name]: (name === 'sampleQuantity' || name === 'order') ? Number(value) : value 
//     }));
//   }, []);

//   const handleColorChange = useCallback((selectedColors: string[]) => {
//     setFormData(prev => ({ ...prev, selectedColors }));
//   }, []);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Investigation Form Submitted:', formData);
//   };
  
//   const getTemperatureUnits = () => [
//       ...unitOptions.filter(o => o.value !== 'ml'),
//       { value: 'celsius', label: '°C' } 
//   ];
  
//   const getSubDepartmentOptions = () => departmentOptions.map(o => ({
//     value: o.value, 
//     label: o.value === '' ? 'Select Sub-Department' : `Sub-Dept ${o.label}`
//   }));

//   return (
//     <div style={{ padding: '20px', flexGrow: 1, backgroundColor: '#f9f9f9' }}>
//       <div style={{
//         backgroundColor: '#fff',
//         padding: '20px',
//         borderRadius: '8px',
//         boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
//       }}>
//         {/* Green Header Banner (Matches the Add Investigation form color) */}
//         <div style={{
//           backgroundColor: '#00A854', 
//           color: '#fff',
//           padding: '15px',
//           margin: '-20px -20px 20px -20px',
//           fontSize: '20px',
//           fontWeight: '500',
//         }}>
//           Add Investigation
//         </div>

//         <form onSubmit={handleSubmit}>
          
//           {/* --- SECTION 1: General Info (4-COLUMN GRID) --- */}
//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
//             <InputField label="LOINC CODE" name="loincCode" placeholder="LOINC CODE" value={formData.loincCode} onChange={handleChange} />
//             <InputField label="CPT CODE" name="cptCode" placeholder="CPT CODE" value={formData.cptCode} onChange={handleChange} />
//             <InputField label="Test Name" name="testName" placeholder="Test name" value={formData.testName} onChange={handleChange} required />
//             <Dropdown label="Test Category" name="testCategory" options={[{ value: '', label: 'Test category' }, { value: 'gen', label: 'General' }]} value={formData.testCategory} onChange={handleChange} required />
//             <InputField label="Short Name" name="shortName" placeholder="Short Name" value={formData.shortName} onChange={handleChange} />
//             <InputField label="Short Code" name="shortCode" placeholder="Enter" value={formData.shortCode} onChange={handleChange} />
//             <Dropdown label="Department" name="department" options={departmentOptions} value={formData.department} onChange={handleChange} />
//             <Dropdown label="Sub-Department" name="subDepartment" options={getSubDepartmentOptions()} value={formData.subDepartment} onChange={handleChange} />
//             <Dropdown label="Role Type" name="roleType" options={[{ value: '', label: 'Select Role Type' }]} value={formData.roleType} onChange={handleChange} />
//             <Dropdown
//               label="Report Type"
//               name="reportType"
//               options={[{ value: '', label: 'Select Report Type' }]}
//               value={formData.reportType}
//               onChange={handleChange}
//               hint="Defines the nature of report"
//             />
//           </div>

//           <div style={{ height: '30px' }}></div> 

//           {/* --- SECTION 2: Sample/Method Details (6-COLUMN GRID) --- */}
//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '20px' }}>
//             <Dropdown label="Sample Type" name="sampleType" options={[{ value: '', label: 'Select Sample Type' }]} value={formData.sampleType} onChange={handleChange} />
//             <InputField type="number" label="Sample Quantity" name="sampleQuantity" placeholder="10" value={formData.sampleQuantity} onChange={handleChange} />
//             <Dropdown label="Select Unit" name="sampleQuantityUnit" options={unitOptions} value={formData.sampleQuantityUnit} onChange={handleChange} />
//             <InputField type="text" label="Sample Temperature" name="sampleTemperature" placeholder="Enter temperatu" value={formData.sampleTemperature} onChange={handleChange} />
//             <Dropdown label="Select Unit" name="sampleTemperatureUnit" options={getTemperatureUnits()} value={formData.sampleTemperatureUnit} onChange={handleChange} />
//             <InputField label="Test Method" name="testMethod" placeholder="Method" value={formData.testMethod} onChange={handleChange} />
            
//             <Dropdown label="Instrument Type" name="instrumentType" options={[{ value: '', label: 'Select Instrument Type' }]} value={formData.instrumentType} onChange={handleChange} />
//             <InputField label="Description" name="description" placeholder="Description" value={formData.description} onChange={handleChange} type="textarea" /> 
//             <InputField label="SAC" name="sacCode" placeholder="SAC Code" value={formData.sacCode} onChange={handleChange} />
//             <InputField 
//                 label="Order" 
//                 name="order" 
//                 placeholder="100000" 
//                 value={formData.order} 
//                 onChange={handleChange} 
//                 type="number"
//                 hint="Order of display in the printout for the test" 
//             />
//             <Dropdown label="Derived Test" name="derivedTest" options={[{ value: '', label: 'Select Derived Test' }]} value={formData.derivedTest} onChange={handleChange} />
//             <InputField label="External Test ID" name="externalTestId" placeholder="Example: For Test ID" value={formData.externalTestId} onChange={handleChange} />
//           </div>

//           <div style={{ height: '30px' }}></div> 
          
//           {/* --- SECTION 3: Tube Color Selection --- */}
//           <TubeColorSelector selectedColors={formData.selectedColors} onColorChange={handleColorChange} />

//           {/* --- Submission Buttons (Bottom Right) --- */}
//           <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
//             <button
//               type="button"
//               onClick={onCancel}
//               style={{
//                 padding: '10px 20px',
//                 marginRight: '10px',
//                 backgroundColor: '#fff',
//                 color: '#333',
//                 border: '1px solid #ccc',
//                 borderRadius: '4px',
//                 cursor: 'pointer',
//               }}
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               style={{
//                 padding: '10px 20px',
//                 backgroundColor: '#00A854',
//                 color: '#fff',
//                 border: 'none',
//                 borderRadius: '4px',
//                 cursor: 'pointer',
//                 fontWeight: 'bold',
//               }}
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddInvestigationForm;











import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputField } from '../components/Inputfield';
import { Dropdown } from '../components/Dropdown'; 
import TubeColorSelector from '../components/TubeColorSelector';
import { InvestigationForm } from '../types'; 
import { departmentOptions, unitOptions, tubeColors } from '../data/mockData'; 

// --- Initial State Definition ---
const initialFormState: InvestigationForm = {
  loincCode: '', cptCode: '', testName: '', testCategory: '', shortName: '', shortCode: '',
  department: departmentOptions[0].value, subDepartment: departmentOptions[0].value, // Start with 'Select...'
  roleType: '', reportType: '', sampleType: '',
  sampleQuantity: 10, sampleQuantityUnit: unitOptions[0].value, 
  sampleTemperature: '', sampleTemperatureUnit: unitOptions[0].value, 
  testMethod: 'Method', instrumentType: '',
  description: 'Description', sacCode: 'SAC Code', order: 100000, derivedTest: '',
  externalTestId: 'Example: For Test ID', selectedColors: [],
};

// Added props interface for onCancel
interface AddInvestigationFormProps { onCancel?: () => void; }

// Updated component to accept optional onCancel and fallback to navigate(-1)
const AddInvestigationForm: React.FC<AddInvestigationFormProps> = ({ onCancel }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<InvestigationForm>(initialFormState);

  // --- Universal Change Handler ---
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: (name === 'sampleQuantity' || name === 'order') ? Number(value) : value 
    }));
  }, []);

  // --- Specific Handler for Color Selector ---
  const handleColorChange = useCallback((selectedColors: string[]) => {
    setFormData(prev => ({ ...prev, selectedColors }));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Investigation Form Submitted:', formData);
    // TODO: Implement Axios call to POST data to your PostgreSQL backend
  };

  const handleCancel = () => {
    if (onCancel) onCancel(); else navigate('/investigation-master');
  };

  // Helper for units (assuming sample temperature uses different units like °C)
  const getTemperatureUnits = () => [
      ...unitOptions.filter(o => o.value !== 'ml'),
      { value: 'celsius', label: '°C' } 
  ];
  
  // Helper to create options for fields like 'Sub-Department'
  const getSubDepartmentOptions = () => departmentOptions.map(o => ({
    value: o.value, 
    label: o.value === '' ? 'Select Sub-Department' : `Sub-Dept ${o.label}`
  }));

  return (
    <div style={{ padding: '20px', flexGrow: 1, backgroundColor: '#f9f9f9' }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      }}>
        {/* Green Header Banner (Exact color: #00A854) */}
        <div style={{
          backgroundColor: '#68e2a5ff', 
          color: '#fff',
          padding: '15px',
          margin: '-20px -20px 20px -20px',
          fontSize: '20px',
          fontWeight: '500',
        }}>
          Add Investigation
        </div>

        <form onSubmit={handleSubmit}>
          
          {/* ---------------------------------------------------- */}
          {/* --- SECTION 1: General Info (4-COLUMN GRID) --- */}
          {/* ---------------------------------------------------- */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            
            {/* Row 1 */}
            <InputField label="LOINC CODE" name="loincCode" placeholder="LOINC CODE" value={formData.loincCode} onChange={handleChange} />
            <InputField label="CPT CODE" name="cptCode" placeholder="CPT CODE" value={formData.cptCode} onChange={handleChange} />
            <InputField label="Test Name" name="testName" placeholder="Test name" value={formData.testName} onChange={handleChange} required />
            <Dropdown label="Test Category" name="testCategory" options={[{ value: '', label: 'Test category' }, { value: 'gen', label: 'General' }]} value={formData.testCategory} onChange={handleChange} required />

            {/* Row 2 */}
            <InputField label="Short Name" name="shortName" placeholder="Short Name" value={formData.shortName} onChange={handleChange} />
            <InputField label="Short Code" name="shortCode" placeholder="Enter" value={formData.shortCode} onChange={handleChange} />
            <Dropdown label="Department" name="department" options={departmentOptions} value={formData.department} onChange={handleChange} />
            <Dropdown label="Sub-Department" name="subDepartment" options={getSubDepartmentOptions()} value={formData.subDepartment} onChange={handleChange} />

            {/* Row 3 (Two fields shown in 4-column space) */}
            <Dropdown label="Role Type" name="roleType" options={[{ value: '', label: 'Select Role Type' }]} value={formData.roleType} onChange={handleChange} />
            <Dropdown
              label="Report Type"
              name="reportType"
              options={[{ value: '', label: 'Select Report Type' }]}
              value={formData.reportType}
              onChange={handleChange}
              hint="Defines the nature of report"
            />
          </div>

          <div style={{ height: '30px' }}></div> 

          {/* ---------------------------------------------------- */}
          {/* --- SECTION 2: Sample/Method Details (6-COLUMN GRID) --- */}
          {/* ---------------------------------------------------- */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '20px' }}>
            
            {/* Row 1 */}
            <Dropdown label="Sample Type" name="sampleType" options={[{ value: '', label: 'Select Sample Type' }]} value={formData.sampleType} onChange={handleChange} />
            <InputField type="number" label="Sample Quantity" name="sampleQuantity" placeholder="10" value={formData.sampleQuantity} onChange={handleChange} />
            <Dropdown label="Select Unit" name="sampleQuantityUnit" options={unitOptions} value={formData.sampleQuantityUnit} onChange={handleChange} />

            <InputField type="text" label="Sample Temperature" name="sampleTemperature" placeholder="Enter temperatu" value={formData.sampleTemperature} onChange={handleChange} />
            <Dropdown label="Select Unit" name="sampleTemperatureUnit" options={getTemperatureUnits()} value={formData.sampleTemperatureUnit} onChange={handleChange} />
            <InputField label="Test Method" name="testMethod" placeholder="Method" value={formData.testMethod} onChange={handleChange} />
            
            {/* Row 2 */}
            <Dropdown label="Instrument Type" name="instrumentType" options={[{ value: '', label: 'Select Instrument Type' }]} value={formData.instrumentType} onChange={handleChange} />
            
            {/* Description spans 1 column but uses textarea */}
            <InputField label="Description" name="description" placeholder="Description" value={formData.description} onChange={handleChange} type="textarea" /> 
            
            <InputField label="SAC" name="sacCode" placeholder="SAC Code" value={formData.sacCode} onChange={handleChange} />
            
            <InputField 
                label="Order" 
                name="order" 
                placeholder="100000" 
                value={formData.order} 
                onChange={handleChange} 
                type="number"
                hint="Order of display in the printout for the test" 
            />

            <Dropdown label="Derived Test" name="derivedTest" options={[{ value: '', label: 'Select Derived Test' }]} value={formData.derivedTest} onChange={handleChange} />
            <InputField label="External Test ID" name="externalTestId" placeholder="Example: For Test ID" value={formData.externalTestId} onChange={handleChange} />
          </div>

          <div style={{ height: '30px' }}></div> 
          
          {/* ---------------------------------------------------- */}
          {/* --- SECTION 3: Tube Color Selection (From in2p.jpg) --- */}
          {/* ---------------------------------------------------- */}
          <TubeColorSelector selectedColors={formData.selectedColors} onColorChange={handleColorChange} />

          {/* --- Submission Buttons (Bottom Right) --- */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
            <button
              type="button"
              onClick={handleCancel}
              style={{
                padding: '10px 20px',
                marginRight: '10px',
                backgroundColor: '#fff',
                color: '#333',
                border: '1px solid #ccc',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                padding: '10px 20px',
                backgroundColor: '#0aa832ff', // Green Submit button
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddInvestigationForm;