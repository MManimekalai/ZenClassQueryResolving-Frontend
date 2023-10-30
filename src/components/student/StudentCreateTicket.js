import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {createNewTicket} from '../APIcalls/student'
import Sidebar from './studentSidebar';
import Navbar from './Navbar';

function StudentCreateTicket() {
  const [subcategories, setSubcategories] = useState([]);

 const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      category: "",
      subcategory: "",
      tags: [],
      preferredLanguage: "",
      queryTitle: "",
      queryDescription: "",
      availableTime: "",
      studentName: "",
      contactNumber: "",
      batch: "",
      attachments: [],
    },
    validate: (values) => {
      let errors = {};

      // Validate your form fields here

      return errors;
    },
    onSubmit: async (values) => {
      try {
        const ticketData = {
          category: values.category,
          subcategory: values.subcategory,
          tags: values.tags,
          preferredLanguage: values.preferredLanguage,
          queryTitle: values.queryTitle,
          queryDescription: values.queryDescription,
          availableTime: values.availableTime,
          studentName: values.studentName,
          contactNumber: values.contactNumber,
          batch: values.batch,
        };
    
        const response = await createNewTicket(ticketData);
        //  console.log(response.ticket)
          // const { ticket } = response.data.ticket;
          alert(response.message);
          navigate("/student/dashboard");
        
      } catch (error) {
        console.error("API request failed:", error);
        alert("Error: API request failed");
      }
    },
    
    
  });

  const handleAttachmentChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    formik.setFieldValue("attachments", selectedFiles);
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    switch (selectedCategory) {
      case "Zen-Class Doubt":
        setSubcategories(["task", "webcode", "class topic"]);
        break;
      case "Placement Related":
        setSubcategories(["company info", "completion certificate", "portfolio"]);
        break;
      case "Coordination Related":
        setSubcategories(["session time", "session joining link", "session feedback"]);
        break;
      case "Pre-Bootcamp Related":
        setSubcategories(["session", "payment", "task"]);
        break;
      default:
        setSubcategories([]);
        break;
    }

    formik.setFieldValue("category", selectedCategory);
  };

  return (
    <div id="wrapper" className="d-flex">
    <Sidebar />
    <div id="content-wrapper" className="d-flex flex-column">
      <Navbar />
      <div id="content" className="container-fluid">
        <div className="container-fluid">
          <div className="form-container">         
            <hr />
      <form onSubmit={formik.handleSubmit}>
        <div className="form-row mt-4">
          <h5>Topic</h5>
          {formik.errors.category ? (
            <span style={{ color: "red" }}>{formik.errors.category}</span>
          ) : null}
        </div>
        <div className="form-row mt-2">
          <div className="form-group col-md-6">
            <label htmlFor="category">Category:</label>
            <select
              name="category"
              onChange={handleCategoryChange}
              value={formik.values.category}
              className="form-control"
              id="category"
            >
              <option>Choose...</option>
              <option>Zen-Class Doubt</option>
              <option>Placement Related</option>
              <option>Coordination Related</option>
              <option>Pre-Bootcamp Related</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="subcategory">Subcategory:</label>
            <select
              name="subcategory"
              onChange={formik.handleChange}
              value={formik.values.subcategory}
              className="form-control"
              id="subcategory"
            >
              <option>Choose...</option>
              {subcategories.map((subcategory) => (
                <option key={subcategory} value={subcategory}>
                  {subcategory}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-row mt-4">
          <h5>Preferred Language</h5>
          {formik.errors.preferredLanguage ? (
            <span style={{ color: "red" }}>{formik.errors.preferredLanguage}</span>
          ) : null}
        </div>
        <div className="form-row mt-2">
          <div className="form-group col-md-6">
            <label htmlFor="preferredLanguage">Preferred language:</label>
            <select
              name="preferredLanguage"
              onChange={formik.handleChange}
              value={formik.values.preferredLanguage}
              className="form-control"
              id="preferredLanguage"
            >
              <option>Choose...</option>
              <option>Tamil</option>
              <option>Hindi</option>
              <option>Kannada</option>
              <option>English</option>
            </select>
          </div>
        </div>
        <div className="form-row mt-4">
          <h5>Ticket Details</h5>
          {formik.errors.queryTitle ? (
            <span style={{ color: "red" }}>{formik.errors.queryTitle}</span>
          ) : null}
        </div>
        <div className="form-row mt-2">
          <div className="form-group col-md-6">
            <label htmlFor="queryTitle">Query Title:</label>
            <input
              name="queryTitle"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.queryTitle}
              type="text"
              className="form-control"
              id="queryTitle"
            />
          </div>
        </div>
        <div className="form-row mt-2">
          <div className="form-group col-md-6">
            <label htmlFor="queryDescription">Query Description</label>
            <textarea
              name="queryDescription"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.queryDescription}
              className="form-control"
              id="queryDescription"
              rows="3"
            ></textarea>
          </div>
        </div>
        <div className="form-row mt-4">
          <h5><label htmlFor="availableTime">Your available Time ? ( Ours : 9:00 AM - 7:00 PM )</label></h5>
        </div>
        <div className="form-row mt-2">
          <div className="form-group col-md-6">
            <input
              name="availableTime"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.availableTime}
              type="text"
              className="form-control"
              id="availableTime"
              required
            />
          </div>
        </div>
        <div className="form-row mt-2">
          <div className="form-group col-md-6">
           <h5> <label htmlFor="attachment">Attachments (Optional)</label></h5>
            <input
              type="file"
              id="attachment"
              name="attachments"
              onChange={handleAttachmentChange}
              multiple
              accept=".jpg, .jpeg, .png"
            />
          </div>
        </div>
        <div className="form-row mt-2">
          <button type="submit" className="btn btn-primary">
            Create Ticket
          </button>
        </div>
      </form>

          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default StudentCreateTicket;
