import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fields from './_fields.json';

function NewUserInput({ userList, setUserList }) {
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleInputChange = ({ target }) => {
    setNewUser({
      ...newUser,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('NEW USER: ', newUser);

    setUserList([
      ...userList,
      newUser,
    ]);
  };

  return (
    <div className="h-screen p-12 bg-gray-100">
      <h1 className="text-2xl font-bold text-blue-900">Create New User</h1>

      <form className="flex flex-col" onSubmit={handleSubmit}>
        {
          fields.map((field) => (
            <label key={field.name} htmlFor="name" className="block my-4 text-sm text-gray-600 focus-within:text-gray-700 focus-within:font-medium">
              {field.title}
              <input
                type={field.type}
                name={field.name}
                id={field.id}
                value={newUser[field.name]}
                onChange={handleInputChange}
                className="w-80 mt-1 p-2 block border border-solid border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                autoComplete="off"
              />
            </label>
          ))
        }

        <button
          type="submit"
          className="w-80 mt-8 p-2 rounded-sm bg-blue-600 text-white font-semibold hover:bg-blue-500 active:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

NewUserInput.propTypes = {
  userList: PropTypes.arrayOf(PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  })).isRequired,
  setUserList: PropTypes.func.isRequired,
};

export default NewUserInput;
