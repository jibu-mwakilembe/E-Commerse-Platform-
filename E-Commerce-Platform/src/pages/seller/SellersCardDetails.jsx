import React, { useCallback, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import useSellerStore from "../../store/SellerStore";

function SellersCardDetails(props) {
  const { getSellerById, selectedSeller } = useSellerStore();
  const { id } = useParams();
  // const customer = customerDataList.find((item) => item.Id === id);
  const fetchSeller = useCallback(() => getSellerById(id), [id, getSellerById]);
  useEffect(() => {
    fetchSeller();
  }, [fetchSeller]);

  const seller = selectedSeller;

  if (!seller) {
    return <p>No seller details...</p>;
  }

  return (
    <div className="flex flex-row  items-center justify-center">
      <Card className="w-full max-w-[48rem] flex  flex-col md:flex-row  ">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 lg:w-2/5 md:w-full sm:w-full shrink-0 rounded-r-none flex flex-col items-center justify-center"
        >
          <div className="h-32 w-32 rounded-full  ">
            <img
              src={seller.image}
              alt={seller.name}
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {seller.name}
            </Typography>
            <Typography color="blue-gray" className="font-medium " textGradient>
              {seller.email}
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
              {seller.email}
            </Typography>
          </div>

          <div className="">
            <Typography variant="h6" color="gray" className="mb-1">
              Phone number
            </Typography>
            <Typography color="black" className=" font-normal">
              {seller.phone}
            </Typography>
          </div>

          <div className="">
            <Typography variant="h6" color="gray" className="mb-1">
              Address
            </Typography>
            <Typography color="black" className=" font-normal">
              {seller.address}
            </Typography>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default SellersCardDetails;
