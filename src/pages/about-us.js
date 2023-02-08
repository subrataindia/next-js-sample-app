import React from "react";

const Page = () => {
  const x = 5;
  return (
    <>
      <h1 className="title">About Us Page</h1>
      <style jsx>
        {`
          .title {
            color: ${x > 3 ? "red" : "blue"};
          }
        `}
      </style>
    </>
  );
};

export default Page;
