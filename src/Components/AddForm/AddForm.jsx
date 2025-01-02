import React from "react";
import Button from "../Button/Button";

export default function AddForm() {
  return (
    <>
      <div className="flex justify-between  py-2 items-center">
        <label htmlFor="name" className="">
          👦Friend Name
        </label>
        <input
          placeholder="Name..."
          id="name"
          type="text"
          className="rounded-md p-1"
        />
      </div>
      <div className="flex justify-between  py-2 items-center">
        <label htmlFor="img" className="">
          🖼️Image URL
        </label>
        <input
          placeholder="Image URL"
          id="img"
          type="text"
          className="rounded-md p-1"
        />
      </div>
      <Button full={true}>Add Friend</Button>
    </>
  );
}
