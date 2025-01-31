import CounterChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-row md:flex-col">
      <div className="left w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="students" />
          <UserCard type="teachers" />
          <UserCard type="parents" />
          <UserCard type="staffs" />
        </div>
      </div>
      {/* Middle Charts*/}
      <div className="flex gap-4 flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 h-[450px]">
          <CounterChart />
        </div>
        <div className="w-full lg:w-2/3 h-[450px]"></div>
      </div>
      <div className="right w-full lg:1/3"></div>
    </div>
  );
};

export default AdminPage;
