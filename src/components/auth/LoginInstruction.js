// LoginInstructions.js
import React from 'react';

const LoginInstructions = ({ onClose }) => {
  return (
    <div className="login-instructions">
      <h5>Login Instructions</h5>
      <div>
      <p>Hai Every one, This is Zen Class Ticketing system for query resolving PFB for some instruction to use my APP.</p>
      <p> Please use Below Admin Login credential to sign in as admin, mentor and student. Each role has different functionalities.</p>
      <hr></hr>
<h5>Admin Login credential:</h5> <p style={{ margin: '5px 0' }}>userName: admin1</p><p style={{ margin: '5px 0' }}>password: admin1@123</p>
<h5>Mentor Login credential:</h5> <p style={{ margin: '5px 0' }}>userName: mentor1</p><p style={{ margin: '5px 0' }}>password: mentor1@123</p>
<h5>Student Login credential:</h5> <p style={{ margin: '5px 0' }}>userName: student1</p><p style={{ margin: '5px 0' }}>password: student1@123</p>

<hr></hr>
<p>you can also use above Admin Login credential to sign in admin portal, once you get admin Portal
you can create your own student list and mentor list with  login credential.
</p>  <hr></hr>
<p>Then you can use that credential which is created by you in the Add or create mentor/ create student component
for sign in to get mentor / student_portal access for further usage. </p>                   
      </div>
      
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default LoginInstructions;
