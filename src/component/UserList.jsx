import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserItem from './UserItem';

const UserList = ({ onEdit }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div className="user-list">
      {users.map(user => (
        <UserItem key={user.id} user={user} onDelete={handleDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default UserList;
