import React from "react";

const AddMembership = () => {
  return (
    <div className="text-black ">
      <div className="flex flex-wrap gap-5 items-center justify-center">
        {/* single block for membership details */}
        <div className="text-lg bg-slate-900 text-white border-2 pl-2 pr-2 flex-col gap-3 justify-between pt-1 pb-1 rounded-xl font-semibold hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div>1 Month Membership</div>
          <div>Rs. 1000</div>
        </div>
        {/* single block for membership details */}
        <div className="text-lg bg-slate-900 text-white border-2 pl-2 pr-2 flex-col gap-3 justify-between pt-1 pb-1 rounded-xl font-semibold hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div>1 Month Membership</div>
          <div>Rs. 1000</div>
        </div>
      </div>
      <hr className="mt-10 mb-10" />
      <div className="flex gap-10 mt-10 mb-10">
        <input
          type="number"
          className="border-2 rounded-lg text-lg w-1/3 h-1/2 p-2"
          placeholder="Type number of months"
        />
        <input
          type="number"
          className="border-2 rounded-lg text-lg w-1/3 h-1/2 p-2"
          placeholder="Enter membership price"
        />
        <div className="text-lg border-2 p-1 mt-0 rounded-xl w-auto cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Add +
        </div>
      </div>
    </div>
  );
};

export default AddMembership;
