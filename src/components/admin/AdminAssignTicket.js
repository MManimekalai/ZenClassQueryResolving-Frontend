import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { assignAdminTicket, fetchAdminUsers } from "../APIcalls/admin";
import { useNavigate, useParams } from "react-router-dom";

function AdminAssignTicket() {
  const params = useParams();
  const navigate = useNavigate();
  const [mentors, setMentors] = useState([]); // Store mentor data
  const formik = useFormik({
    initialValues: {
      mentorName: "", // Initialize the mentorName field
    },
    validate: (values) => {
      let errors = {};

      if (!values.mentorName) {
        errors.mentorName = "Required";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        const response = await assignAdminTicket(params.ticketNumber, values.mentorName);
        alert(response.message);
        navigate('/admin/ticket-queue');
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  });

  useEffect(() => {
    // Fetch all existing mentors
    fetchAdminUsers()
      .then((data) => {
        if (data && data.users) {
          // Filter mentors from the fetched data
          const mentorData = data.users.filter((user) => user.role === "mentor");
          setMentors(mentorData);
        }
      })
      .catch((error) => {
        console.error('Error fetching admin mentors:', error);
      });
  }, []);

  return (
    <div className="container">
      <h4>Assign Ticket</h4>
      {formik.errors.mentorName ? (
        <span style={{ color: "red" }}>{formik.errors.mentorName}</span>
      ) : null}
      <div className="row mt-5">
        <div className="col-lg-4">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="mentorName">Mentor Name:</label>
              <select
                name="mentorName"
                onChange={formik.handleChange}
                value={formik.values.mentorName}
                className={`form-control ${formik.errors.mentorName ? "error-box" : ""}`}
                id="mentorName"
              >
                <option value="">Select Mentor</option>
                {mentors.map((mentor) => (
                  <option key={mentor._id} value={mentor.userName}>
                    {mentor.userName}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Assign
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminAssignTicket;
