import React, { useState } from "react";
import Friend from "./../Friend/Friend";
import Button from "../Button/Button";

export default function FriendList({ friendsList, changeFriendForm, isOpen }) {
  

  return (
    <div className="w-full">
      <h2 className="text-2xl">FriendList</h2>
      {friendsList.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
      <div onClick={() => changeFriendForm()} className="my-2 ">
        <Button full={true}>{isOpen ? "Close" : "Add"}</Button>
      </div>
    </div>
  );
}
