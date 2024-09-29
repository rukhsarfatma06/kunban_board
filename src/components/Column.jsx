import React from 'react';
import '../styles/column.css';
import Card from './Card';

function Column({ title, tickets, userIdToData }) {
  return (
    <div className="column-container">
      <h2 className="column-title">{title}</h2>
      <div className="card-list">
        {tickets.map(ticket => (
          <Card key={ticket.id} ticket={ticket} userData={userIdToData} />
        ))}
      </div>
    </div>
  );
}

export default Column;
