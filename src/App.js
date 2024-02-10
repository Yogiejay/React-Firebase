import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
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
  const [user, setUsers] = useState([]);
  const UsersCollectionRef = collection(db, "backenddata");

  const CreateUser = async () => {
    await addDoc(UsersCollectionRef, { Name: name, Age: age });
    window.location.reload();
  };
  useEffect(() => {
    const getUsersData = async () => {
      const data = await getDocs(UsersCollectionRef);
      // setUsers(data.doc);
      setUsers(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })));
    };
    getUsersData();
  }, []);

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
      <div className="text-white mt-20 mx-6">
        <h3 className="text-xl">Users:</h3>
        <div className="grid grid-cols-2">
          {user.map((user) => {
            return (
              <div className="hover:animate-pulse m-4 bg-gray-600 w-1/4 rounded-md p-2">
                <p className="w-auto text-center">{user.Name}</p>
                <p className="w-auto text-center">{user.Age}</p>
                {/* <button
                  onClick={() => {
                    increaseAge(user.id, user.age);
                  }}
                >
                  Increase Age
                </button>
                <button
                  onClick={() => {
                    deleteUser(user.id);
                  }}
                >
                  Delete User
                </button> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
