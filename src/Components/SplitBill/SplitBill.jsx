import React, { useEffect, useState } from "react";
import Button from "./../Button/Button";

export default function SplitBill({ selectedFriend, splitTheBill }) {
  const [bill, setbill] = useState("");
  const [myPayment, setmyPayment] = useState("");
  const [whoPay, setwhoPay] = useState("you");
  const friendsPayed = bill - myPayment;

  function handleSubmit(e) {
    e.preventDefault();
    whoPay !== "friend"
      ? splitTheBill(bill - myPayment)
      : splitTheBill(-myPayment);

    setbill("");
    setmyPayment("");
  }

  useEffect(() => {
    setbill("");
    setmyPayment("");
    setwhoPay("");
  }, [selectedFriend]);

  return (
    <>
      <form className="lg:w-1/2 w-full px-2" onSubmit={handleSubmit}>
        <div>
          <h2 className="capitalize mb-3 text-3xl text-white font-bold">
            split bill with {selectedFriend.name}
          </h2>
          <div className=" my-3 bg-slate-200 p-3 rounded-lg py-2 items-center">
            <div className="mb-3 flex justify-between items-center">
              <label htmlFor="billValue" className="">
                🤑Bill Value
              </label>
              <input
                value={bill}
                onChange={(e) => setbill(+e.target.value)}
                placeholder="Bill Value..."
                id="billValue"
                type="number"
                className="rounded-md p-1 ms-3"
              />
            </div>
            <div className="mb-3 flex justify-between">
              <label htmlFor="expense" className="">
                🙎‍♂️Your expense
              </label>
              <input
                value={myPayment}
                onChange={(e) =>
                  +e.target.value > bill
                    ? myPayment
                    : setmyPayment(+e.target.value)
                }
                placeholder="Your expense..."
                id="expense"
                type="number"
                className="rounded-md p-1 ms-3"
              />
            </div>
            <div className="mb-3 flex justify-between">
              <label htmlFor="expense" className="">
                🤝{selectedFriend.name}'s expenses
              </label>
              <input
                value={friendsPayed}
                type="text"
                disabled
                className="bg-slate-300 ps-2  w-1/3 py-1 rounded-md"
              />
            </div>
            <div className="mb-3 flex justify-between">
              <label htmlFor="">Who is paying the bill</label>
              <select
                className="w-1/3"
                value={whoPay}
                onChange={(e) => setwhoPay(e.target.value)}
              >
                <option value="you">You</option>
                <option value="friend">{selectedFriend.name}</option>
              </select>
            </div>
            <Button full={true}>Split Bill</Button>
          </div>
        </div>
      </form>

      {/* <Button full={true}>Add Friend</Button> */}
    </>
  );
}
