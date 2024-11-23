import React, { useCallback, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import useCustomerStore from "../../store/customerStore";

function CustomerDetailsCard(props) {
  const { getCustomerById, selectedCustomer } = useCustomerStore();
  const { id } = useParams();
  // const customer = customerDataList.find((item) => item.Id === id);
  const fetchCustomer = useCallback(
    () => getCustomerById(id),
    [id, getCustomerById]
  );
  useEffect(() => {
    fetchCustomer();
  }, [fetchCustomer]);

  const customer = selectedCustomer;

  if (!customer) {
    return <p>No customer details...</p>;
  }

  return (
    <div className="flex flex-row  items-center justify-center">
      <Card className="w-full max-w-[48rem] flex  flex-col md:flex-row  ">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none flex flex-col items-center justify-center"
        >
          <div className="h-32 w-32 rounded-full  ">
            <img
              src={customer.image}
              alt={customer.name}
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {customer.name}
            </Typography>
            <Typography color="blue-gray" className="font-medium " textGradient>
              {customer.email}
            </Typography>
          </div>
        </CardHeader>
        <div className="hidden md:block">
          <div className="h-48 w-px bg-gray-300 mx-4 my-4 "></div>
        </div>

        <CardBody className="">
          <Typography variant="h4" color="black" className="mb-4 ">
            Contact information
          </Typography>
          <div className="">
            <Typography variant="h6" color="gray" className="mb-1">
              Email address
            </Typography>
            <Typography color="black" className=" font-normal">
              {customer.email}
            </Typography>
          </div>

          <div className="">
            <Typography variant="h6" color="gray" className="mb-1">
              Phone number
            </Typography>
            <Typography color="black" className=" font-normal">
              {customer.phone}
            </Typography>
          </div>

          <div className="">
            <Typography variant="h6" color="gray" className="mb-1">
              Address
            </Typography>
            <Typography color="black" className=" font-normal">
              {customer.address}
            </Typography>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default CustomerDetailsCard;
