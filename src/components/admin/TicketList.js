import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { fetchAdminTickets } from "../APIcalls/admin"; // Import your API function
import Sidebar from './AdminSidebar';
import Navbar from "./Navbar";
import Table from 'react-bootstrap/Table';

function TicketList() {
  const [ticketData, setTicketData] = useState([]);
  const hasFetchedData = useRef(false);

  useEffect(() => {
    if (!hasFetchedData.current) {
      fetchAdminTickets()
        .then((data) => {
          if (data && data.tickets) {
            // Filter out closed tickets
            const openTickets = data.tickets.filter((ticket) => ticket.status !== 'closed');
            setTicketData(openTickets);
          }
        })
        .catch((error) => {
          console.error('Error fetching admin tickets:', error);
        });

      hasFetchedData.current = true;
    }
  }, []);

  return (
    <div id="wrapper" className="d-flex">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div id="content" className="container-fluid">
          <h1 className="h3 mb-4 text-gray-800" style={{ textAlign: 'center' }}>Ticket Queue (Open Tickets)</h1>
          <div className='container-fluid'>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Ticket Number</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Student Name</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              {ticketData.length === 0 ? ( // Check if there are no tickets assigned
                  <tr>
                    <td colSpan="6">No tickets</td>
                  </tr>
                ) : (                
                ticketData.map((ticket) => (
                  <tr key={ticket.ticketNumber}>
                    <td>{ticket.ticketNumber}</td>
                    <td>{ticket.queryTitle}</td>
                    <td>{ticket.category}</td>
                    <td>{ticket.studentName}</td>
                    <td>{ticket.status}</td>
                    <td>
                      <Link to={`/admin/ticket-info/${ticket.ticketNumber}`}>View Ticket</Link>
                    </td>
                  </tr>
                ))
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketList;
