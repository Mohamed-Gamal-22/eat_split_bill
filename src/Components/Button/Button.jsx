import React from "react";

export default function Button(props) {
  return (
    <button
      className={`bg-emerald-500 transition-all duration-300 hover:bg-emerald-600 text-white p-2 px-4 rounded-lg pointer ms-auto ${
        props.full ? "w-full" : ""
      }`}
    >
      {props.children}
    </button>
  );
}
