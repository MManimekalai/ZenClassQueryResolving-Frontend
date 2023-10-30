import React, { useEffect, useState } from "react";
import Sidebar from './AdminSidebar';
import Navbar from "./Navbar";
import { fetchAdminUsers } from "../APIcalls/admin";
import './admin.css';
import Table from 'react-bootstrap/Table';

function AdminViewUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAdminUsers()
      .then((data) => {
        // console.log(data)
        if (data && data.users) {
          setUsers(data.users);
        }
      })
      .catch((error) => {
        console.error('Error fetching admin users:', error);
      });
  }, []);

  return (
    <div id="wrapper" className="d-flex">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div id="content" className="container-fluid">
        <h1 className="h3 mb-4 text-gray-800" style={{ textAlign: 'center' }}>Available Users</h1>
          <div className='container-fluid'>
          <Table striped bordered hover>
          <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Batch</th>
                  <th>Qualification</th>
                  <th>Year of Passing</th>
                  <th>Years of Experience</th>
                  <th>Notice Period</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.batch}</td>
                    <td>{user.qualification}</td>
                    <td>{user.yearOfPassing}</td>
                    <td>{user.yearsOfExperience}</td>
                    <td>{user.noticePeriod}</td>
                  </tr>
                ))}
              </tbody>
            
          </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminViewUser;
