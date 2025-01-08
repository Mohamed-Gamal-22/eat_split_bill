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
      <form className="lg:w-1/2 w-full  px-2" onSubmit={handleSubmit}>
        <div>
          <h2 className="capitalize mb-3 text-3xl text-white font-bold">
            split bill with {selectedFriend.name}
          </h2>
          <div className=" my-3 bg-slate-200 p-3 rounded-lg py-2 items-center">
            <div className="mb-3 flex flex-col md:flex-row justify-between items-start">
              <label htmlFor="billValue" className="mb-2">
                🤑Bill Value
              </label>
              <input
                value={bill}
                onChange={(e) => setbill(+e.target.value)}
                placeholder="Bill Value..."
                id="billValue"
                type="number"
                className="rounded-md p-1 ms-auto w-full md:w-fit"
              />
            </div>
            <div className="mb-3 flex flex-col md:flex-row justify-between items-start">
              <label htmlFor="expense" className="mb-2">
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
                className="rounded-md p-1 ms-auto w-full md:w-fit"
              />
            </div>
            <div className="mb-3 flex flex-col md:flex-row justify-between items-start">
              <label htmlFor="expense" className="mb-2">
                🤝{selectedFriend.name}'s expenses
              </label>
              <input
                value={friendsPayed}
                type="text"
                disabled
                className="bg-slate-300 ps-2  ms-auto w-full md:w-fit"
              />
            </div>
            <div className="mb-3 flex flex-col md:flex-row justify-between items-start">
              <label className="mb-2">Who is paying the bill</label>
              <select
                className="ms-auto w-full md:w-[190px]"
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
