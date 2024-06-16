import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../../sass/__user.scss";

const API_URL: string = "https://dummyjson.com";

interface User {
  id: string;
  image: string;
  firstName: string;
  lastName: string;
  company: {
    department: string;
  };
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/users`)
      .then(res => {
        const allUsers: User[] = res.data.users;
        const limitedUsers = allUsers.slice(0, 4); // Faqat 4 ta foydalanuvchini olish
        setUsers(limitedUsers);
      })
      .catch(err => console.error(err));
  }, []);

  let usersItem: JSX.Element[] = users.map((user: User) => (
    <div key={user.id} className="users__card">
      <div className='user__img'>
        <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
      </div>
      <div className="user__info">
        <h2>{user.firstName} {user.lastName}</h2>
        <p>{user.company.department}</p>
      </div>
    </div>
  ));

  return (
    <div className='users__wrapper'>
      <div className="container">
        <div className="users__title">
          <h1>Meet our team</h1>
        </div>
        <div className="users__section">
          {usersItem}
        </div>
      </div>
    </div>
  );
}

export default Users;
