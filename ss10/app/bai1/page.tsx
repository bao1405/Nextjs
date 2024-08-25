// bai1/page.tsx

import React from 'react';
import { GetStaticProps } from 'next';

type User = {
  id: number;
  name: string;
  email: string;
};

interface UsersProps {
  users: User[];
}

const Bai1: React.FC<UsersProps> = ({ users }) => {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Fetch data from the API
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return {
    props: {
      users,
    },
    // Revalidate every 10 seconds
    revalidate: 10,
  };
};

export default Bai1;
