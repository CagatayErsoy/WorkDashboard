import React from "react";
import { Progress } from "@/components/ui/progress";
const GeneralProgress = () => {
  return (
    <div className="flex flex-col align-middle justify-center ">
      <ul className="flex flex-col align-middle justify-center">
        <li>
          <div>Jobs Apllied</div>
          <Progress value={33} />
        </li>
        <li>
          <div>Coded</div>
          <Progress value={33} />
        </li>
        <li>
          <div>Income</div>
          <Progress value={33} />
        </li>
        <li>
          <div>Gym</div>
          <Progress value={33} />
        </li>
      </ul>
    </div>
  );
};

export default GeneralProgress;
