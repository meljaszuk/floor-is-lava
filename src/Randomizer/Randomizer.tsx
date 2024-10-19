import React, { useEffect, useState, useMemo } from "react";
import LavaSound from "./lava.mp3";
import NotLavaSound from "./not-lava.mp3";
import FloorIsSound from "./floor-is.mp3";

export const Randomizer: React.FC = () => {
  const [minBreak, setMinBreak] = useState<number>(4);
  const [maxBreak, setMaxBreak] = useState<number>(8);
  const [counter, setCounter] = useState<number>(0);
  const [isLava, setIsLava] = useState<0 | 1>(0);

  const lava = useMemo(() => new Audio(LavaSound), []);
  const notLava = useMemo(() => new Audio(NotLavaSound), []);
  const floorIs = useMemo(() => new Audio(FloorIsSound), []);

  useEffect(() => {
    lava.pause();
    lava.currentTime = 0;

    notLava.pause();
    notLava.currentTime = 0;

    if (isLava === 0) {
      notLava.play();
    }
    if (isLava === 1) {
      lava.play();
    }
  }, [counter]);

  useEffect(() => {
    const nextBreak = Math.floor(
      Math.random() * (maxBreak - minBreak) + minBreak
    );

    const nextIsLava = Math.floor(Math.random() * 2) as 0 | 1;
    setIsLava(nextIsLava);
    floorIs.pause();
    floorIs.currentTime = 0;
    floorIs.play();
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
      </div>
    </div>
  );
};
