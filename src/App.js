import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { db } from "./config-firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "@firebase/firestore";
function App() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [users, setUsers] = useState([]);
  const UsersCollectionRef = collection(db, "backenddata");

  const CreateUser = () => {};

  return (
    <div className="App">
      <div className="text-white">
        <h1 className=" w-screen text-center mt-8 text-4xl font-bold">
          React with FireBase
        </h1>
        <p className="w-screen text-center mt-5">
          Fillin the Details to Upload Data to the DataBase
        </p>
        <div className="text-center mt-16">
          <span>Enter your Name : </span>
          <input
            className="mx-4 text-black"
            type="text"
            placeholder="Name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <span>Enter your Age : </span>
          <input
            className="mx-4 text-black"
            type="text"
            placeholder="Age"
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
          <br />
          <button
            onClick={CreateUser}
            className="bg-slate-700 m-4 p-2 w-20 rounded-md"
          >
            Create User
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
