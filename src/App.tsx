import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import InvestigationMasterList from './pages/InvestigationMasterList';
import AddInvestigationForm from './pages/AddInvestigationForm';

// Inner component that is rendered inside <BrowserRouter> so hooks work
const AppRoutes: React.FC = () => {
  const navigate = useNavigate();
  const handleAddNewInvestigation = () => navigate('/investigation-master/add');

  return (
    <Routes>
      <Route
        path="/investigation-master"
        element={<InvestigationMasterList onAddNew={handleAddNewInvestigation} />}
      />
      <Route
        path="/investigation-master/add"
        element={<AddInvestigationForm onCancel={() => navigate('/investigation-master')} />}
      />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;