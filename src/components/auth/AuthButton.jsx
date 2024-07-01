import React from "react";

const AuthButton = ({ text, submit }) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={submit}
        className="w-[300px] md:w-[330px] mx-auto my-3 py-3 px-9 rounded-md font-bold outline-none border-none bg-blue-500 text-white"
      >
        {text}
      </button>
    </div>
  );
};

export default AuthButton;
