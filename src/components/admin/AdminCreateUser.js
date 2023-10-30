import React from "react";
import { useFormik } from "formik";
import { createAdminUser } from "../APIcalls/admin"; // Import your API function
import Sidebar from "./AdminSidebar";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function AdminCreateUser() {
  const navigate = useNavigate(); // Initialize the navigate function

  const formik = useFormik({
    initialValues: {
      role: "", // You mentioned you are creating admin users
      name: "",
      phone: "",
      email: "",
      batch: "",
      qualification: "",
      yearOfPassing: "",
      yearsOfExperience: "",
      noticePeriod: "",
      userName: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};

      if (!values.name) {
        errors.name = "Required";
      }

      if (!values.phone) {
        errors.phone = "Required";
      } else if (values.phone.toString().length !== 10) {
        errors.phone = "Please enter a valid 10-digit phone number";
      }

      if (!values.email) {
        errors.email = "Required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }

      if (!values.batch) {
        errors.batch = "Required";
      }

      if (!values.userName) {
        errors.userName = "Required";
      }

      if (!values.password) {
        errors.password = "Required";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        const response = await createAdminUser(values);
        alert(response.message); // Display a success message
        navigate("/admin/view-user");
      } catch (error) {
        alert(error.response.data.message); // Display an error message
      }
    },

    onCancel: () => {
      navigate("/admin/dashboard"); // Navigate to the admin dashboard
    },
  });

  return (
    <div id="wrapper" className="d-flex">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div id="content" className="container-fluid">
          <h1 className="h3 mb-4 text-gray-800" style={{ textAlign: "center" }}>
            Create User
          </h1>
          <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
              <div className="form-row mt-5">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Name</label>
                  <input
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    type="text"
                    className={`form-control ${formik.errors.name ? "error-box" : ""}`}
                    id="name"
                  />
                  {formik.errors.name && (
                    <span style={{ color: "red" }}>{formik.errors.name}</span>
                  )}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="phone">Phone</label>
                  <input
                    name="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    type="number"
                    className={`form-control ${formik.errors.phone ? "error-box" : ""}`}
                    id="phone"
                  />
                  {formik.errors.phone && (
                    <span style={{ color: "red" }}>{formik.errors.phone}</span>
                  )}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    type="email"
                    className={`form-control ${formik.errors.email ? "error-box" : ""}`}
                    id="email"
                  />
                  {formik.errors.email && (
                    <span style={{ color: "red" }}>{formik.errors.email}</span>
                  )}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="batch">Batch</label>
                  <input
                    name="batch"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.batch}
                    type="text"
                    className={`form-control ${formik.errors.batch ? "error-box" : ""}`}
                    id="batch"
                  />
                  {formik.errors.batch && (
                    <span style={{ color: "red" }}>{formik.errors.batch}</span>
                  )}
                </div>
                <div className="form-group col-md-6">
            <label htmlFor="qualification">Qualification</label>
            <input
              name="qualification"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.qualification}
              type="text"
              className="form-control"
              id="qualification"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="yearOfPassing">Year of Passing</label>
            <input
              name="yearOfPassing"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.yearOfPassing}
              type="number"
              className="form-control"
              id="yearOfPassing"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="yearsOfExperience">Years of Experience</label>
            <input
              name="yearsOfExperience"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.yearsOfExperience}
              type="number"
              className="form-control"
              id="yearsOfExperience"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="noticePeriod">Notice Period</label>
            <input
              name="noticePeriod"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.noticePeriod}
              type="text"
              className="form-control"
              id="noticePeriod"
            />
          </div>
                <div className="form-group col-md-6">
                  <label htmlFor="role">Role</label>
                  <select
                    name="role"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.role}
                    className="form-control"
                    id="role"
                  >
                    <option value="admin">Admin</option>
                    <option value="student">Student</option>
                    <option value="mentor">Mentor</option>
                  </select>
                </div>
               <div className="form-group col-md-6">
                  <label htmlFor="userName">Username</label>
                  <input
                    name="userName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.userName}
                    type="text"
                    className={`form-control ${formik.errors.userName ? "error-box" : ""}`}
                    id="userName"
                  />
                  {formik.errors.userName && (
                    <span style={{ color: "red" }}>{formik.errors.userName}</span>
                  )}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="password">Password</label>
                  <input
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    type="password"
                    className={`form-control ${formik.errors.password ? "error-box" : ""}`}
                    id="password"
                  />
                  {formik.errors.password && (
                    <span style={{ color: "red" }}>{formik.errors.password}</span>
                  )}
                </div>
              </div>
              <button type="submit" className="btn btn-primary submit-button">Create User</button>                             
              <button  type="button" className="btn btn-secondary cancel-button" onClick={formik.handleReset}>Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminCreateUser;
