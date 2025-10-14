import React from 'react';

const mockInvestigations = [
  { id: 1, testName: 'Total Protein 323 45', shortCode: '12343', department: 'Microbiology', status: 'Active' },
  { id: 2, testName: 'Total Protein', shortCode: '523', department: 'Biochemistry', status: 'Active' },
  { id: 3, testName: 'Test name 1004', shortCode: '3233', department: 'Electrophysiology', status: 'Active' },
  { id: 4, testName: 'Test 1006', shortCode: '1006', department: 'Bio-Chemistry', status: 'Active' },
  { id: 5, testName: 'Complete Blood Examination', shortCode: '41', department: 'Hematology', status: 'Active' },
  { id: 6, testName: 'Test name 8888', shortCode: '523', department: 'Cardiology 1', status: 'Active' },
  { id: 7, testName: 'Test 7', shortCode: '1010', department: 'Biochemistry', status: 'Active' },
  { id: 8, testName: 'Test 10', shortCode: '123', department: 'Microbiology', status: 'Active' },
];

interface InvestigationMasterListProps {

  onAddNew: () => void;
}

const InvestigationMasterList: React.FC<InvestigationMasterListProps> = ({ onAddNew }) => {
  return (
    <div style={{ padding: '20px', flexGrow: 1, backgroundColor: '#f9f9f9' }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      }}>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0, color: '#333' }}>
            Investigation List
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={onAddNew}
              style={{
                padding: '8px 15px',
                backgroundColor: '#00A854',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px',
              }}
            >
              <i className="fas fa-plus" style={{ marginRight: '8px' }}></i>
              Add Investigation
            </button>
            <div style={{ position: 'relative' }}>
              <input
                type="search"
                placeholder="Search investigation..."
                style={{
                  padding: '8px 35px 8px 10px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  width: '200px',
                }}
              />
              <i className="fas fa-search" style={{ position: 'absolute', right: '10px', top: '10px', color: '#999' }}></i>
            </div>
          </div>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0', borderBottom: '1px solid #ddd' }}>
              <th style={tableHeaderStyle}>ID</th>
              <th style={tableHeaderStyle}>Test Name</th>
              <th style={tableHeaderStyle}>Short Code</th>
              <th style={tableHeaderStyle}>Department</th>
              <th style={tableHeaderStyle}>Status</th>
              <th style={tableHeaderStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockInvestigations.map((inv) => (
              <tr key={inv.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={tableCellStyle}>{inv.id}</td>
                <td style={tableCellStyle}>{inv.testName}</td>
                <td style={tableCellStyle}>{inv.shortCode}</td>
                <td style={tableCellStyle}>{inv.department}</td>
                <td style={tableCellStyle}>
                  <span style={{
                    padding: '3px 8px',
                    borderRadius: '10px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    backgroundColor: inv.status === 'Active' ? '#E8F5E9' : '#FFEBEE',
                    color: inv.status === 'Active' ? '#4CAF50' : '#F44336',
                  }}>
                    {inv.status}
                  </span>
                </td>
                <td style={tableCellStyle}>
                  <button style={actionButtonStyle('#2ECC71')} title="Update">Update</button>
                  <button style={actionButtonStyle('#3498DB')} title="View">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginTop: '20px', 
            fontSize: '14px' 
        }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>Items per page:</span>
                <select style={{ marginLeft: '8px', padding: '5px' }}>
                    <option>10</option>
                    <option>25</option>
                </select>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <button style={paginationButtonStyle}>&lt;</button>
                <button style={{ ...paginationButtonStyle, backgroundColor: '#3498DB', color: '#fff' }}>1</button>
                <button style={paginationButtonStyle}>2</button>
                <button style={paginationButtonStyle}>&gt;</button>
            </div>
        </div>
      </div>
    </div>
  );
};

const tableHeaderStyle: React.CSSProperties = { padding: '12px', textAlign: 'left', fontWeight: '500', color: '#666' };
const tableCellStyle: React.CSSProperties = { padding: '12px', textAlign: 'left', color: '#333' };
const actionButtonStyle = (bgColor: string): React.CSSProperties => ({
    padding: '4px 10px',
    marginRight: '5px',
    backgroundColor: bgColor,
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '12px',
});

const paginationButtonStyle: React.CSSProperties = {
    padding: '5px 10px',
    margin: '0 2px',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    cursor: 'pointer',
    borderRadius: '4px',
    fontSize: '14px'
};

export default InvestigationMasterList;