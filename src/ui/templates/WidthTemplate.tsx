import React, { FC } from "react";

interface IWidthTemplate {
  children: React.ReactNode;
}

const WidthTemplate: FC<IWidthTemplate> = ({ children }) => {
  return (
    <div className="w-full max-w-screen-2xl flex justify-center mx-auto ">
      {children}
    </div>
  );
};

export default WidthTemplate;
