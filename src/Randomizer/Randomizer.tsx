import React, { useEffect, useState } from "react";

export const Randomizer: React.FC = () => {
  const [minBreak, setMinBreak] = useState<number>(3);
  const [maxBreak, setMaxBreak] = useState<number>(6);
  const [counter, setCounter] = useState<number>(0);
  const [isLava, setIsLava] = useState<0 | 1>(0);

  useEffect(() => {
    const nextBreak = Math.floor(
      Math.random() * (maxBreak - minBreak) + minBreak
    );

    const nextIsLava = Math.floor(Math.random() * 2) as 0 | 1;
    setIsLava(nextIsLava);

    const timeOutId = setTimeout(() => {
      setCounter((prev) => prev + 1);
    }, nextBreak * 1000);

    return () => clearTimeout(timeOutId);
  }, [counter, minBreak, maxBreak]);

  return (
    <div>
      <h1>GAME FOR KIDS</h1>
      <h2>FLOOR IS LAVA</h2>
      <div>
        <p>Max break: {maxBreak} seconds</p>
        <p>Min break: {minBreak} seconds</p>
        <p>Counter: {counter}</p>
        <p>Floor is {`${!isLava ? "lava" : "not lava"}`}</p>
      </div>
    </div>
  );
};
