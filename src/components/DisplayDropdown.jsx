import React from 'react';
import '../styles/displayDropdown.css';
import { ReactComponent as DisplayIcon } from '../assets/icons/Display.svg';

function DisplayDropdown({ grouping, setGrouping, ordering, setOrdering }) {
  return (
    <div className="dropdown-container">
      <DisplayIcon />
      <select value={grouping} onChange={e => setGrouping(e.target.value)}>
        <option value="status">Group by Status</option>
        <option value="priority">Group by Priority</option>
        <option value="user">Group by User</option>
      </select>
      <select value={ordering} onChange={e => setOrdering(e.target.value)}>
        <option value="priority">Order by Priority</option>
        <option value="title">Order by Title</option>
      </select>
    </div>
  );
}

export default DisplayDropdown;
