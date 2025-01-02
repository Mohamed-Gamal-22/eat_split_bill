import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FriendList from "./Components/FriendsList/FriendList";
import SplitBill from "./Components/SplitBill/SplitBill";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container w-[90%] py-5 mx-auto p-4 lg:items-start bg-gray-400 my-7 flex gap-5 justify-center items-center flex-col lg:flex-row">
        <FriendList />
        <SplitBill />
      </div>
    </>
  );
}

export default App;
