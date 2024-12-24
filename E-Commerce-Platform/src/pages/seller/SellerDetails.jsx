import React, { useState } from "react";
import BackButton from "../../components/BackButton";
import { Link, Outlet, useParams } from "react-router-dom";
import SellersCardDetails from "./SellersCardDetails";

function SellerDetails(props) {
  const [activeLink, setActiveLink] = useState(null);
  const { id } = useParams();

  const handleLink = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="px-3 py-12 flex   flex-col gap-3">
      <div className="">
        <BackButton backTitle="Back to Sellers" backLink="/sellers" />
      </div>
      <div className="">
        <SellersCardDetails />
      </div>
      <div className="px-4 mt-4 ">
        <div className=" w-full border border-gray-200 px-3 rounded-lg">
          <nav className="flex gap-7 text-black px-4 ">
            <Link
              to={`/sellers/${id}/products`}
              onClick={() => handleLink("products")}
              className={` ${
                activeLink === "products"
                  ? "border-b-4 w-24 border-blue-500 flex justify-center items-center py-2"
                  : "py-2"
              } `}
            >
              Products
            </Link>
            <Link
              to={`/sellers/${id}/sellersactivity`}
              onClick={() => handleLink("comments")}
              className={` ${
                activeLink === "comments"
                  ? "border-b-4 w-24  border-blue-500 flex justify-center items-center  py-2"
                  : "py-2"
              } `}
            >
              Sale activity
            </Link>
            <Link
              to={`/sellers/${id}/security`}
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

export default SellerDetails;
