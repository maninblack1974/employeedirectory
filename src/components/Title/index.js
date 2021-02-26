import React from 'react';
import "../Title/style.css";

function Title () {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>Click on colunm heading to filter or use the search box to narrow your results by Name.</p>
      </div>
    )
  }

export default Title;