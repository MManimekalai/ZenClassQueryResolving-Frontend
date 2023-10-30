import axios from 'axios';
import API_BASE_URL from '../auth/config';

// Function to fetch student dashboard data
export async function fetchStudentDashboardData() {
    try {
      const response = await axios.get(`${API_BASE_URL}/student/dashboard`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the JWT token from local storage
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching student dashboard data:', error);
      throw error;
    }
  }

// Function to create a new ticket
export async function createNewTicket(ticketData) {
    try {
      const response = await axios.post(`${API_BASE_URL}/student/create-ticket`, ticketData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the JWT token from local storage
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error creating a new ticket:', error);
      throw error;
    }
  }

  // Function to fetch details of a specific ticket
export async function fetchTicketDetails(ticketNumber) {
    try {
      const response = await axios.get(`${API_BASE_URL}/student/tickets/${ticketNumber}`, {
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