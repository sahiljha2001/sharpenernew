import React, { useState } from "react";
import Card from "../UI/Card";

const GetUser = ({ age, username, setAge, setUserName, handleUserAdd }) => {
  // const userlistHandler = props.onUser();

  

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const usernameHandler = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div className="flex justify-center items-start">
      <Card className="  items-center w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        {" "}
        <form className="flex flex-col" onSubmit={handleUserAdd}>
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            onChange={usernameHandler}
            value={username}
          />
          <label htmlFor="years">Age(years)</label>
          <input type="number" id="years" onChange={ageHandler} value={age} />
          <button
            className="bg-violet-600 border rounded-lg text-sm w-1/4 px-1 py-1 mt-3  "
            type="submit"
          >
            Add user
          </button>
        </form>
      </Card>
    </div>
  );
};

export default GetUser;
