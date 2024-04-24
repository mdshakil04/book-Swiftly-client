import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const WhereToNext = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {user ? (
        <div className="  z-10 absolute w-fit -mt-20">
          <div className="  md:flex md:justify-evenly p-4 rounded-xl">
            <h2 className=" text-5xl text-white font-bold">Where To Next, {user?.displayName}?</h2>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default WhereToNext;
