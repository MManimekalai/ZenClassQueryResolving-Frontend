import axios from 'axios';
import API_BASE_URL from '../auth/config';


// Function to fetch tickets assigned to the mentor
export async function fetchMentorDashboardData() {
    try {
      const response = await axios.get(`${API_BASE_URL}/mentor/dashboard`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the JWT token from local storage
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching mentor dashboard data:', error);
      throw error;
    }
  }

// Function to resolve a ticket
  export async function fetchMentorTickets() {
    try {
      const response = await axios.get(`${API_BASE_URL}/mentor/view-tickets`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the JWT token from local storage
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching mentor tickets:', error);
      throw error;
    }
  }

// Function to take and resolve a ticket
export async function takeAndResolveMentorTicket(ticketNumber, solution) {
  // console.log(solution, ticketNumber);
  
    try {
      const response = await axios.post(
        `${API_BASE_URL}/mentor/take-and-resolve-ticket/${ticketNumber}`,
        { solution },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the JWT token from local storage
          },
        }
      );
      // console.log(response);
      return response.data;
    } catch (error) {
      console.error('Error taking and resolving mentor ticket:', error);
      throw error;
    }
  }

// Function to fetch details of a particular ticket
export async function fetchTicketDetails(ticketNumber) {
    try {
      const response = await axios.get(`${API_BASE_URL}/mentor/view-ticket/${ticketNumber}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the JWT token from local storage
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching ticket details:', error);
      throw error;
    }
  }

  export async function fetchMentorAssignedTickets() {
    try {
      const response = await axios.get(`${API_BASE_URL}/mentor/assigned-tickets`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the JWT token from local storage
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching mentor assigned tickets:', error);
      throw error;
    }
  }

  // Function to resolve a ticket
  export async function resolveTicket(ticketNumber, solution) {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/mentor/resolve-ticket/${ticketNumber}`,solution,     
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the JWT token from local storage
        },
      });
  
      return response; // Return the response here
    } catch (error) {
      console.error('Error resolving the ticket:', error);
      throw error;
    }
  }
  
