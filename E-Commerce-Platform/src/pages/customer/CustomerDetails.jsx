import React, { useState } from "react";
import BackButton from "../../components/BackButton";
import CustomerDetailsCard from "./CustomerDetailsCard";
import { Link, Outlet, useParams } from "react-router-dom";

function CustomerDetails(props) {
  const [activeLink, setActiveLink] = useState(null);
  const { id } = useParams();

  const handleLink = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="p-3 flex   flex-col gap-3">
      <div className="">
        <BackButton backTitle="Back to Customers" backLink="/customers" />
      </div>
      <div className="">
        <CustomerDetailsCard />
      </div>
      <div className="px-4 mt-4 ">
        <div className=" w-full border border-gray-200 px-3 rounded-lg">
          <nav className="flex gap-7 text-gray-500 px-4 ">
            <Link
              to={`/customer/${id}/purchases`}
              onClick={() => handleLink("purchases")}
              className={` ${
                activeLink === "purchases"
                  ? "border-b-4 w-24 border-blue-500 flex justify-center items-center py-2"
                  : "py-2"
              } `}
            >
              Purchases
            </Link>
            <Link
              to={`/customer/${id}/comments`}
              onClick={() => handleLink("comments")}
              className={` ${
                activeLink === "comments"
                  ? "border-b-4 w-24  border-blue-500 flex justify-center items-center  py-2"
                  : "py-2"
              } `}
            >
              Comments
            </Link>
            <Link
              to={`/customer/${id}/security`}
              onClick={() => handleLink("security")}
              className={` ${
                activeLink === "security"
                  ? "border-b-4 w-24 flex justify-center items-center  border-blue-500 py-2  "
                  : "py-2"
              } `}
            >
              Security
            </Link>
          </nav>
        </div>
        <div className="">{<Outlet />}</div>
      </div>
    </div>
  );
}

export default CustomerDetails;
