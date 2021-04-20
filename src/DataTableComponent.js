import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import React from "react";
import { MDBDataTable } from "mdbreact";
const DataTableComponent = ({ users }) => {
  const data = {
    columns: [
      {
        label: "ID",
        field: "id",
        sort: "asc",
      },
      {
        label: "FirstName",
        field: "first_name",
        sort: "asc",
      },
      {
        label: "LastName",
        field: "last_name",
        sort: "asc",
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
      },
      {
        label: "Gender",
        field: "gender",
        sort: "asc",
      },
      {
        label: "IPAddress",
        field: "ip_address",
        sort: "asc",
      },
      {
        label: "City",
        field: "city",
        sort: "asc",
      },
      {
        label: "Language",
        field: "language",
        sort: "asc",
      },
    ],
    rows: users,
  };

  return (
    <div className="container">
      <MDBDataTable striped bordered hover data={data} />
    </div>
  );
};

export default DataTableComponent;
