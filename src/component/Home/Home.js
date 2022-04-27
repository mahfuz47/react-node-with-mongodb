import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/user")
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])

    const handleDeleteUser = id => {

    }
    return (
      <div>
        <h2>Available Users: {users.length}</h2>
        <ul>
          {users.map((user) => (
            <li>
              {user.name} :: {user.email}{" "}
              <button onClick={handleDeleteUser(user._id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default Home;