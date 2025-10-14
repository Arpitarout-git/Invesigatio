import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#fff',
      borderBottom: '1px solid #eee',
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ fontSize: '24px', fontWeight: 'bold', color: 'red', marginRight: '10px' }}>ASR</span>
        <span style={{ fontSize: '18px' }}>Hospitals</span>
      </div>
      <div style={{ flexGrow: 1, margin: '0 50px' }}>
        <input
          type="search"
          placeholder="Search..."
          style={{
            width: '300px',
            padding: '8px 15px',
            border: '1px solid #ddd',
            borderRadius: '4px',
          }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <i className="fas fa-bell" style={{ fontSize: '20px', color: '#666', marginRight: '20px' }}></i>
        <i className="fas fa-user-circle" style={{ fontSize: '24px', color: '#666' }}></i>
      </div>
    </header>
  );
};

export default Header;




// import React from 'react';

// const Header: React.FC = () => {
//   return (
//     <header style={{
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       padding: '10px 20px',
//       backgroundColor: '#fff',
//       borderBottom: '1px solid #eee',
//     }}>
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         <span style={{ fontSize: '24px', fontWeight: 'bold', color: 'red', marginRight: '10px' }}>ASR</span>
//         <span style={{ fontSize: '18px' }}>Hospitals</span>
//       </div>
//       <div style={{ flexGrow: 1, margin: '0 50px' }}>
//         <input
//           type="search"
//           placeholder="Search..."
//           style={{
//             width: '300px',
//             padding: '8px 15px',
//             border: '1px solid #ddd',
//             borderRadius: '4px',
//           }}
//         />
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         <i className="fas fa-bell" style={{ fontSize: '20px', color: '#666', marginRight: '20px' }}></i>
//         <i className="fas fa-user-circle" style={{ fontSize: '24px', color: '#666' }}></i>
//       </div>
//     </header>
//   );
// };

// export default Header;