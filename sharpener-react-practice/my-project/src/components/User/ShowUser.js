import React from "react";
import Card from "../UI/Card";

const ShowUser = (props) => {
  const users = props.enteredUsers;

  return (
    <div>
      <Card className="  items-center w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <ul>
          {users.map((user) => (
            <li key={user.id}>{`${user.name}(${user.age} years old )`}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default ShowUser;
