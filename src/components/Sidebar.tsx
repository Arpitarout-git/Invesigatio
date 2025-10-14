import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SidebarItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
  hasSubMenu?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  isActive = false,
  hasSubMenu = false,
  onClick
}) => (
  <div
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyPress={(e) => {
      if (e.key === 'Enter' || e.key === ' ') onClick?.();
    }}
    style={{
      padding: '10px 20px',
      backgroundColor: isActive ? '#e6f7ff' : 'transparent',
      color: isActive ? '#007acc' : '#666',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontWeight: isActive ? '600' : 'normal',
      outline: 'none',
      transition: 'background-color 0.3s ease'
    }}
  >
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ marginRight: 10 }}>
        <i className={`fas fa-${icon}`} />
      </span>
      {label}
    </span>
    {hasSubMenu && (
      <span style={{
        transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)',
        transition: 'transform 0.2s ease'
      }}>
        &gt;
      </span>
    )}
  </div>
);

const Sidebar: React.FC = () => {
  const [masterOpen, setMasterOpen] = useState(false);
  const navigate = useNavigate();

  const masterItems = [
    { label: 'Department Master', path: '/department-master' },
    { label: 'Unit Master', path: '/unit-master' },
    { label: 'Investigation Master', path: '/investigation-master' },
    { label: 'Instrument Master', path: '/instrument-master' },
    { label: 'Report Type Master', path: '/report-type-master' }
  ];

  const handleSubItemClick = (path: string) => {
    navigate(path);
  };

  return (
    <div style={{
      width: '250px',
      backgroundColor: '#fff',
      boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
      height: '100vh',
      paddingTop: '20px',
      overflowY: 'auto'
    }}>
      <div style={{ padding: '0 20px 20px 20px', textAlign: 'center' }}>
        <div style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#ccc',
          margin: '0 auto 10px auto',
        }} />
        <div style={{ fontWeight: 'bold' }}>Dr Reddy</div>
        <small style={{ color: '#666' }}>Doctor</small>
      </div>

      <div style={{
        padding: '10px 20px',
        fontWeight: 'bold',
        fontSize: '12px',
        color: '#999',
        borderTop: '1px solid #eee',
      }}>
        ADMIN PANEL
      </div>

      <SidebarItem icon="tachometer-alt" label="Dashboard" />
      <SidebarItem icon="check-circle" label="Doctor Approval" />
      <SidebarItem icon="user-md" label="Doctor Master" />

      <SidebarItem
        icon="cogs"
        label="Master"
        hasSubMenu={true}
        isActive={masterOpen}
        onClick={() => setMasterOpen(prev => !prev)}
      />

      {masterOpen && (
        <div style={{ paddingLeft: '20px' }}>
          {masterItems.map(item => (
            <div
              key={item.label}
              style={{
                padding: '8px 20px',
                color: '#555',
                cursor: 'pointer'
              }}
              onClick={() => handleSubItemClick(item.path)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;



// import React, { useState } from 'react';

// interface SidebarItemProps {
//   icon: string;
//   label: string;
//   isActive?: boolean;
//   hasSubMenu?: boolean;
//   onClick?: () => void;
// }

// const SidebarItem: React.FC<SidebarItemProps> = ({
//   icon,
//   label,
//   isActive = false,
//   hasSubMenu = false,
//   onClick
// }) => (
//   <div
//     role="button"
//     tabIndex={0}
//     onClick={onClick}
//     onKeyPress={(e) => {
//       if (e.key === 'Enter' || e.key === ' ') onClick?.();
//     }}
//     style={{
//       padding: '10px 20px',
//       backgroundColor: isActive ? '#e6f7ff' : 'transparent',
//       color: isActive ? '#007acc' : '#666',
//       cursor: 'pointer',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       fontWeight: isActive ? '600' : 'normal',
//       outline: 'none',
//       transition: 'background-color 0.3s ease'
//     }}
//   >
//     <span style={{ display: 'flex', alignItems: 'center' }}>
//       <i className={`fas fa-${icon}`} style={{ marginRight: '10' }}></i> 
//       {label}
//     </span>
//     {hasSubMenu && (
//       <span style={{
//         transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)',
//         transition: 'transform 0.2s ease'
//       }}>
//         &gt;
//       </span>
//     )}
//   </div>
// );

// const Sidebar: React.FC = () => {
//   const [masterOpen, setMasterOpen] = useState(false);

//   const masterItems = [
//     'Department Master',
//     'Unit Master',
//     'Investigation Master',
//     'Instrument Master',
//     'Report Type Master'
//   ];

//   return (
//     <div style={{
//       width: '250px',
//       backgroundColor: '#fff',
//       boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
//       height: '100vh',
//       paddingTop: '20px',
//       overflowY: 'auto'
//     }}>
//       {/* User Info */}
//       <div style={{ padding: '0 20px 20px 20px', textAlign: 'center' }}>
//         <div style={{
//           width: '50px',
//           height: '50px',
//           borderRadius: '50%',
//           backgroundColor: '#ccc',
//           margin: '0 auto 10px auto',
//         }}>
//           {/* Placeholder for user image */}
//         </div>
//         <div style={{ fontWeight: 'bold' }}>Dr Reddy</div>
//         <small style={{ color: '#666' }}>Doctor</small>
//       </div>

//       {/* Section Label */}
//       <div style={{
//         padding: '10px 20px',
//         fontWeight: 'bold',
//         fontSize: '12px',
//         color: '#999',
//         borderTop: '1px solid #eee',
//       }}>
//         ADMIN PANEL
//       </div>

//       {/* Sidebar Items */}
//       <SidebarItem icon="tachometer-alt" label="Dashboard" />
//       <SidebarItem icon="check-circle" label="Doctor Approval" />
//       <SidebarItem icon="user-md" label="Doctor Master" />

//       {/* Master Dropdown */}
//       <SidebarItem
//         icon="cogs"
//         label="Master"
//         hasSubMenu={true}
//         isActive={masterOpen}
//         onClick={() => setMasterOpen(prev => !prev)}
//       />

//       {/* Submenu */}
//       {masterOpen && (
//         <div style={{
//           paddingLeft: '20px',
//           animation: 'fadeIn 0.3s ease-in-out'
//         }}>
//           {masterItems.map(item => (
//             <div
//               key={item}
//               style={{
//                 padding: '8px 20px',
//                 color: '#555',
//                 cursor: 'pointer',
//                 transition: 'background-color 0.2s ease'
//               }}
//               onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
//               onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;




