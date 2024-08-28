import React from "react";
import { useParams } from "react-router-dom";

function User() {
  let { userid } = useParams();
  return (
    <>
      <h1 className="bg-gray-700 text-center text-white p-4 text-3xl">
        User:{userid}
      </h1>
    </>
  );
}

export default User;
