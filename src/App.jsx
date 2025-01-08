import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FriendList from "./Components/FriendsList/FriendList";
import SplitBill from "./Components/SplitBill/SplitBill";
import AddForm from "./Components/AddForm/AddForm";

function App() {
  const [isOpen, setisOpen] = useState(false);
  const [selectedFriend, setselectedFriend] = useState(null);
  const [List, setList] = useState(
    JSON.parse(localStorage.getItem("friends"))?.length > 0
      ? JSON.parse(localStorage.getItem("friends"))
      : []
  );

  function selectFriend(friend) {
    setselectedFriend((selected) =>
      selected?.id == friend.id ? null : friend
    );
    setisOpen(false);
  }

  function changeFriendForm() {
    setisOpen((isOpen) => !isOpen);
  }

  function addFriend(newFriend) {
    let copy = structuredClone(List);
    copy.push(newFriend);
    setList(copy);
    // setList((friends) => [...friends, newFriend]);
    setisOpen(false);
    localStorage.setItem("friends", JSON.stringify(copy));
  }

  function deleteFriend(id) {
    // console.log(id);
    let newList = structuredClone(List);
    newList = newList.filter((friend) => friend.id != id);
    setList(newList);
    localStorage.setItem("friends", JSON.stringify(newList));
  }

  function splitTheBill(newValue) {
    let myList = structuredClone(List); // take copy

    for (const friend of myList) {
      // edit
      if (friend.id == selectedFriend?.id) {
        friend.balance += newValue;
      }
    }
    localStorage.setItem("friends", JSON.stringify(myList));
    setList(myList); // setState
  }

  return (
    <>
      <div className="container w-[90%] py-5 mx-auto px-2 lg:items-start rounded-md border-4 border-blue-400 bg-gray-800 my-7 flex gap-5 justify-center items-center flex-col lg:flex-row">
        <div className="lg:w-1/2 sm:max-lg:w-full ">
          <FriendList
            deleteFriend={deleteFriend}
            selectedFriend={selectedFriend}
            selectFriend={selectFriend}
            friendsList={List}
            changeFriendForm={changeFriendForm}
            isOpen={isOpen}
          />
          {isOpen && <AddForm setisOpen={setisOpen} addFriend={addFriend} />}
        </div>
        {selectedFriend && (
          <SplitBill
            splitTheBill={splitTheBill}
            selectedFriend={selectedFriend}
          />
        )}
      </div>
    </>
  );
}

export default App;
