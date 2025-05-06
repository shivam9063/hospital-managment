import React from 'react';
import './Navbar.css';  

const ButtonGroup = () => {
  const buttons = [
    { label: 'SUPERADMIN LOGIN', color: '#edbb99 ', icon: '👤', link: '/login' },
    { label: 'ADMIN LOGIN', color: '#bfc9ca', icon: '➕', link: '/login' },
    { label: 'DOCTOR LOGIN', color: '#FFC300', icon: '🩺', link: '/login' },
    { label: 'ACCOUNTANT LOGIN', color: '#478778', icon: '💲', link: '/login' },
    { label: 'RECEPTIONIST LOGIN', color: '#FF5733', icon: '💼', link: '/login' },
    { label: 'PHARMACIST LOGIN', color: '#8B0000', icon: '💊', link: '/login' },
    { label: 'PATHOLOGIST LOGIN', color: '#F2D2BD', icon: '🔬', link: '/login' },
    { label: 'RADIOLOGIST LOGIN', color: '#93C572', icon: '📻', link: '/login' },
    { label: 'PATIENT LOGIN', color: '#71797E', icon: '🛌', link: '/patlogin' },
    { label: 'FRONT SITE', color: '#355E3B', icon: '🏠', link: '/Menu' },
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
