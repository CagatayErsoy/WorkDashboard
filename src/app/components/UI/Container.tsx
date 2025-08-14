import React from "react";
// This is a container for all the sections
interface ContainerProps {
  children: React.ReactElement;
  title: string;
}
const Container = ({ children, title }: ContainerProps) => {
  return (
    <div className=" w-full h-full border border-indigo-900 p-10 ">
      <h2 className=" text-center text-2xl font-semibold">{title}</h2>
      <div className="flex flex-col align-middle justify-center h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default Container;
