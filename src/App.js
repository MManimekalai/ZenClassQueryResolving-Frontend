import React from 'react';
import "./css/sb-admin-2.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';

import AdminDashboard from './components/admin/AdminDashboard';
import AdminTickets from './components/admin/AdminTickets';
import AdminCreateUser from './components/admin/AdminCreateUser';
import AdminAssignTicket from './components/admin/AdminAssignTicket';
import AdminViewUser from './components/admin/AdminViewUser';
import TicketQueue from './components/admin/TicketQueue'
import TicketList from './components/admin/TicketList'
import TicketInfo from './components/admin/TicketInfo'


import MentorDashboard from './components/mentor/MentorDashboard';
import OpenTicketQueue from './components/mentor/TicketQueue';
import MentorResolveTicket from './components/mentor/MentorResolveTicket';
import MentorTakeAndResolveTicket from './components/mentor/MentorTakeAndResolveTicket';
import MentorViewClosedTicket from './components/mentor/MentorViewClosedTicket';
import MentorAssignedTickets from './components/mentor/MentorAssignedTickets'

import StudentDashboard from './components/student/StudentDashboard';
import StudentCreateTicket from './components/student/StudentCreateTicket';
import StudentSidebar from './components/student/studentSidebar'
import Navbar from './components/student/Navbar';
import Card from './components/admin/card';

function App() {
  return (
    <Router>
     
      <Routes>
        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forgot-password" element={ <ForgotPassword/>} />
        <Route path="/reset-password" element={<ResetPassword/>} />

        {/* Admin Routes */}
                
               
        <Route path="/admin/dashboard" element={<AdminDashboard/>} />        
        <Route path="/admin/view-tickets" element={<AdminTickets/>} />
        <Route path="/admin/create-user" element={<AdminCreateUser/>} />
        <Route path="/admin/assign-ticket/:ticketNumber" element={<AdminAssignTicket/>} />
        <Route path="/admin/view-user" element={<AdminViewUser/>} />
        <Route path="/admin/card" element={<Card status="open" title="Open Tickets" color="primary" icon="fa-calendar" />} />
        <Route path="/admin/ticket-queue" element={<TicketQueue/>} />
        <Route path="/admin/ticket-list" element={<TicketList/>} />
        <Route path="/admin/ticket-info/:ticketNumber" element={<TicketInfo/>} />
        

        {/* Mentor Routes */}
        <Route path="/mentor/dashboard" element={<MentorDashboard/>} />
        <Route path="/mentor/view-tickets" element={<OpenTicketQueue/>} />
        <Route path="/mentor/viewAssignedtickets" element={<MentorAssignedTickets/>} />
        <Route path="/mentor/resolve-ticket/:ticketNumber" element={<MentorResolveTicket/>} />
        <Route path="/mentor/take-and-resolve-ticket/:ticketNumber" element={<MentorTakeAndResolveTicket/>} />
        <Route path="/mentor/closed-tickets" element={<MentorViewClosedTicket/>} />

        {/* Student Routes */}
        <Route path="/student/dashboard" element={<StudentDashboard/>} />
        <Route path="/student/create-ticket" element={<StudentCreateTicket/>} />
        <Route path="/student/sidebar" element={<StudentSidebar/>} />
        <Route path="/student/navbar" element={<Navbar/>} />

        {/* Default Route */}
        <Route path="/" element={<Login />} />
      </Routes>
     
    </Router>
  );
}

export default App;
