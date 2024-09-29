import React, { useState } from 'react';
import '../styles/header.css';
import icon from '../assets/icons/Display.svg';

function Header({ grouping, setGrouping, ordering, setOrdering }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleGroupingChange = (e) => {
    setGrouping(e.target.value);
    setDropdownOpen(false); // Close dropdown after selection
  };

  const handleOrderingChange = (e) => {
    setOrdering(e.target.value);
    setDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="header-container">
      <div className="dropdown">
        <button className="dropbtn" onClick={toggleDropdown}>
          <img src={icon} alt="Display Icon" /> Display
        </button>
        <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
          <div className="dropdown-item">
            <div className="dropdown-container">
              <span>Grouping</span>
              <select value={grouping} onChange={handleGroupingChange}>
                <option value="status">Status</option>
                <option value="user">User</option>
              </select>
            </div>
          </div>
          <div className="dropdown-item">
            <div className="dropdown-container">
              <span>Ordering</span>
              <select value={ordering} onChange={handleOrderingChange}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
