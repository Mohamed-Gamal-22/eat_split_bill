import React, { useState } from "react";
import Button from "./../Button/Button";

export default function Friend({ friend, selectFriend, selectedFriend }) {
  let { id, name, image, balance } = friend;

  return (
    <>
      <div
        className={`friend flex  items-center gap-4 my-3 ${
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
        <div className="ms-auto" onClick={() => selectFriend(friend)}>
          <Button>{selectedFriend?.id !== id ? "Select" : "Close"}</Button>
        </div>
      </div>
    </>
  );
}
