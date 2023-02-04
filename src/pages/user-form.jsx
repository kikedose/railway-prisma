import React, { useState } from 'react';
import NewUserInput from 'components/NewUserInput/NewUserInput';
import UserList from 'components/UserList/UserList';

function UserForm() {
  const [userList, setUserList] = useState([
    {
      firstName: 'Jack',
      lastName: 'Arceri',
      email: 'jarceri@mail.com',
      password: 'test123',
    },
  ]);

  return (
    <div className="flex">
      <NewUserInput userList={userList} setUserList={setUserList} />
      <UserList userList={userList} />
    </div>
  );
}

export default UserForm;
