import React, { useState, useEffect } from "react";
import "./ProgressBar.scss";

function ProgressBar({ pathname }) {
  const [pathNum, setPathnum] = useState(0);

  useEffect(() => {
    let pathNum = parseInt(pathname[pathname.length - 1]);
    setPathnum(pathNum);
  }, []);

  return (
    <div className="progressBar">
      <div className={pathNum > 0 ? "closed" : "open"} />
      <div className={pathNum > 1 ? "closed" : "open"} />
      <div className={pathNum > 2 ? "closed" : "open"} />
      <div className={pathNum > 3 ? "closed" : "open"} />
    </div>
  );
}

export default ProgressBar;
