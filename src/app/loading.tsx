import Loader from "@/ui/atoms/Loader";
import React from "react";

const loading = () => {
  return (
    <div className="bg-black/70 fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
      <Loader />
    </div>
  );
};

export default loading;
