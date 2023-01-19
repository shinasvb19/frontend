import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { useFormik } from "formik";
const Register_style = {
  position: "fixed",
  top: "50%",
  left: "50%",

  transform: "translate(-50%,-50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const overlay_style = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgb( 0, 0, 0, .7 )",
  zIndex: 1000,
};
const JobModal = ({ jobOpen, onJobClose, onJobOpenTwo, setFormOne }) => {
  const formik = useFormik({
    initialValues: {
      jobTitle: "",
      company: "",
      workType: "",
      jobLocation: "",
      jobType: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.jobTitle) {
        errors.jobTitle = "This field is required";
      }
      if (!values.company) {
        errors.company = "This field is required";
      }
      if (!values.jobType) {
        errors.jobType = "This field is required";
      }
      if (!values.jobLocation) {
        errors.jobLocation = "This field is required";
      }
      if (!values.workType) {
        errors.workType = "This field is required";
      }
      return errors;
    },
    onSubmit: (values) => {
      setFormOne(values);
      onJobOpenTwo();
      onJobClose();
    },
  });

  // console.log(formik.values);
  if (!jobOpen) return null;
  return (
    <div style={overlay_style}>
      <div
        className="flex flex-col w-[500px] max-h-[800px] rounded-3xl "
        style={Register_style}
      >
        <div className="font-extrabold flex justify-between   w-[100%] mb-12">
          <h1 className="font-extrabold text-lg">Enter your job details</h1>
          <AiFillCloseSquare
            className="font-extrabold text-xl "
            onClick={(e) => {
              onJobClose();
            }}
          />
        </div>
        <form className="pb-10" onSubmit={formik.handleSubmit}>
          <h1 className="my-2">Job title</h1>
          <input
            type="text"
            name="jobTitle"
            onChange={formik.handleChange}
            value={formik.values.jobTitle}
            className="focus:outline-0 border-gray-700 border-2 text-center h-10 w-[378px]  rounded-xl"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            placeholder="Enter Job title"
          />
          <div className="text-[#f00]">{formik.errors.jobTitle}</div>
          <h1 className="my-2">Company</h1>
          <input
            type="text"
            name="company"
            onChange={formik.handleChange}
            value={formik.values.company}
            className="focus:outline-0 mt h-10 w-[378px] text-center border-gray-700 border-2 rounded-xl"
            placeholder="Enter your Company name"
          />
          <div className="text-[#f00]">{formik.errors.company}</div>
          <h1 className="my-2">Work type</h1>
          <select
            name="workType"
            onChange={formik.handleChange}
            value={formik.values.workType}
            className="focus:outline-0 mt-2   h-10 w-[378px] text-center border-gray-700 border-2 rounded-xl"
            placeholder="enter job type"
          >
            <option value="">Select One</option>
            <option value="hybrid">hybrid</option>
            <option value="onsite">onsite</option>
            <option value="remote">remote</option>
          </select>
          <div className="text-[#f00]">{formik.errors.workType}</div>
          <h1 className="my-2">Job location</h1>
          <input
            onChange={formik.handleChange}
            value={formik.values.jobLocation}
            type="text"
            name="jobLocation"
            // value={education}
            // onChange={(e) => setEducation(e.target.value)}
            className="focus:outline-0 mt-2   h-10 w-[378px] text-center border-gray-700 border-2 rounded-xl"
            placeholder="Enter Job location"
          />
          <div className="text-[#f00]">{formik.errors.jobLocation}</div>
          <h1 className="my-2">Job type</h1>
          <select
            onChange={formik.handleChange}
            name="jobType"
            className="focus:outline-0 mt-2   h-10 w-[378px] text-center border-gray-700 border-2 rounded-xl"
            placeholder="enter job type"
          >
            <option value="">Select option</option>
            <option value="fulltime">Full time</option>
            <option value="partime">partime</option>
            <option value="contract">contract</option>
            <option value="internship">internship</option>
            <option value="temporary">temporary</option>
          </select>
          <div className="text-[#f00]">{formik.errors.jobType}</div>
          <button
            type="submit"
            onClick={(e) => {
              // onJobOpenTwo();
              // onJobClose();
            }}
            className="w-96 mt-10 h-10 bg-black rounded-3xl text-white"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobModal;
