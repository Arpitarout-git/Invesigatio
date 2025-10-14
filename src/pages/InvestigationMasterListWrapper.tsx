import React from 'react';
import { useNavigate } from 'react-router-dom';
import InvestigationMasterList from './InvestigationMasterList'; // adjust path if needed

const InvestigationMasterListWrapper: React.FC = () => {
  const navigate = useNavigate();

  const handleAddNew = () => {
    navigate('/investigation-master'); // Navigate to parent form
  };

  return <InvestigationMasterList onAddNew={handleAddNew} />;
};

export default InvestigationMasterListWrapper;