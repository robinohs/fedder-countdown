import { useEffect, useState } from "react";
import CountDown from "./CountDown";

const CountdownUntilPlay = () => {
    const [remainingTime, setRemainingTime] = useState<number | null>(null);
    useEffect(() => {
        const timer = setInterval(() => {
          const timeLeft = calculateTimeLeft();
          setRemainingTime(timeLeft);
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    const calculateTimeLeft = (): number => {
        const now = new Date();
        const end = new Date("01/01/2023");
        return Math.floor((+end - +now) / 1000);
      }

    return (
      <CountDown title="Zeit bis Vertragsende:" count={remainingTime} />
    );
}

export default CountdownUntilPlay