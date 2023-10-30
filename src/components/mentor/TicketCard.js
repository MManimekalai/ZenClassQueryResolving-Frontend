import React from 'react';

function TicketCard({ ticket }) {
  return (
    <div className="card">
      <div className="card-header">
        Ticket #{ticket.ticketNumber}
      </div>
      <div className="card-body">
        <h5 className="card-title">{ticket.title}</h5>
        <p className="card-text">
          <strong>Student Name:</strong> {ticket.studentName}
        </p>
        <p className="card-text">
          <strong>Category:</strong> {ticket.category}
        </p>
        <p className="card-text">
          <strong>SubCategory:</strong> {ticket.subcategory}
        </p>
        <p className="card-text">
          <strong>Query Title:</strong> {ticket.queryTitle}
        </p>
        <p className="card-text">
          <strong>Description:</strong> {ticket.queryDescription}
        </p>
        <p className="card-text">
          <strong>Preferred Timing:</strong> {ticket.availableTime}
        </p>
        <p className="card-text">
          <strong>Created at:</strong> {ticket.createdAt}
        </p>
        <p className="card-text">
          <strong>Assigned To:</strong> {ticket.assignedTo}
        </p>
        <p className="card-text">
          <strong>Solution:</strong> {ticket.solution}
        </p>
        <p className="card-text">
          <strong>Status:</strong> {ticket.status}
        </p>
      </div>
    </div>
  );
}

export default TicketCard;
