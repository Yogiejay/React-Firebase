import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { db, db1 } from "./config-firebase";
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
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const UsersCollectionRef = collection(db, "backenddata");
  const UserLoginData = collection(db, "backenddata");

  const CreateUser = async () => {
    await addDoc(UsersCollectionRef, { Name: name, Age: age });
    await addDoc(UserLoginData, { Username: username, Password: password });
    // setUsers((prev) => [...prev, { Name: name, Age: age }]);
    window.location.reload();
  };
  // const CreateLoginCred = async () => {
  //   await addDoc(UserLoginData, { Username: username, Password: password });
  //   window.location.reload();
  // };
  useEffect(() => {
    const getUsersData = async () => {
      const data = await getDocs(UsersCollectionRef);
      // setUsers(data.doc);
      console.log(typeof data);
      setUsers(
        data.docs.map((elem) => {
          return { ...elem.data(), id: elem.id };
        })
      );
      // setUsers(data.docs);
    };
    getUsersData();
  }, []);

  const increaseAge = async (id, age) => {
    const userDoc = doc(db, "backenddata", id);
    const NewAge = { Age: Number(age) + 1 };
    console.log("Updated the Data on System");
    await updateDoc(userDoc, NewAge);
    console.log("Updated the Data on the Server");
    window.location.reload();
  };
  const deleteUser = async (id) => {
    const userDoc = doc(db, "backenddata", id);
    console.log("Updated the Data on System");
    await deleteDoc(userDoc);
    console.log("Updated the Data on the Server");
    window.location.reload();
  };

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
          <span>Enter your Usrname : </span>
          <input
            className="mx-4 text-black"
            type="text"
            placeholder="Age"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <span>Enter your Password : </span>
          <input
            className="mx-4 text-black"
            type="text"
            placeholder="Age"
            onChange={(event) => {
              setPassword(event.target.value);
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
                <button
                  onClick={() => {
                    deleteUser(user.id);
                  }}
                >
                  Delete User
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
