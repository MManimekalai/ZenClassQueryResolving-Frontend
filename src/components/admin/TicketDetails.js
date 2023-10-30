// TicketDetails.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { assignAdminTicket } from "../APIcalls/admin"; // Import your API function

function TicketDetails() {
  const params = useParams();
  const [mentorName, setMentorName] = useState(""); // State to store selected mentor

  const handleAssignTicket = async () => {
    if (mentorName) {
      try {
        // Use the assignAdminTicket API function to assign the ticket
        const response = await assignAdminTicket(params.ticketNumber, mentorName);
        alert(response.message); // Display a success message
        // Navigate back to the ticket queue or perform any other action
      } catch (error) {
        alert(error.response.data.message); // Display an error message
      }
    }
  };

  return (
    <div>
      <h1>Ticket Details</h1>
      <div>
        <label htmlFor="mentorSelect">Assign to Mentor:</label>
        <select
          id="mentorSelect"
          value={mentorName}
          onChange={(e) => setMentorName(e.target.value)}
        >
          <option value="">Select Mentor</option>
          <option value="mentor1">Mentor 1</option>
          <option value="mentor2">Mentor 2</option>
          {/* Add more mentors here */}
        </select>
        <button onClick={handleAssignTicket}>Assign</button>
      </div>
    </div>
  );
}

export default TicketDetails;
