import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import { useFormik } from 'formik';
import  API_BASE_URL  from './config';

const Register = () => {
  const [userName, setUserName] = useState('')
  const [password, setpassword] = useState('')
  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
      role: '',
      name: '',
      phone: '',
      email: '',
      batch: '',
    },
    // Validation and form submission logic
    onSubmit: async (values) => {
      try {
        // Send a registration request to your backend
        const response = await axios.post(`${API_BASE_URL}/auth/register`, values);
        // Handle success or show error messages
      } catch (error) {
        // Handle registration failure
      }
    },
  });


  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      {/* Include other registration fields here */}
      <button >Register</button>
    </div>
  );
};

export default Register;
