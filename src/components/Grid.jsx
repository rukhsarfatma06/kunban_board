import React from 'react';
import '../styles/grid.css';
import Column from './Column';

function Grid({ gridData, grouping, userIdToData }) {
  return (
    <div className="grid">
      {Object.keys(gridData).map(key => (
        <Column key={key} title={key} tickets={gridData[key]} userIdToData={userIdToData} />
      ))}
    </div>
  );
}

export default Grid;
