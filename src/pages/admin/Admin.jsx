import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import instance from "../../app/api/instance";
import Sidebar from "../../components/admin/Sidebar";
import UserManagementTable from "../../components/dataTable/UserManagementTable";
import { logOutAdmin } from "../../features/admin/adminMainSlice";

const Admin = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    instance.get("/users").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, [load]);
  return (
    <div className="flex ">
      <Sidebar />
      <div className="w-full h-screen">
        <div className="mx-auto max-w-[1200px] bg-white mt-20 rounded-3xl p-8">
          {/* <UserManagementTable data={data} load={load} change={setLoad} /> */}
        </div>
      </div>
    </div>
  );
};

export default Admin;
