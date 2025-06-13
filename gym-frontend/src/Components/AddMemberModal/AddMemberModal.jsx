import React from "react";

const AddMemberModal = () => {
  return (
    <div className="text-black">
      <div className="grid gap-5 grid-cols-2 text-lg">
        <input
          type="text"
          className="border-2 rounded-md h-12 text-lg w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 "
          placeholder="Member Name"
        />
        <input
          type="text"
          className="border-2 rounded-md h-12 text-lg w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 "
          placeholder="Mobile Number"
        />
        <input
          type="text"
          className="border-2 rounded-md h-12 text-lg w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 "
          placeholder="Address"
        />
        <input
          type="date"
          className="border-2 rounded-md h-12 text-lg w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 "
        />
        <select className="border-2 rounded-md h-12 text-lg w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 ">
          <option>1 Month Membership</option>
          <option>2 Month Membership</option>
          <option>3 Month Membership</option>
          <option>6 Month Membership</option>
        </select>

        <input type="file" className=" " />

        <div className="w-1/4">
          <img
            className="w-full h-full rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0FpBg5Myb9CQ-bQpFou9BY9JXoRG6208_Q&s"
            alt="img"
          />
        </div>
        <div className="p-3 border-2 w-28 text-lg h-14 text-center bg-slate-900 text-white rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
          Register
        </div>
      </div>
    </div>
  );
};

export default AddMemberModal;
