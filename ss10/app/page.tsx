// page.tsx

import React from 'react';
import Bai1, { getStaticProps } from './bai1/page';

type User = {
  id: number;
  name: string;
  email: string;
};

export default function Page(props: { users: User[] }) {
  return (
    <div>
      <Bai1 users={props.users} />
    </div>
  );
}

// Re-export getStaticProps for data fetching
export { getStaticProps };
