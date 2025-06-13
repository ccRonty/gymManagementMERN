import React, { useState } from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddCardIcon from "@mui/icons-material/AddCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Modal from "../../Components/Modal/Modal";
import { Link } from "react-router-dom";
import MemberCard from "../../Components/MemberCard/MemberCard";
import AddMembership from "../../Components/AddMembership/AddMembership";
import AddMemberModal from "../../Components/AddMemberModal/AddMemberModal";
import { useEffect } from "react";

const Member = () => {
  const [addMembership, setAddMembership] = useState(false);
  const [addMember, setAddMember] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [dataStartFrom, setDataStartFrom] = useState(0);
  const [dataEndAt, setDataEndAt] = useState(12);
  const [totalData, setTotalData] = useState(0);

  const [numberOfPage, setNumberOfPage] = useState(0);
  const [memberLimit, setMemberLimit] = useState(12);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let totalData = 52;
    setTotalData(totalData);

    let extraPage = totalData % memberLimit == 0 ? 0 : 1;
    let totalPage = parseInt(totalData / memberLimit) + extraPage;

    setNumberOfPage(totalPage);

    if (totalData == 0) {
      setDataStartFrom(-1);
      setDataEndAt(0);
    } else if (totalData <= 12) {
      setDataStartFrom(0);
      setDataEndAt(totalData);
    }
  };

  const handleMembership = () => {
    setAddMembership((prev) => !prev);
  };

  const handleMember = () => {
    setAddMember((prev) => !prev);
  };

  const handlePrevBtn = () => {
    if (currentPage !== 1) {
      let currPage = currentPage - 1;
      setCurrentPage(currPage);
      var dataFrom = (currPage - 1) * 12;
      var dataTo = currPage * 12;

      setDataStartFrom(dataFrom);
      setDataEndAt(dataTo);
    }
  };

  const handleNextBtn = () => {
    if (currentPage !== numberOfPage) {
      let currPage = currentPage + 1;
      setCurrentPage(currPage);
      var dataFrom = (currPage - 1) * 12;
      var dataTo = currPage * 12;

      if (dataTo > totalData) {
        dataTo = totalData;
      }

      setDataStartFrom(dataFrom);
      setDataEndAt(dataTo);
    }
  };

  return (
    <div className="text-black p-5 w-3/4 h-[100vh]">
      {/* //block for banner */}
      <div className="border-2 bg-slate-900 flex justify-between w-full text-white rounded-lg p-3">
        <div
          className="border-2 pr-3 pl-3 pt-1 pb-1 rounded-2xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          onClick={() => handleMember()}
        >
          Add Member <PersonAddIcon />
        </div>
        <div
          className="border-2 pr-3 pl-3 pt-1 pb-1 rounded-2xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          onClick={() => handleMembership()}
        >
          Add Membership <AddCardIcon />
        </div>
      </div>
      {/* block for back to dashboard btn */}
      <Link to={"/dashboard"}>
        <ArrowBackIcon /> Back to Dashboard
      </Link>

      {/* Block for search bar */}
      <div className="mt-5 w-1/2 flex gap-2">
        <input
          type="text"
          className="border-2 w-full p-2 rounded-lg"
          placeholder="Search by name or phone"
        />
        <div className="bg-slate-900 p-3 border-2 text-white rounded-lg cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black">
          <SearchIcon />
        </div>
      </div>

      {/* Block for main members content */}
      <div className="mt-5 text-xl flex justify-between text-slate-900">
        <div>Total Members</div>
        <div className="flex gap-5 ">
          <div>
            {dataStartFrom + 1} - {dataEndAt} of {totalData} members
          </div>
          <div
            className={`w-8 h-8 cursor-pointer border-2 flex items-center justify-center hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ${
              currentPage === 1 ? "bg-gray-200 text-gray-400" : null
            }`}
            onClick={() => handlePrevBtn()}
          >
            <ArrowCircleLeftIcon />
          </div>
          <div
            className={`w-8 h-8 cursor-pointer border-2 flex items-center justify-center hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ${
              currentPage === numberOfPage ? "bg-gray-200 text-gray-400" : null
            }`}
            onClick={() => handleNextBtn()}
          >
            <ArrowCircleRightIcon />
          </div>
        </div>
      </div>

      <div className="bg-slate-100 p-5 mt-5 rounded-lg grid gap-2 grid-cols-4 overflow-x-auto h-[65%]">
        {/* Card for single member */}
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
      </div>

      {addMember && (
        <Modal
          handleCloseButton={handleMember}
          content={<AddMemberModal />}
          header="Add Member"
        />
      )}

      {addMembership && (
        <Modal
          handleCloseButton={handleMembership}
          content={<AddMembership />}
          header="Add Membership"
        />
      )}
    </div>
  );
};

export default Member;
