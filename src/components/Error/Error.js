import React from "react";
import Navbar from "../../pages/Navigation/Navbar";
import Errors from "../../pages/error/Error";

const Error = () => {
  return (
    <>
      <main>
        <Navbar />
        <section>
          <Errors/>
        </section>
      </main>
    </>
  );
};

export default Error;
