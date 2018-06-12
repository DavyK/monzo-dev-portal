import React from 'react';

const UserItem = ({ name, avatar, email }) => (
    <div
        className="user-item"
    >
        <img src={avatar} />
        <span className="user-item-name">
            {name}
        </span>
        <span className="user-item-email">
            {email}
        </span>
    </div>
);

export default UserItem;
