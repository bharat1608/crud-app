import React, { useState } from 'react';
import UserList from '../component/UserList';
import UserForm from '../component/UserForm';

const Users = () => {
  const [editingUser, setEditingUser] = useState(null);

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleSave = () => {
    setEditingUser(null);
  };

  return (
    <div>
      <h1>Users</h1>
      <UserForm userId={editingUser?.id} onSave={handleSave} />
      <UserList onEdit={handleEdit} />
    </div>
  );
};

export default Users;
