"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function page() {
  const [users, setUsers] = useState<any[]>([]);
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>
              Address: {user.address.street}, {user.address.city},{" "}
              {user.address.zipcode}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
