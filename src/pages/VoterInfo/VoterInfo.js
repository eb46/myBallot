import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./VoterInfo.scss";
import { DataContext } from "../../App";

function VoterInfo() {
  const { data, address } = useContext(DataContext);
  const [category, setCategory] = useState([]);

  console.log('address in VoterInfo', address)

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
      <Link to="startform">
        <button className="backButton">
          <i class="fas fa-chevron-circle-left"></i>
        </button>
      </Link>
      <h1>Upcoming Elections</h1>
      <h1 className="dataPulled">{category.Name}</h1>
      <p>Complete your ballot selection for this election</p>
      <Link to="/buildballot">
        <button className="beginButton">Begin myBallot</button>
      </Link>
    </div>
  );
}

export default VoterInfo;
