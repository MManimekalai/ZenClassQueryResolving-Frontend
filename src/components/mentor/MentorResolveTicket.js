import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import axios from 'axios'; // Import axios for making POST requests
import API_BASE_URL from '../auth/config';

function MentorResolveTicket() {
  const params = useParams();
  const ticketNumberAsNumber = parseInt(params.ticketNumber);
  const [solution, setSolution] = useState('');
  const navigate = useNavigate();
   

  const handleResolve = async () => {
    // console.log(solution, ticketNumberAsNumber);
    try {
            const response = await axios.put(`${API_BASE_URL}/mentor/resolve-ticket/${ticketNumberAsNumber}`, { solution:  solution}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the JWT token from local storage
        },
      });
      // console.log(response);
      
      alert(response.data.message)
    
      if (response && response.data.message === 'Ticket resolved successfully') {
       
        navigate('/mentor/dashboard');
      } else {
        console.error('Error resolving the ticket:', response);
        // Handle error scenarios here
      }
    } catch (error) {
      console.error('Error resolving the ticket:', error);
      // Handle network or other errors here
    }
  };

 




  return (
    <div id="wrapper" className="d-flex">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div id="content" className="container-fluid">
          <div className="resolve-ticket-container">
            <h1>Resolve Ticket</h1>
            <label htmlFor="solution">Solution:</label>
            <textarea
              id="solution"
              className="solution-textarea"
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
            ></textarea>
            <button className="d-none d-sm-inline-block btn btn-bg btn-success shadow-sm" onClick={handleResolve}>Resolve</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentorResolveTicket;
