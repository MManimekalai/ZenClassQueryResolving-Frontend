import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { fetchMentorAssignedTickets } from "../APIcalls/mentor"; // Import your API function for assigned tickets
import Sidebar from './Sidebar';
import Navbar from "./Navbar";
import Table from 'react-bootstrap/Table';

function AssignedTickets() {
  const [ticketData, setTicketData] = useState([]);
  const hasFetchedData = useRef(false);

  useEffect(() => {
    if (!hasFetchedData.current) {
      fetchMentorAssignedTickets()
        .then((data) => {
          if (data && data.tickets) {
            setTicketData(data.tickets);
          }
        })
        .catch((error) => {
          console.error('Error fetching mentor assigned tickets:', error);
        });

      hasFetchedData.current = true;
    }
  }, []);

  const filteredTickets = ticketData.filter((ticket) => ticket.isAssigned === true );
  const filteredTicketsFinal = filteredTickets.filter((ticket) => ticket.isResolved === false );

  // console.log(filteredTicketsFinal);

  return (
    <div id="wrapper" className="d-flex">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div id="content" className="container-fluid">
          <h1 className="h3 mb-4 text-gray-800" style={{ textAlign: 'center' }}>Assigned Tickets</h1>
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
                    <td colSpan="9">No Assigned tickets</td>
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

export default AssignedTickets;
