import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import InvestigationMasterList from './pages/InvestigationMasterList';
import AddInvestigationForm from './pages/AddInvestigationForm';
import InvestigationMasterListWrapper from './pages/InvestigationMasterListWrapper';

const App: React.FC = () => {
  
  // Handler for adding a new investigation
  const handleAddNewInvestigation = () => {
    console.log('Add new investigation triggered');
    // You can add modal logic or navigation here
  };

  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route
              path="/investigation-master"
              element={<InvestigationMasterList onAddNew={handleAddNewInvestigation} />}
            />
          
            <Route path="/investigation-master" element={<InvestigationMasterListWrapper />} />
            <Route path="/investigation-master/list" element={<AddInvestigationForm/>} />
        

            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;








// import React, { useState } from 'react';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import InvestigationMasterList from './pages/InvestigationMasterList';
// import AddInvestigationForm from './pages/AddInvestigationForm'; 

// const App: React.FC = () => {
//   // Initial state: 'list' is the first page open
//   const [currentPage, setCurrentPage] = useState<'list' | 'add'>('list');

//   const handleAddNew = () => setCurrentPage('add');
//   const handleCancel = () => setCurrentPage('list'); 

//   const getBreadcrumb = () => {
//     const investigationText = currentPage === 'list' ? 'View Investigations' : 'Add Investigation';
    
//     return (
//       <div style={{ padding: '10px 20px', backgroundColor: '#fff', borderBottom: '1px solid #eee' }}>
//         <span style={{ color: '#aaa' }}>Home / Investigations / </span>
//         <span style={{ fontWeight: 'bold' }}>{investigationText}</span>
//       </div>
//     );
//   };

//   const getMainContent = () => {
//     if (currentPage === 'list') {
//       return <InvestigationMasterList onAddNew={handleAddNew} />;
//     }
//     return <AddInvestigationForm onCancel={handleCancel} />; 
//   };

//   return (
//     <div style={{ 
//         display: 'flex', 
//         flexDirection: 'column', 
//         height: '100vh', 
//         overflow: 'hidden' 
//     }}>
//       {/* 1. Header (Fixed at the top) */}
//       <Header />
      
//       {/* 2. Main Body (Sidebar + Content) */}
//       <div style={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        
//         {/* Sidebar (Fixed on the left) */}
//         <Sidebar />
        
//         {/* Main Content Area (Scrollable) */}
//         <main style={{ flexGrow: 1, overflowY: 'auto' }}>
//           {getBreadcrumb()}
//           {getMainContent()}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default App;





// // / import React from 'react';
// // import Header from './components/Header';
// // import Sidebar from './components/Sidebar';
// // import AddInvestigationForm from './pages/AddInvestigationForm';

// // // Assuming you have imported Font Awesome for the icons used in Sidebar/Header

// // const App: React.FC = () => {
// //   return (
// //     <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
// //       <Header />
// //       <div style={{ display: 'flex', flexGrow: 1 }}>
// //         <Sidebar />
// //         <main style={{ flexGrow: 1, overflowY: 'auto' }}>
// //           {/* Breadcrumbs for UI context */}
// //           <div style={{ padding: '10px 20px', backgroundColor: '#fff', borderBottom: '1px solid #eee' }}>
// //             <span style={{ color: '#aaa' }}>Home / Investigations / </span>
// //             <span style={{ fontWeight: 'bold' }}>Add Investigation</span>
// //           </div>
// //           <AddInvestigationForm />
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;