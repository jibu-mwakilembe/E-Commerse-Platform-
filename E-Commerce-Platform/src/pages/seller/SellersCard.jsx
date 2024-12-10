import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Rating,
} from "@material-tailwind/react";
import { CustomRatingIcon } from "../product/Rating";

import { useNavigate } from "react-router-dom";

function SellersCard({ seller = [] }) {
  const navigate = useNavigate();
  const handleSellerClick = (id) => {
    navigate(`/sellers/${id}`);
  };
  return (
    <div className="">
      <Card
        className="w-full flex flex-col items-center "
        onClick={() => handleSellerClick(seller.id)}
      >
        <CardHeader shadow={false} floated={false} className="h-32 w-32">
          <img
            src={seller.image}
            alt={seller.name}
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="text-center">
          <div className="mb-1 ">
            <Typography
              color="blue-gray"
              className="font-bold text-sm text-black"
            >
              {seller.name}-{seller.id}
            </Typography>
          </div>
          <div className="mb-1">
            <Typography
              variant="small"
              color="gray"
              className="font-normal text-xs opacity-75"
            >
              {seller.details}
            </Typography>
          </div>
          {/* <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            <CustomRatingIcon />
          </Typography> */}
          <div className="font-normal opacity-0.75 text-gray-500 text-sm">
            <CustomRatingIcon />
          </div>
          <Typography>
            <div className="place-self-end">
              <strong className="font-bold text-base text-black">
                {seller.price}
              </strong>
            </div>
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}

export default SellersCard;
