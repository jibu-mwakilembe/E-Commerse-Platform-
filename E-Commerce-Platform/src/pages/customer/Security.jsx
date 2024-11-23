import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import useCustomerStore from "../../store/customerStore";
import { useNavigate, useParams } from "react-router-dom";

function Security(props) {
  const { deleteCustomer } = useCustomerStore();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelate = () => {
    console.log("Delete customer with id:", id);
    deleteCustomer(id);
    navigate("/customers");
  };
  return (
    <div className="flex flex-col p-3 ">
      <div
        className="h-24 w-2/4 bg-red-700 rounded-md flex justify-center items-center text-white  p-4"
        onClick={handleDelate}
      >
        <div className="flex-1">
          <h1 className="text-xl">Delete Customer</h1>
          <p className="text-xs">
            You are about to delete ‘Amir Kingstone’. Note that this action is
            not reversible.
          </p>
        </div>
        <NavigateNextIcon />
      </div>
      security
    </div>
  );
}

export default Security;
