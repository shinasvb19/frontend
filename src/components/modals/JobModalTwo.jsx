import React from "react";
import { useFormik } from "formik";
import { AiFillCloseSquare } from "react-icons/ai";

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
const JobModalTwo = ({
  openJobTwo,
  onJobOpenTwoClose,
  setFormTwo,
  setSubmit,
  submit,
}) => {
  const formik = useFormik({
    initialValues: {
      workExperience: "",
      jobDescription: "",
      anyOtherRequirements: "",
      skills: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.workExperience) {
        errors.workExperience = "Required";
      }
      if (values.jobDescription.length < 60) {
        errors.jobDescription = "required 60 atleast letters ";
      }
      if (!values.skills) {
        errors.skills = "required";
      }
      return errors;
    },
    onSubmit: (values) => {
      setFormTwo(values);
      setSubmit(!submit);
      onJobOpenTwoClose();
    },
  });
  if (!openJobTwo) return null;
  return (
    <div style={overlay_style}>
      <div
        className="flex flex-col w-[500px] max-h-[800px] rounded-3xl "
        style={Register_style}
      >
        <div className="font-extrabold flex justify-between   w-[100%] mb-12">
          <h1 className="font-extrabold text-lg">Enter</h1>
          <AiFillCloseSquare
            className="font-extrabold text-xl "
            onClick={(e) => {
              onJobOpenTwoClose();
            }}
          />
        </div>
        <form onSubmit={formik.handleSubmit} className="pb-10">
          <h1 className="my-2">Work experince</h1>
          <input
            type="number"
            onChange={formik.handleChange}
            name="workExperience"
            value={formik.values.workExperience}
            className="focus:outline-0 border-gray-700 border-2 text-center h-10 w-[378px]  rounded-xl"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            placeholder="Work expereince"
          />
          <div className="text-[#f00]">{formik.errors.workExperience}</div>
          <h1 className="my-2">Job description</h1>
          <textarea
            name="jobDescription"
            onChange={formik.handleChange}
            value={formik.values.jobDescription}
            type="text"
            rows="2"
            // value={desc}
            // onChange={(e) => setDesc(e.target.value)}
            className="focus:outline-0 mt  w-[378px] text-center border-gray-700 border-2 rounded-xl max-h-[200px] min-h-[100px]"
            placeholder="Enter Job description"
          ></textarea>
          <div className="text-[#f00]">{formik.errors.jobDescription}</div>
          <h1 className="my-2">Any other requirements</h1>
          <input
            onChange={formik.handleChange}
            type="text"
            name="anyOtherRequirements"
            value={formik.values.anyOtherRequirements}
            className="focus:outline-0 mt-2   h-10 w-[378px] text-center border-gray-700 border-2 rounded-xl"
            placeholder="Any other requirements"
          />
          <h1 className="my-2">Skills</h1>
          <input
            onChange={formik.handleChange}
            type="text"
            name="skills"
            value={formik.values.skills}
            className="focus:outline-0 mt-2   h-10 w-[378px] text-center border-gray-700 border-2 rounded-xl"
            placeholder="Any other requirements"
          />
          <div className="text-[#f00]">{formik.errors.skills}</div>
          <button
            type="submit"
            className="w-96 mt-10 h-10 bg-black rounded-3xl text-white"
          >
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobModalTwo;
