import { RocketIcon } from "lucide-react";
import React from "react";

type Props = {
  degrees: Number;
};

const RocketComponent = ({ degrees }: Props) => {
  return (
    <div className="rocket-shadow">
      <RocketIcon
        size={32}
        className="fill-red-600"
        style={{
          transform: `rotate(${-45 - degrees}deg)`,
          transition: "all",
          animationDuration: "10ms",
        }}
      />
    </div>
  );
};

export default RocketComponent;
