import React from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import { useFormik } from 'formik';
import API_BASE_URL from './config';



const ForgotPassword = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    // Validation and form submission logic
    onSubmit: async (values) => {
      try {
        // Send a request to your backend for a password reset email
        const response = await axios.post(`${API_BASE_URL}/auth/forgot-password`, values);
        alert(response)
        // Handle success or show error messages
      } catch (error) {
        // Handle failure
      }
    },
  });

  return (
    <div className="bg-secondary bg-gradient">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h1 text-gray-900 mb-4">Forgot Password</h1>
                      </div>
                      <form onSubmit={formik.handleSubmit}>
                        <div>
                          <input
                            type="email"
                            name="email" // Add the name attribute
                            placeholder="Enter your email ID"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            style={{ width: '100%' }}
                          />
                        </div>
                        <div style={{ marginTop: '10px' }}>
                          <button
                            type="submit" // This is important to trigger form submission
                            className="btn btn-primary btn-user btn-block"
                          >
                            Send Reset Email
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;