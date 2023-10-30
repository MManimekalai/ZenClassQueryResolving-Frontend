import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from './config';
import login_img from '../img/zen.png'
import LoginInstructions from './LoginInstruction'

const Login = () => {
  const [showInstructions, setShowInstructions] = useState(false);


  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },
    validate: (values) => {
      let errors = {};
      if (!values.userName) {
        errors.userName = 'Please enter your username';
      }
      if (!values.password) {
        errors.password = 'Password is required';
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        // Send a login request to your backend
        const response = await axios.post(`${API_BASE_URL}/auth/login`, {
          userName: values.userName,
          password: values.password,
        });

        // Handle successful login
        if (response.data.token) {
          // Store the token in local storage
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('userName', response.data.userName);
          localStorage.setItem('role', response.data.role);
          localStorage.setItem('uID', response.data.uID);

          const token = localStorage.getItem('token');

          // console.log(token)

          // Use user role for routing to appropriate dashboard
          if (response.data.role === 'admin') {
            navigate('/admin/dashboard');
          } else if (response.data.role === 'student') {
            navigate('/student/dashboard');
          } else if (response.data.role === 'mentor') {
            navigate('/mentor/dashboard');
          }
        }
      } catch (error) {
        alert('Login failed: ' + error.response.data.message);
      }
    },
  });

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

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
                        <h1 className="h4 text-gray-900 mb-4 ">
                          <img src={login_img} alt="" /> Login
                        </h1>
                      </div>
                      <form className="user" onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                          <input
                            type="userName"
                            name="userName"
                            onChange={formik.handleChange}
                            value={formik.values.userName}
                            className="form-control form-control-user"
                            id="exampleInputuserName"
                            aria-describedby="userNameHelp"
                            placeholder="Enter userName..."
                          />
                          {formik.touched.userName && formik.errors.userName ? (
                            <span style={{ color: "red" }}>
                              {formik.errors.userName}
                            </span>
                          ) : null}
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                          />
                          {formik.touched.password && formik.errors.password ? (
                            <span style={{ color: "red" }}>
                              {formik.errors.password}
                            </span>
                          ) : null}
                        </div>
                        <div class="form-group">
                          <div class="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              class="custom-control-label"
                              for="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <input
                          type={"submit"}
                          value={"Login"}
                          href="index.html"
                          className="btn btn-primary btn-user btn-block"
                        />
                        <button
                          onClick={toggleInstructions}
                          style={{
                            fontSize: "0.9rem",
                            color: "black",
                            backgroundColor: "transparent",
                            border: "none",
                            cursor: "pointer",
                          }}
                        >
                          Click here to read the login Instruction
                        </button>
                        {showInstructions && (
                          <LoginInstructions onClose={toggleInstructions} />
                        )}

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

export default Login;
