import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FriendList from "./Components/FriendsList/FriendList";
import SplitBill from "./Components/SplitBill/SplitBill";
import AddForm from "./Components/AddForm/AddForm";

function App() {
  const [isOpen, setisOpen] = useState(false);
  const [List, setList] = useState([
    {
      id: 210,
      name: "ali",
      image: "https://i.pravatar.cc/150?img=3",
      balance: 20,
    },
    {
      id: 211,
      name: "fathy",
      image: "https://i.pravatar.cc/150?img=3",
      balance: -5,
    },
    {
      id: 212,
      name: "karim",
      image: "https://i.pravatar.cc/150?img=3",
      balance: 0,
    },
    {
      id: 213,
      name: "kamal",
      image: "https://i.pravatar.cc/150?img=3",
      balance: 15,
    },
  ]);

  function changeFriendForm() {
    setisOpen((isOpen) => !isOpen);
  }

  function addFriend(newFriend) {
    setList((friends) => [...friends, newFriend]);
    setisOpen(false)
  }

  return (
    <>
      <div className="container w-[90%] py-5 mx-auto p-4 lg:items-start bg-gray-400 my-7 flex gap-5 justify-center items-center flex-col lg:flex-row">
        <div className="sm:max-lg:w-full">
          <FriendList
            friendsList={List}
            changeFriendForm={changeFriendForm}
            isOpen={isOpen}
          />
          {isOpen && <AddForm setisOpen={setisOpen} addFriend={addFriend} />}
        </div>
        <SplitBill />
      </div>
    </>
  );
}

export default App;
