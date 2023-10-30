import React, { useState, useEffect, useRef } from 'react';
import { fetchMentorDashboardData } from '../APIcalls/mentor'; // Assuming you have an API call for mentor dashboard data
import Card from './card';
import * as XLSX from 'xlsx';
import Table from 'react-bootstrap/Table';
import Sidebar from './Sidebar'; // Create a MentorSidebar component
import './mentor.css'; // Create a mentor-specific CSS file
import { useNavigate } from "react-router-dom";

function MentorDashboard() {
  const [mentorData, setMentorData] = useState([]);
  const hasFetchedData = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!hasFetchedData.current) {
      fetchMentorDashboardData()
        .then((data) => {
          if (data && data.tableData) {
            setMentorData(data.tableData);
          }
        })
        .catch((error) => {
          console.error('Error fetching mentor dashboard data:', error);
        });

      hasFetchedData.current = true;
    }
  }, []);

  // console.log(mentorData);

  const generateExcelReport = (data) => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet 1');
    XLSX.writeFile(wb, 'mentor_report.xlsx');
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
              <h1 className="h3 mb-0 text-gray-800">Mentor Dashboard</h1>
              <div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                  onClick={() => generateExcelReport(mentorData)}
                >
                  <i className="fas fa-right-from-bracket fa-sm text-white-50"></i> Generate Report
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
                  <th scope="col">Ticket Number</th>
                    <th scope="col">Category</th>
                    <th scope="col">Subcategory</th>
                    <th scope="col">Tags</th>
                    <th scope="col">Preferred Language</th>
                    <th scope="col">Query Title</th>
                    <th scope="col">Query Description</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Available Time</th>
                    <th scope="col">Student Name</th>
                    <th scope="col">Contact Number</th>
                    <th scope="col">Batch</th>
                    <th scope="col">Status</th>
                    <th scope="col">Solution</th>
                  </tr>
                </thead>
                <tbody>
                  {mentorData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.TicketNumber}</td>
                      <td>{item.Category}</td>
                      <td>{item.Subcategory}</td>
                      <td>{item.Tags}</td>
                      <td>{item.PreferredLanguage}</td>
                      <td>{item.QueryTitle}</td>
                      <td>{item.QueryDescription}</td>
                      <td>{item.CreatedAt}</td>
                      <td>{item.AvailableTime}</td>
                      <td>{item.StudentName}</td>
                      <td>{item.ContactNumber}</td>
                      <td>{item.Batch}</td>
                      <td>{item.Status}</td>
                      <td>{item.Solution}</td>
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

export default MentorDashboard;
