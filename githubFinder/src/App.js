import { useState } from 'react';
import Container from './searchUsers/Container';
import Navbar from './Navbar';
import './style.css';
import Users from './searchUsers/Users';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContainerUserProfile from './userProfile/Container';
import About from './About';

const GithubSearcher = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  return (
    <div className=" bg-gradient-to-b from-gray-600 to-slate-700 w-screen min-h-screen">
      <Navbar />
      <Container setSearchTerm={setSearchTerm} />
      {users && (
        <Users users={users} setUsers={setUsers} searchTerm={searchTerm} />
      )}
    </div>
  );
};

function App() {
  // const [searchTerm, setSearchTerm] = useState('');
  //   const [users, setUsers] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<GithubSearcher />} />
        <Route path="/user" element={<ContainerUserProfile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
