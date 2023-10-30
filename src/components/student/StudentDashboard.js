import React, { useState, useEffect } from 'react';
import { fetchStudentDashboardData } from '../APIcalls/student';
import { Link } from "react-router-dom";
import './student.css';
import Sidebar from './studentSidebar';
import Navbar from './Navbar';

const StudentDashboard = () => {
  const [ticketList, setTicketList] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    fetchStudentDashboardData()
      .then((data) => {
        // console.log(data.studentTickets);
        if (data && data.studentTickets) {
          setTicketList(data.studentTickets);
        }
      })
      .catch((error) => {
        console.error('Error fetching student dashboard data:', error);
      });
  }, []);

  const handleTicketSelect = (ticket) => {
    setSelectedTicket(ticket);
  };

  return (
    <div id="wrapper" className="d-flex">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div id="content" className="container-fluid">
          <div className='container-fluid'>
            <Link to="/student/create-ticket">
              <button className="btn btn-primary"> <i className="fa-solid fa-plus"></i> Create Query</button>
            </Link>
            <div className="student-dashboard-container">
              <div className="ticket-list">
                {ticketList.length > 0 ? (
                  ticketList.map((ticket) => (
                    <div
                      key={ticket.ticketNumber}
                      className={`ticket-item ${selectedTicket === ticket ? 'selected' : ''}`}
                      onClick={() => handleTicketSelect(ticket)}
                    >
                      <div className="ticket-header">
                        <div>
                          {ticket.ticketNumber} - {ticket.queryTitle}
                        </div>
                        <div className={`status ${ticket.status.toLowerCase()}`}>
                          {ticket.status}
                        </div>
                      </div>
                      <div className="ticket-subtext">
                        Created at: {new Date(ticket.createdAt).toLocaleString()}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-tickets">
                  <p className="placeholder">No tickets available</p>
                </div>
                )}
              </div>
              <div className="ticket-details">
                {selectedTicket ? (
                  <div>
                    <div className="ticket-info">
                      <div className="ticket-header">
                        <div className="center">Recent query</div>
                      </div>
                      <div className='ticket-middle'>
                        <div className="title">{selectedTicket.ticketNumber} - {selectedTicket.queryTitle}</div>
                      </div>
                      <div className="ticket-body">
                        <div className="align-start">
                          Created at:
                          <p>{new Date(selectedTicket.createdAt).toLocaleString()}</p>
                        </div>
                        <div className="align-end">
                          Assigned to:
                          <p>{selectedTicket.assignedTo}</p>
                        </div>
                      </div>
                    </div>
                    <div className="description">
                      Description:
                      <p>{selectedTicket.queryDescription}</p>
                    </div>
                    <div className="description">
                      Solution from Mentor:
                      <p>{selectedTicket.solution}</p>
                    </div>
                    <div className={`status ${selectedTicket.status.toLowerCase()} status`}>
                          {selectedTicket.status}
                        </div>
                  </div>
                ) : (
                  <div className="no-tickets">
                  <p className="placeholder">Select a ticket to view details</p>
                </div>                  
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
