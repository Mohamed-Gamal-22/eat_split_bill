import React, { useState } from "react";
import Button from "../Button/Button";
import Swal from "sweetalert2";

export default function AddForm({ addFriend }) {
  const [name, setname] = useState("");
  const [image, setimage] = useState("https://i.pravatar.cc/150");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Name or Image not included",
      });
      return;
    }

    const id = crypto.randomUUID();

    let newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    console.log(newFriend);
    setname("");
    setimage("");
    addFriend(newFriend);
    Swal.fire({
      position: "center-center",
      icon: "success",
      title: "You Added Friend Successfully",
      showConfirmButton: false,
      timer: 1500
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row  justify-between py-2 sm:items-start">
          <label htmlFor="name" className="text-white text-left mb-2 md:md-0">
            👦Friend Name
          </label>
          <input
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Name..."
            id="name"
            type="text"
            className="rounded-md p-1 w-full md:w-fit"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between py-2 sm:items-start mb-5">
          <label htmlFor="img" className="text-white mb-2 md:md-0">
            🖼️Image URL
          </label>
          <input
            value={image}
            onChange={(e) => setimage(e.target.value)}
            placeholder="Image URL"
            id="img"
            type="text"
            className="rounded-md text-dark p-1 w-full md:w-fit"
          />
        </div>
        <Button full={true}>Add Friend</Button>
      </form>
    </>
  );
}
