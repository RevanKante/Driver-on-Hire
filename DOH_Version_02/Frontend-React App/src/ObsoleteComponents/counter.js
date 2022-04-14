import { useEffect, useState } from "react";

export default function Counter() {

     const storedValueAsNumber = Number(localStorage.getItem('count'));
   const [count, setCount] = useState(
     Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 0
   );
     //const [count, setCount] = useState(0);

    useEffect(() => {
        localStorage.setItem('count', String(count));
      }, [count]);
  
    return (
      <div>
        <div>{count}</div>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
      </div>
    );
  }