import React, { useState } from "react";
import Button from "./../Button/Button";

export default function Friend({
  friend,
  selectFriend,
  selectedFriend,
  deleteFriend,
}) {
  let { id, name, image, balance } = friend;

  return (
    <>
      <div
        className={`friend flex flex-col w-full  text-center sm:text-left sm:flex-row  items-center gap-4 my-3 ${
          selectedFriend?.id == id ? "bg-yellow-100" : "bg-slate-200"
        } p-3 rounded-lg`}
      >
        <img src={image} className="rounded-full w-14" alt={image} />
        <div className="capitalize content">
          <h4 className="font-bold mb-2">{name}</h4>
          {balance < 0 && (
            <p className="text-red-500">
              you owe {name} {-balance}
            </p>
          )}
          {balance > 0 && (
            <p className="text-emerald-500">
              {name} awes you ${balance}
            </p>
          )}
          {balance == 0 && <p>you & {name} are even</p>}
        </div>
        <div className="flex sm:ms-auto">
          <div className="mx-2" onClick={() => selectFriend(friend)}>
            <Button>{selectedFriend?.id !== id ? "Select" : "Close"}</Button>
          </div>
          <button
            onClick={() => deleteFriend(id)}
            className="bg-red-500 transition-all duration-300 hover:bg-red-600 text-white p-2 px-4 rounded-lg pointer "
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
