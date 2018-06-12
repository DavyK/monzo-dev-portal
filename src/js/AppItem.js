import React from 'react';

const styles = {
    selected: {
        border: "2px solid #3FBF3F",
    },
}

const AppItem = ({ id, name, logo, created, selected }) => (
    <div
        className="app-item"
        style={selected ? styles.selected : {}}
    >
        <img src={logo} />
        <span className="app-item-name">
            {name}
        </span>
    </div>
);

export default AppItem;
