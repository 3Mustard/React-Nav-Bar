import React from "react";

import './Backdrop.css'

const backdrop = props => (
  <div className="back-drop" onClick={props.click}></div>
);

export default backdrop;