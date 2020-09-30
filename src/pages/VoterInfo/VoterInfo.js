import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./VoterInfo.scss";
import { DataContext } from "../../App";

function VoterInfo() {
  const { data } = useContext(DataContext);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (data.Categories !== undefined) {
      if (data.Categories[0] !== undefined) {
        console.log("data", data.Categories[0]);
        setCategory(data.Categories[0]);
      }
    }
  }, [data]);

  return (
    <div className="VoterInfo">
      <h1>Upcoming Elections</h1>
      <h1>{category.Name}</h1>

      <Link to="/buildballot">
        <button>Begin myBallot</button>
      </Link>
    </div>
  );
}

export default VoterInfo;
