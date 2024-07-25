import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ userId, onSave }) => {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    if (userId) {
      axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => setUser(response.data))
        .catch(error => console.error(error));
    } else {
      setUser({ name: '', email: '' });
    }
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId) {
      axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`, user)
        .then(() => onSave())
        .catch(error => console.error(error));
    } else {
      axios.post('https://jsonplaceholder.typicode.com/users', user)
        .then(() => onSave())
        .catch(error => console.error(error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <button type="submit">{userId ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default UserForm;
