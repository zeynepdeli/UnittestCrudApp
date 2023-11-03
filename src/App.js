import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";

function App() {
  const [users, setUsers] = useState([
    { name: "Zeynep", email: "zeynep123@gmail.com" },
    { name: "DELİ", email: "deli123@gmail.com" },
  ]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="p-3 d-flex flex-column gap-3">
      <UserForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
