import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import { useFormik } from 'formik';
import  API_BASE_URL  from './config';

const ResetPassword = () => {
  const [token, settoken] = useState('')
  const [newPassword, setnewPassword] = useState('')

  const formik = useFormik({
    initialValues: {
      token: '', // Token from the reset link
      newPassword: '',
      confirmPassword: '',
    },
    // Validation and form submission logic
    onSubmit: async (values) => {
      try {
        // Send a request to your backend to reset the password
        const response = await axios.post(`${API_BASE_URL}/auth/reset-password`, values);
        // Handle success or show error messages
      } catch (error) {
        // Handle failure
      }
    },
  });

  return (
    <div>
      <h2>Reset Password</h2>
      <input
        type="text"
        placeholder="Token"
        value={token}
        onChange={(e) => settoken(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setnewPassword(e.target.value)}
      />
      <button >Reset Password</button>
    </div>
  );
};

export default ResetPassword;
