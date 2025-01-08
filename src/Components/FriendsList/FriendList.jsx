import React, { useState } from "react";
import Friend from "./../Friend/Friend";
import Button from "../Button/Button";

export default function FriendList({
  friendsList,
  changeFriendForm,
  isOpen,
  selectFriend,
  selectedFriend,
  deleteFriend,
}) {
  return (
    <div className="w-full">
      {friendsList?.length > 0 ? <h2 className="text-3xl text-white font-bold">FriendList</h2> : null}
      {friendsList?.length > 0 ? friendsList.map((friend) => (
        <Friend
          deleteFriend={deleteFriend}
          selectedFriend={selectedFriend}
          selectFriend={selectFriend}
          key={friend.id}
          friend={friend}
        />
      )) : <h1 className="my-7 text-center font-bold text-4xl text-yellow-400">Not have friends yet !</h1>}
      <div onClick={() => changeFriendForm()} className="my-2 ">
        <Button full={true}>{isOpen ? "Close" : "Add"}</Button>
      </div>
    </div>
  );
}
