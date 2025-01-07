import React from "react";
import Button from "./../Button/Button";

export default function SplitBill() {
  return (
    <>
      <div className="sm:max-lg:w-full">
        <h2 className="text-2xl  capitalize mb-3">split bill with fathy</h2>
        <div className=" my-3 bg-slate-200 p-3 rounded-lg py-2 items-center">
          <div className="mb-3 flex justify-between items-center">
            <label htmlFor="billValue" className="">
              🤑Bill Value
            </label>
            <input
              placeholder="Bill Value..."
              id="billValue"
              type="text"
              className="rounded-md p-1 ms-3"
            />
          </div>
          <div className="mb-3 flex justify-between">
            <label htmlFor="expense" className="">
              🙎‍♂️Your expense
            </label>
            <input
              placeholder="Your expense..."
              id="expense"
              type="text"
              className="rounded-md p-1 ms-3"
            />
          </div>
          <div className="mb-3 flex justify-between">
            <label htmlFor="expense" className="">
              🤝Fathy's expenses
            </label>
            <input
              type="text"
              disabled
              className="bg-slate-300 w-1/3 py-1 rounded-md"
            />
          </div>
          <div className="mb-3 flex justify-between">
            <label htmlFor="">Who is paying the bill</label>
            <select name="" id="" className="w-1/3">
              <option value="you">You</option>
              <option value="friend">fathy</option>
            </select>
          </div>
          <Button full={true}>Split Bill</Button>
        </div>
      </div>

      {/* <Button full={true}>Add Friend</Button> */}
    </>
  );
}
