import React from "react";

const MiddleReactangle = () => {
  return (
    <div className=" bg-blue-200  ">
      <div className=" max-w-7xl  flex flex-col  items-center ">
        <div className="text-3xl mt-10 font-semibold">
          How Do I <span className="text-blue-700">Refer?</span>
        </div>
        <div className="relative w-3/4 flex justify-around  p-7">
          <img className="absolute" src="/bg.png" />
          <div className=" flex flex-col items-center w-40 text-center mt-20 z-10">
            <img className="w-20" src="/profile.png" />

            <p>Submit referrals easily via our website's referral section.</p>
          </div>
          <div className=" flex flex-col items-center w-40 text-center mt-20 z-10">
            <img className="w-20" src="/profile.png" />
            <p>Earn rewards once your referral joins an Accredian program.</p>
          </div>
          <div className=" flex flex-col items-center w-40 text-center mt-20 z-10">
            <img className="w-20" src="/profile.png" />
            <p>
              Both parties receive a bonus 30 days after program enrollment.
            </p>
          </div>
        </div>
        <div className="mt-20">
          <button className="bg-blue-700 text-white px-8 py-2 rounded-lg my-10">
            Refer Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiddleReactangle;
