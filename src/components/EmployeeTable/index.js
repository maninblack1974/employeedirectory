import React, { useContext } from "react";
import EmployeeInfo from "../EmployeeInfo/index";
import "./style.css";
import DataContext from "../../utils/datacontext";

const EmployeeTable = () => {
  const context = useContext(DataContext);

  return (

    <div className="datatable mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            {context.developerState.headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    // context.handleSort(name.toLowerCase());
                    context.handleSort(name);
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>

        <EmployeeInfo />
      </table>
    </div>
  );
}

export default EmployeeTable;