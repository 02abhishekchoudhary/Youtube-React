import { useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;
  const ref = useRef(0);

  return (
    <div className="m-4 p-2 border border-black w-96 h-96">
      <div>
        <button
          className="m-4 p-2 bg-green-200"
          onClick={() => {
            x = x + 1;
            console.log("x" + x);
          }}
        >
          Increse X
        </button>
        <span className="font-bold text-2xl">Let = {x}</span>
      </div>
      <div>
        <button
          className="m-4 p-2 bg-green-200"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increse Y
        </button>
        <span className="font-bold text-2xl">State = {y}</span>
      </div>
      <div>
        <button
          className="m-4 p-2 bg-green-200"
          onClick={() => {
            ref.current = ref.current + 1;
          }}
        >
          Increse Ref
        </button>
        <span className="font-bold text-2xl">Ref = {ref.current}</span>
      </div>
    </div>
  );
};

export default Demo2;
