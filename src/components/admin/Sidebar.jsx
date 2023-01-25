import { useState } from "react";
import { FaUsersCog, FaChessRook } from "react-icons/fa";
import { VscRequestChanges } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutAdmin } from "../../features/admin/adminMainSlice";
const Sidebar = (props) => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="flex top-0 sticky">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-black h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            LOGO
          </h1>
        </div>
        <ul className="pt-6">
          <li
            className={`${
              props.type == "user" && "bg-gray-700"
            } flex  rounded-md p-2 cursor-pointer hover:bg-gray-700  items-center gap-x-4 mb-5`}
          >
            <FaUsersCog className="text-3xl text-white" />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              <h1
                onClick={() => {
                  navigate("/usermanagement");
                }}
                className="text-white text-xl"
              >
                User Management
              </h1>
            </span>
          </li>
          <li
            className={`${
              props.type == "req" && "bg-gray-700"
            } flex  rounded-md p-2 cursor-pointer hover:bg-gray-700  items-center gap-x-4 mb-5`}
          >
            <VscRequestChanges className="text-3xl text-white" />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              <h1
                onClick={() => {
                  navigate("/requests");
                }}
                className="text-white text-xl"
              >
                Reported posts
              </h1>
            </span>
          </li>
          <li
            className={`${
              props.type == "event" && "bg-gray-700"
            } flex  rounded-md p-2 cursor-pointer hover:bg-gray-700  items-center gap-x-4 mb-5`}
          >
            <FaChessRook className="text-3xl text-white" />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              <h1
                onClick={() => {
                  dispatch(logOutAdmin());
                }}
                className="text-white text-xl"
              >
                Logout
              </h1>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
