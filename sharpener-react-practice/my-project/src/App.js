import { useState } from "react";
import GetUser from "./components/User/GetUser";
import ShowUser from "./components/User/ShowUser";

function App() {
  const [userList, setUserList] = useState([]);
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");

  const handleUserAdd = (event) => {
    event.preventDefault();
    console.log("handleUserAdd");
      
    setUserList((prev) => {
      return [...prev, { id: Math.random(), name:username, age:age }];
    });
  };

  // const userHandler = (username, userage) => {
  //   setUserList((prevUserList) => {
  //     return [
  //       ...prevUserList,
  //       {
  //         name: prevUserList.username,
  //         age: prevUserList.userage,
  //         id: Math.random().toString(),
  //       },
  //     ];
  //   });
  // };
//hello 
  console.log("age", username);
  console.log("users".userList);

  // console.log("userlist", userList);
  return (
    <div>
      <GetUser
        username={username}
        setUserName={setUserName}
        age={age}
        setAge={setAge}
        userList={userList}
        handleUserAdd={handleUserAdd}
      ></GetUser>
      <ShowUser enteredUsers={userList}></ShowUser>
    </div>
  );
}

export default App;
