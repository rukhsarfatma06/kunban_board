import React from 'react';
import '../styles/usericon.css';

function UserIcon({ name, available }) {
  const initials = React.useMemo(() => {
    return name.split(" ").map(item => item[0]).join("");
  }, [name]);

  return (
    <div className='usericon-container'>
      <div className='usericon-text'>{initials}</div>
      <div className={`user-status ${available ? "available" : ""}`}></div>
    </div>
  );
}

export default UserIcon;
