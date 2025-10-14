// routes.tsx
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import InvestigationMasterList from '../pages/InvestigationMasterList';
import AddInvestigationForm from '../pages/AddInvestigationForm';

const AppRoutes: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        path="/investigation-master"
        element={<InvestigationMasterList onAddNew={() => navigate('/investigation-master/add')} />}
      />
      <Route
        path="/investigation-master/add"
        element={<AddInvestigationForm onCancel={() => navigate('/investigation-master')} />}
      />
    </Routes>
  );
};

export default AppRoutes;
