import axios from 'axios';
import API_BASE_URL from '../auth/config';

// Function to fetch admin dashboard data
export async function fetchAdminDashboardData() {
    try {
      const response = await axios.get(`${API_BASE_URL}/admin/dashboard`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the JWT token from local storage
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching admin dashboard data:', error);
      throw error;
    }
  }

// Function to fetch all tickets
  export async function fetchAdminTickets() {
    try {
      const response = await axios.get(`${API_BASE_URL}/admin/view-tickets`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the JWT token from local storage
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching admin tickets:', error);
      throw error;
    }
  }

  // Function to create a new user
  export async function createAdminUser(userData) {
    try {
      const response = await axios.post(`${API_BASE_URL}/admin/create-user`, userData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the JWT token from local storage
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error creating admin user:', error);
      throw error;
    }
  }

// Function to fetch all users
  export async function fetchAdminUsers() {
    try {
      const response = await axios.get(`${API_BASE_URL}/admin/view-user`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the JWT token from local storage
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching admin users:', error);
      throw error;
    }
  }
 // Function to assign a ticket to a mentor
  export async function assignAdminTicket(ticketNumber, mentorName) {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/admin/assign-ticket/${ticketNumber}`,
        { userName: mentorName }, // Include the mentor's username in the request body
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the JWT token from local storage
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error assigning ticket:', error);
      throw error;
    }
  }

// Fetch a specific admin ticket by its number
export async function fetchAdminTicketByNumber(ticketNumber) {
  try {
    const response = await axios.get(`${API_BASE_URL}/admin/view-tickets/${ticketNumber}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data; // Assuming the ticket is in the 'ticket' property of the response
  } catch (error) {
    console.error('Error fetching admin ticket:', error);
    throw error;
  }
}
  

