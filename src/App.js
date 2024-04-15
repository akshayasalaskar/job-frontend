import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import User from './User'; // Import the User component

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/user/");
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <div className="App">
       
        <main>
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">Users</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {users.map(user => (
                <User key={user.id} user={user} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
