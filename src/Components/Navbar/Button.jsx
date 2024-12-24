import React from 'react';
import './Navbar.css';  

const ButtonGroup = () => {
  const buttons = [
    { label: 'SUPERADMIN LOGIN', color: '#edbb99 ', icon: '👤', link: '/superadmin' },
    { label: 'ADMIN LOGIN', color: '#bfc9ca', icon: '➕', link: '/admin' },
    { label: 'DOCTOR LOGIN', color: '#FFC300', icon: '🩺', link: '/doctor' },
    { label: 'ACCOUNTANT LOGIN', color: '#478778', icon: '💲', link: '/accountant' },
    { label: 'RECEPTIONIST LOGIN', color: '#FF5733', icon: '💼', link: '/receptionist' },
    { label: 'PHARMACIST LOGIN', color: '#8B0000', icon: '💊', link: '/pharmacist' },
    { label: 'PATHOLOGIST LOGIN', color: '#F2D2BD', icon: '🔬', link: '/pathologist' },
    { label: 'RADIOLOGIST LOGIN', color: '#93C572', icon: '📻', link: '/radiologist' },
    { label: 'PATIENT LOGIN', color: '#71797E', icon: '🛌', link: '/patient' },
    { label: 'FRONT SITE', color: '#355E3B', icon: '🏠', link: '/front' },
  ];

  return (
    <div className="button-group">
      {buttons.map((button, index) => (
        <a
          key={index}
          href={button.link}
          className="custom-button"
          style={{ backgroundColor: button.color }}
        >
          <span className="icon">{button.icon}</span>
          {button.label}
        </a>
      ))}
    </div>
  );
};

export default ButtonGroup;
