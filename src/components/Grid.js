import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useParams } from "react-router-dom";

const Grid = () => {
  const { id } = useParams();

  const [rowData, setRowData] = useState();

  const [columnDefs, setColumnDefs] = useState([]);

  const getDynamicColumn = (obj) => {
    return Object.keys(obj).map((key) => ({ field: key, filter: true }));
  };

  const defaultColDef = useMemo(() => ({
    sortable: true,
    flex: 1,
    filter: true,
    floatingFilter: true,
  }));

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${id}`)
      .then((result) => result.json())
      .then((rowData) => {
        setRowData(rowData);
        setColumnDefs(getDynamicColumn(rowData[0]));
      });
  }, [id]);

  return (
    <div>
      <div
        style={{
          fontSize: "25px",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          marginTop: "2%",
        }}
      >
        {id}
      </div>

      <div
        className="ag-theme-alpine"
        style={{ width: "80%", height: "70vh", margin: "2% 10%" }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows={true}
          rowSelection="multiple"
          pagination={true}
          paginationPageSize={10}
          paginationAutoPageSize={true}
        />
      </div>
    </div>
  );
};

export default Grid;
