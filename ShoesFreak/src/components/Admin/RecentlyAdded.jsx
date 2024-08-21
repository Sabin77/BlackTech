import React from "react";
import defaultImg from "../../assets/defprof.jpg";

function timeAgo(date) {
  const now = new Date();
  const secondsPast = (now.getTime() - new Date(date).getTime()) / 1000;

  if (secondsPast < 60) {
    return `${Math.round(secondsPast)} seconds ago`;
  } else if (secondsPast < 3600) {
    return `${Math.round(secondsPast / 60)} minutes ago`;
  } else if (secondsPast < 86400) {
    return `${Math.round(secondsPast / 3600)} hours ago`;
  } else {
    return `${Math.round(secondsPast / 86400)} days ago`;
  }
}

function RecentlyAdded({ suppliers }) {
  const sortedSuppliers = [...suppliers].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className=" shadow-md rounded-lg w-1/2 bg-white overflow-y-scroll">
      <h1 className=" m-5 font-semibold text-xl">Recently Added</h1>
      {sortedSuppliers.map((supplier) => (
        <div className=" border-2 m-4 rounded-lg shadow-md " key={supplier._id}>
          <div className=" flex items-center h-16">
            <div className=" border-2 h-10 w-10 rounded-full m-2">
              {" "}
              <img
                src={supplier.companylogo ? supplier.companylogo : defaultImg}
                alt={supplier.name}
                className=" h-10 w-10 rounded-full"
              />
            </div>
            <div className=" flex flex-col justify-center pl-4 w-2/3 h-10">
              <h2 className=" font-semibold">{supplier.name}</h2>
              <p className=" text-sm">{supplier.companyname}</p>
            </div>
            <div className=" w-28 h-10">
              <p className=" text-center text-gray-400 ">
                {" "}
                {timeAgo(supplier.date)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentlyAdded;
