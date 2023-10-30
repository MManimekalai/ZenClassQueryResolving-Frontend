import React, { useState, useEffect, useRef } from 'react';
import { fetchAdminTickets } from '../APIcalls/admin';
import Card from './card';
import * as XLSX from 'xlsx';
import Table from 'react-bootstrap/Table';
import Sidebar from './AdminSidebar';
import './admin.css';
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [ticketData, setTicketData] = useState([]);
  const hasFetchedData = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!hasFetchedData.current) {
      fetchAdminTickets()
        .then((data) => {
          if (data && data.tickets) {
            setTicketData(data.tickets);
          }
        })
        .catch((error) => {
          console.error('Error fetching student dashboard data:', error);
        });

      hasFetchedData.current = true;
    }
  }, []);

  const generateExcelReport = (data) => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet 1');
    XLSX.writeFile(wb, 'report.xlsx');
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div id="wrapper" className="d-flex">
      <Sidebar />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Admin Dashboard</h1>
              <div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                  onClick={() => generateExcelReport(ticketData)}
                >
                  <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
                </a>
                <span style={{ marginRight: '1em' }}></span>
                 {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  className="d-none d-sm-inline-block btn btn-sm btn-danger shadow-sm"
                  onClick={handleLogout}
                >
                  <i className="fas fa-right-from-bracket fa-sm text-white-50"></i> Logout
                </a> 
              </div>
            </div>

            <div className="row">
              <Card />
            </div>

            <div className="container-fluid table-container">
              <Table striped bordered hover>
                <thead id='table-header'>
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Student Name</th>
                    <th scope="col">Ticket Number</th>
                    <th scope="col">Category</th>
                    <th scope="col">Query Title</th>
                    <th scope="col">Query Description</th>
                    <th scope="col">Contact Number</th>
                    <th scope="col">Batch</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Assigned To</th>
                    <th scope="col">Is Assigned</th>
                    <th scope="col">Is Resolved</th>
                    <th scope="col">Status</th>
                    <th scope="col">Solution</th>
                  </tr>
                </thead>
                <tbody>
                  {ticketData.map((ticket, index) => (
                    <tr key={ticket.ticketNumber}>
                      <th scope="row">{index + 1}</th>
                      <td>{ticket.studentName}</td>
                      <td>{ticket.ticketNumber}</td>
                      <td>{ticket.category}</td>
                      <td>{ticket.queryTitle}</td>
                      <td>{ticket.queryDescription}</td>
                      <td>{ticket.contactNumber}</td>
                      <td>{ticket.batch}</td>
                      <td>{ticket.createdAt}</td>
                      <td>{ticket.assignedTo}</td>
                      <td>{ticket.isAssigned ? 'Yes' : 'No'}</td>
                      <td>{ticket.isResolved ? 'Yes' : 'No'}</td>
                      <td>{ticket.status}</td>
                      <td>{ticket.solution}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
