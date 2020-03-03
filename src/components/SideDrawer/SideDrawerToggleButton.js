import React from 'react';

import './SideDrawerToggleButton.css';

const sideDrawerToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button_line"></div>
        <div className="toggle-button_line"></div>
        <div className="toggle-button_line"></div>
    </button>
);

export default sideDrawerToggleButton;