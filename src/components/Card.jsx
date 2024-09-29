import React from 'react';
import '../styles/card.css';
import UserIcon from './UserIcon';
import { ReactComponent as DoneIcon } from '../assets/icons/Done.svg';
import { ReactComponent as InProgressIcon } from '../assets/icons/in-progress.svg';
import { ReactComponent as TodoIcon } from '../assets/icons/To-do.svg';
import { ReactComponent as HighPriorityIcon } from '../assets/icons/Img - High Priority.svg';
import { ReactComponent as MediumPriorityIcon } from '../assets/icons/Img - Medium Priority.svg';
import { ReactComponent as LowPriorityIcon } from '../assets/icons/Img - Low Priority.svg';
import { ReactComponent as UrgentPriorityIcon } from '../assets/icons/SVG - Urgent Priority colour.svg';
import { ReactComponent as NoPriorityIcon } from '../assets/icons/No-priority.svg';
import { ReactComponent as ThreeDotMenuIcon } from '../assets/icons/3 dot menu.svg';

const statusIcons = {
  'done': <DoneIcon className="status-icon" />,
  'in progress': <InProgressIcon className="status-icon" />,
  'todo': <TodoIcon className="status-icon" />,
  'backlog': <TodoIcon className="status-icon" /> // Adjust as necessary
};

const priorityIcons = {
  4: <HighPriorityIcon className="priority-icon" />,
  3: <MediumPriorityIcon className="priority-icon" />,
  2: <LowPriorityIcon className="priority-icon" />,
  1: <UrgentPriorityIcon className="priority-icon" />,
  0: <NoPriorityIcon className="priority-icon" />
};

function Card({ ticket, userData }) {
  const priority = ticket.priority >= 0 ? ticket.priority : 0; // Default to 0 if priority is invalid
  const status = ticket.status.toLowerCase() || 'todo';
  
  const statusIcon = statusIcons[status] || null;
  const priorityIcon = priorityIcons[priority] || null;

  return (
    <div className="card-container">
      <div className="ticket-header">
        <h3 className="ticket-title">{ticket.title}</h3>
        <ThreeDotMenuIcon className="three-dot-menu" />
      </div>
      <div className="ticket-info">
        <UserIcon name={userData[ticket.userId]?.name || 'Unknown'} available={userData[ticket.userId]?.available} />
        <div className="status-priority-icons">
          {statusIcon && <div className="status-icon-container">{statusIcon}</div>}
          {priorityIcon && <div className="priority-icon-container">{priorityIcon}</div>}
        </div>
      </div>
      <span className="ticket-status">{ticket.status}</span>
    </div>
  );
}

export default Card;
