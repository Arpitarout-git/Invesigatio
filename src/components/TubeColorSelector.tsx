import React from 'react';
import { ColorOption } from '../types';
import { tubeColors } from '../data/mockData';

interface TubeColorSelectorProps {
  selectedColors: string[];
  onColorChange: (colors: string[]) => void;
}

interface ColorCardProps {
  color: ColorOption;
  isRadio: boolean;
  isSelected: boolean;
  onSelect: (name: string) => void;
}

const ColorIcon: React.FC<{ hex: string }> = ({ hex }) => (
  <div style={{
    width: '15px',
    height: '25px',
    borderRadius: '0 0 7px 7px', // Tube-like shape for the color fill
    backgroundColor: hex,
    border: '1px solid #999',
    position: 'relative',
    overflow: 'hidden',
  }}>
    <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        height: '3px',
        backgroundColor: hex,
        borderBottom: '1px solid #999'
    }}></div>
  </div>
);

const ColorCard: React.FC<ColorCardProps> = ({ color, isRadio, isSelected, onSelect }) => {
  const isCheckbox = !isRadio;

  return (
    <div
      style={{
        padding: '15px',
        border: '1px solid #ddd',
        borderRadius: '6px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        boxShadow: isSelected ? '0 0 0 2px #00A854' : 'none', // Green shadow when selected
        transition: 'box-shadow 0.2s',
        backgroundColor: '#fff',
        height: '100px',
        justifyContent: 'center',
        position: 'relative',
      }}
      onClick={() => onSelect(color.name)}
    >
      <input
        type={isRadio ? 'radio' : 'checkbox'}
        name={isRadio ? 'colorRadio' : 'colorCheckbox'}
        checked={isSelected}
        readOnly
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
        }}
      />
      <ColorIcon hex={color.hex} />
      <span style={{ marginTop: '10px', fontSize: '14px', fontWeight: '500' }}>{color.name}</span>
    </div>
  );
};

const TubeColorSelector: React.FC<TubeColorSelectorProps> = ({ selectedColors, onColorChange }) => {
  const handleSelect = (colorName: string, isRadio: boolean) => {
    if (isRadio) {
      onColorChange(selectedColors.includes(colorName) ? [] : [colorName]);
    } else {
      if (selectedColors.includes(colorName)) {
        onColorChange(selectedColors.filter(name => name !== colorName));
      } else {
        onColorChange([...selectedColors, colorName]);
      }
    }
  };

  const clearSelection = () => onColorChange([]);

  // Split into radio-style (first row) and checkbox-style (second row) as per images
  const radioColors = tubeColors.slice(0, 8); // Red to Dark Blue for top row
  const checkboxColors = tubeColors; // All colors for bottom row

  return (
    <div style={{ marginBottom: '30px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>Sample Tube Colors</h3>
        <button
          type="button"
          onClick={clearSelection}
          style={{
            backgroundColor: 'transparent',
            color: '#3498DB', // Blue clear selection text
            border: 'none',
            padding: '5px 10px',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          Clear Selection
        </button>
      </div>

      {/* --- Radio-style selection (Top row of image 2) --- */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '20px' }}>
        {radioColors.map(color => (
          <ColorCard
            key={`radio-${color.name}`}
            color={color}
            isRadio={true} // True to mimic the radio button placement/style
            isSelected={selectedColors.includes(color.name)}
            onSelect={(name) => handleSelect(name, true)}
          />
        ))}
        {/* Manually add Block and Slide to the second radio row */}
        {tubeColors.slice(8).map(color => (
            <ColorCard
                key={`radio-${color.name}`}
                color={color}
                isRadio={true}
                isSelected={selectedColors.includes(color.name)}
                onSelect={(name) => handleSelect(name, true)}
            />
        ))}
      </div>

      {/* --- Checkbox-style selection (Bottom row of image 2) --- */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {checkboxColors.map((color: ColorOption) => (
          <div key={`checkbox-${color.name}`} style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              id={`color-checkbox-${color.name}`}
              name="colorCheckboxGroup"
              checked={selectedColors.includes(color.name)}
              onChange={() => handleSelect(color.name, false)}
              style={{ marginRight: '10px', transform: 'scale(1.2)' }}
            />
            <label htmlFor={`color-checkbox-${color.name}`}>{color.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TubeColorSelector;










// import React from 'react';
// import { ColorOption } from '../types';
// import { tubeColors } from '../data/mockData';

// interface TubeColorSelectorProps {
//   selectedColors: string[];
//   onColorChange: (colors: string[]) => void;
// }

// interface ColorCardProps {
//   color: ColorOption;
//   isRadio: boolean;
//   isSelected: boolean;
//   onSelect: (name: string) => void;
// }

// const ColorIcon: React.FC<{ hex: string }> = ({ hex }) => (
//   <div style={{
//     width: '15px',
//     height: '25px',
//     borderRadius: '0 0 7px 7px', // Tube-like shape for the color fill
//     backgroundColor: hex,
//     border: '1px solid #999',
//     position: 'relative',
//     overflow: 'hidden',
//   }}>
//     <div style={{
//         position: 'absolute',
//         top: '0',
//         left: '0',
//         right: '0',
//         height: '3px',
//         backgroundColor: hex,
//         borderBottom: '1px solid #999'
//     }}></div>
//   </div>
// );

// const ColorCard: React.FC<ColorCardProps> = ({ color, isRadio, isSelected, onSelect }) => {
//   const isCheckbox = !isRadio;

//   return (
//     <div
//       style={{
//         padding: '15px',
//         border: '1px solid #ddd',
//         borderRadius: '6px',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         cursor: 'pointer',
//         boxShadow: isSelected ? '0 0 0 2px #00A854' : 'none', // Green shadow when selected
//         transition: 'box-shadow 0.2s',
//         backgroundColor: '#fff',
//         height: '100px',
//         justifyContent: 'center',
//         position: 'relative',
//       }}
//       onClick={() => onSelect(color.name)}
//     >
//       <input
//         type={isRadio ? 'radio' : 'checkbox'}
//         name={isRadio ? 'colorRadio' : 'colorCheckbox'}
//         checked={isSelected}
//         readOnly
//         style={{
//           position: 'absolute',
//           top: '10px',
//           left: '10px',
//         }}
//       />
//       <ColorIcon hex={color.hex} />
//       <span style={{ marginTop: '10px', fontSize: '14px', fontWeight: '500' }}>{color.name}</span>
//     </div>
//   );
// };

// const TubeColorSelector: React.FC<TubeColorSelectorProps> = ({ selectedColors, onColorChange }) => {
//   const handleSelect = (colorName: string, isRadio: boolean) => {
//     if (isRadio) {
//       onColorChange(selectedColors.includes(colorName) ? [] : [colorName]);
//     } else {
//       if (selectedColors.includes(colorName)) {
//         onColorChange(selectedColors.filter(name => name !== colorName));
//       } else {
//         onColorChange([...selectedColors, colorName]);
//       }
//     }
//   };

//   const clearSelection = () => onColorChange([]);

//   // Split into radio-style (first row) and checkbox-style (second row) as per images
//   const radioColors: ColorOption[] = tubeColors.slice(0, 8); // Red to Dark Blue for top row
//   const checkboxColors: ColorOption[] = tubeColors; // All colors for bottom row

//   return (
//     <div style={{ marginBottom: '30px' }}>
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
//         <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>Sample Tube Colors</h3>
//         <button
//           type="button"
//           onClick={clearSelection}
//           style={{
//             backgroundColor: 'transparent',
//             color: '#3498DB', // Blue clear selection text
//             border: 'none',
//             padding: '5px 10px',
//             cursor: 'pointer',
//             fontSize: '14px',
//           }}
//         >
//           Clear Selection
//         </button>
//       </div>

//       {/* --- Radio-style selection (Top row of image 2) --- */}
//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '20px' }}>
//   {radioColors.map(color => (
//           <ColorCard
//             key={`radio-${color.name}`}
//             color={color}
//             isRadio={true} // True to mimic the radio button placement/style
//             isSelected={selectedColors.includes(color.name)}
//             onSelect={(name) => handleSelect(name, true)}
//           />
//         ))}
//         {/* Manually add Block and Slide to the second radio row */}
//   {tubeColors.slice(8).map(color => (
//             <ColorCard
//                 key={`radio-${color.name}`}
//                 color={color}
//                 isRadio={true}
//                 isSelected={selectedColors.includes(color.name)}
//                 onSelect={(name) => handleSelect(name, true)}
//             />
//         ))}
//       </div>

//       {/* --- Checkbox-style selection (Bottom row of image 2) --- */}
//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
//   {checkboxColors.map(color => (
//           <div key={`checkbox-${color.name}`} style={{ display: 'flex', alignItems: 'center' }}>
//             <input
//               type="checkbox"
//               id={`color-checkbox-${color.name}`}
//               name="colorCheckboxGroup"
//               checked={selectedColors.includes(color.name)}
//               onChange={() => handleSelect(color.name, false)}
//               style={{ marginRight: '10px', transform: 'scale(1.2)' }}
//             />
//             <label htmlFor={`color-checkbox-${color.name}`}>{color.name}</label>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TubeColorSelector;