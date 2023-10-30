import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAdminTicketByNumber } from "../APIcalls/admin"; // Import your API function for fetching ticket details
import Sidebar from './AdminSidebar';
import Navbar from "./Navbar";
import './admin.css';
import TicketCard from "./TicketCard";

function TicketInfo() {
  const { ticketNumber } = useParams();
  const [tickets, setTickets] = useState(null);

  useEffect(() => {
    // Fetch ticket details based on the ticket number
    fetchAdminTicketByNumber(ticketNumber)
      .then((data) => {
        // console.log(data.tickets)
        if (data && data.tickets) {
          setTickets(data.tickets);
        }
      })
      .catch((error) => {
        console.error("Error fetching ticket details:", error);
      });
  }, [ticketNumber]);

  if (!tickets) {
    return <div>Loading...</div>;
  }

  return (
    <div id="wrapper" className="d-flex">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
      <div id="content" className="container-fluid">          
      <div className='container-fluid'>              
      <h1 className="h3 mb-4 text-gray-800" style={{ textAlign: 'center' }}>Ticket Details</h1>
      <TicketCard ticket={tickets} />    
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketInfo;
