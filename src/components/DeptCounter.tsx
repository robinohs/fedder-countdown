import { useEffect, useState } from "react";
import CountDown from "./CountDown";

const DeptCounter = () => {
    const [dept, setDept] = useState(5.3400);
    useEffect(() => {
      const timer = setInterval(() => {
        const newDept = calculateDept();
        setDept(newDept);
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }, []);

    const calculateDept = (): number => {
        const start = new Date("10/18/2021");
        const now = new Date();
        const time = (now.valueOf() - start.valueOf()) / 1000 / 60 / 60 / 24 / 30;
        return time * 0.46;
    }

    return <CountDown title="Schulden:" count={dept.toFixed(8) + "€"} />;
};

export default DeptCounter;