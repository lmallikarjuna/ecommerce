import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.style.scss";

const MenuItem = ({ title, history, link, match }) => {
  return (
    <div className="menu-item" onClick={() => 
      history.push(`${match.url}${link}`)
    }>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop How</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
