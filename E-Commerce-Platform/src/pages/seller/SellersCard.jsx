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
      <Card className="w-full" onClick={() => handleSellerClick(seller.id)}>
        <CardHeader shadow={false} floated={false} className="h-48">
          <img
            src={seller.image}
            alt={seller.name}
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
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
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            <CustomRatingIcon />
          </Typography>
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
