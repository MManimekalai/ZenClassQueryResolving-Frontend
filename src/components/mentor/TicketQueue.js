import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { fetchMentorTickets } from "../APIcalls/mentor";
import Sidebar from './Sidebar';
import Navbar from "./Navbar";
import Table from 'react-bootstrap/Table';

function TicketQueue() {
  const [ticketData, setTicketData] = useState([]);
  const hasFetchedData = useRef(false);

  useEffect(() => {
    if (!hasFetchedData.current) {
      fetchMentorTickets()
        .then((data) => {
          if (data && data.tickets) {
            setTicketData(data.tickets);
          }
        })
        .catch((error) => {
          console.error('Error fetching mentor tickets:', error);
        });

      hasFetchedData.current = true;
    }
  }, []);

  // Filter the tickets
  const filteredTickets = ticketData.filter((ticket) => ticket.status?.toLowerCase() === "open");
  const filteredTicketsFinal = filteredTickets.filter((ticket) => ticket.isAssigned === false);

  // console.log(filteredTicketsFinal);

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
                  <th>Category</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Student Name</th>
                  <th>Contact Info</th>
                  <th>Available Time</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTicketsFinal.length === 0 ? ( // Check if there are no tickets assigned
                  <tr>
                    <td colSpan="9">No Open tickets</td>
                  </tr>
                ) : (
                  filteredTicketsFinal.map((ticket) => (
                    <tr key={ticket.ticketNumber}>
                      <td>{ticket.ticketNumber}</td>
                      <td>{ticket.category}</td>
                      <td>{ticket.queryTitle}</td>
                      <td>{ticket.queryDescription}</td>
                      <td>{ticket.studentName}</td>
                      <td>{ticket.contactNumber}</td>
                      <td>{ticket.availableTime}</td>
                      <td>{ticket.status}</td>
                      <td>
                        <Link to={`/mentor/resolve-ticket/${ticket.ticketNumber}`}>Resolve Ticket</Link>
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

export default TicketQueue;
