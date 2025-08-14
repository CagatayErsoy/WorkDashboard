import React from "react";

const Header = () => {
  return (
    <div className="w-full flex flex-col align-center justify-center h-30">
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        Work Dashboard
      </h1>
      {/* Inspriational quote  */}
      <p className="scroll-m-20 text-xl font-semibold tracking-tight text-center">
        {" "}
        work hard play hard
      </p>
    </div>
  );
};

export default Header;
