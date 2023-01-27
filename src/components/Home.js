import React from "react";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const options = ["users", "movies", "anime", "todos"];

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "13%",
          fontSize: "2rem",
          marginBottom: "2%",
        }}
      >
        {" "}
        Please select from the below menu
      </div>

      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Dropdown
          placeholder="Select an option"
          options={options}
          value=""
          onChange={(value) => console.log("change!", value)}
          onSelect={(value) => navigate(`/grid/${value.value}`)}
        />
      </div>
    </>
  );
};

export default Home;
