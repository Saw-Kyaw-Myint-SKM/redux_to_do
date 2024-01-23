import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../features/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const [incrementAmount, setImcrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;
  const dispatch = useDispatch();

  const resetAll = () => {
    setImcrementAmount(0);
    dispatch(reset());
  };

  return (
    <div className="flex items-center justify-center bg-white p-4 max-w-xl mt-40 mx-auto">
      <div>
        <div>
          <p className="text-4xl ml-10 mb-3">{count}</p>
          <button
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <button
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ml-2"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
        </div>
        <div>
          <input
            type="text"
            className=" outline-none border w-16 pl-7 py-2 text-xl ml-6"
            value={incrementAmount}
            onChange={(e) => setImcrementAmount(e.target.value)}
          />
          <div className="flex items-center mt-4 -ml-14">
            <button
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              onClick={() => dispatch(incrementByAmount(addValue))}
            >
              Add Amount
            </button>
            <button
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              onClick={() => resetAll()}
            >
              Rest Amount
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
