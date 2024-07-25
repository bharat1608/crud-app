import React from 'react';

const UserItem = ({ user, onDelete, onEdit }) => {
  return (
    <div className="user-item">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={() => onEdit(user)}>Edit</button>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
};

export default UserItem;
