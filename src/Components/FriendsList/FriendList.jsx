import React, { useState } from "react";
import Friend from "./../Friend/Friend";
import AddForm from "../AddForm/AddForm";
import Button from "../Button/Button";

export default function FriendList() {
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

  function changeStatus() {
    setisOpen((isOpen) => !isOpen);
  }

  return (
    <div className="sm:max-lg:w-full">
      <h2 className="text-2xl ">FriendList</h2>
      {List.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
      <div onClick={() => changeStatus()} className="my-2 ">
        <Button full={true}>{isOpen ? "Close" : "Add"}</Button>
      </div>
      {isOpen && <AddForm />}
    </div>
  );
}
