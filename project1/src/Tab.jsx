
import React from 'react';

const Tab = ({ label, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`tab-button ${isActive ? 'active' : ''}`}
    >
      {label}
    </button>
  );
};

export default Tab;
