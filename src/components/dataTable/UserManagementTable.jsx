import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
// import styled from "styled-components";
import instance from "../../app/api/instance";

// const TextField = styled.input`
//   height: 50px;
//   width: 250px;
//   margin-top: 20px;

//   border-top-left-radius: 5px;
//   border-bottom-left-radius: 5px;
//   border-top-right-radius: 0;
//   border-bottom-right-radius: 0;
//   border: 2px solid black;
//   padding: 0 32px 0 16px;

//   &:hover {
//     cursor: text;
//   }
// `;

const ClearButton = styled.button`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 50px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField
      id="search"
      type="text"
      placeholder="Filter By Name"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <ClearButton
      className="font-bold text-xl text-white bg-black hover:scale-105"
      type="button"
      onClick={onClear}
    >
      X
    </ClearButton>
  </>
);

const UserManagementTable = ({ data, load, change }) => {
  const blockHandler = (id) => {
    try {
      const value = { id: id };

      instance.post("/admin/block", value).then((response) => {
        if (response.status === 200) {
          console.log(response);
          load == false ? change(true) : change(false);
        } else {
          alert("SOMETHING WRONG!!!!!!!!!!!!!");
        }
      });
    } catch (error) {
      console.log(error);
      alert("SOMETHING WRONG!!!!!!!!!!!!!");
    }
  };

  const unblockHandler = (id) => {
    try {
      const value = { id: id };

      instance.post("/admin/unblock", value).then((response) => {
        if (response.status === 200) {
          console.log(response);

          load == false ? change(true) : change(false);
        } else {
          alert("SOMETHING WRONG!!!!!!!!!!!!!");
        }
      });
    } catch (error) {
      console.log(error);
      alert("SOMETHING WRONG!!!!!!!!!!!!!");
    }
  };
  console.log(data);
  const columns = [
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Phone",
      selector: (row) => row.mobile,
    },
    {
      name: "",
      cell: (row) =>
        row.verified === true ? (
          <button
            type=""
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => blockHandler(row._id)}
          >
            {" "}
            block
          </button>
        ) : (
          <button
            type=""
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => unblockHandler(row._id)}
          >
            {" "}
            unblock
          </button>
        ),
    },
  ];

  // const data = [
  //   {
  //     email: "sanju@gmail.com",
  //     phone: "8547022049",
  //   },
  //   {
  //     email: "shinas@gmail.com",
  //     phone: "9767143582",
  //   },
  // ];

  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = data.filter(
    (item) =>
      item.email && item.email.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <div>
      <DataTable
        columns={columns}
        data={filteredItems}
        pagination
        paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
      />
    </div>
  );
};

export default UserManagementTable;
