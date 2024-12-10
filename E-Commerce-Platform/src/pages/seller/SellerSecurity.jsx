import React, { useEffect, useCallback } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate, useParams } from "react-router-dom";
import useSellerStore from "../../store/SellerStore";

function SellerSecurity(props) {
  const { deleteSeller, getSellerById, selectedSeller } = useSellerStore();
  const { id } = useParams();
  const navigate = useNavigate();
  const fetchSeller = useCallback(() => getSellerById(id), [id, getSellerById]);

  useEffect(() => {
    fetchSeller();
  }, [fetchSeller]);

  const seller = selectedSeller;

  const handleDelate = () => {
    console.log("Delete Seller with id:", id);
    deleteSeller(id);
    navigate("/sellers");
  };
  return (
    <div className="flex flex-col p-3 ">
      <div
        className="h-24 w-2/4 bg-red-700 rounded-md flex justify-center items-center text-white  p-4"
        onClick={handleDelate}
      >
        <div className="flex-1">
          <h1 className="text-xl">Delete Seller</h1>
          <p className="text-xs">
            You are about to delete {seller.name}. Note that this action is not
            reversible.
          </p>
        </div>
        <NavigateNextIcon />
      </div>
    </div>
  );
}

export default SellerSecurity;
