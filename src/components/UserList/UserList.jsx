import React from 'react';
import PropTypes from 'prop-types';

function UserList({ userList }) {
  return (
    <div className="w-full h-screen overflow-y-scroll ml-12 pt-12">
      <ul>
        {
          userList.map((user) => (
            <li key={user.firstName} className="mb-4">
              <div className="w-80 p-4 bg-gray-100 rounded-md">
                <h4 className="text-xl font-medium text-gray-600">
                  {user.firstName}
                  {' '}
                  {user.lastName}
                </h4>

                <p className="text-m text-blue-600 font-normal">
                  {user.email}
                </p>

                <br />
                {user.password}
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

UserList.propTypes = {
  userList: PropTypes.instanceOf(Object).isRequired,
};

export default UserList;
