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
import { CustomRatingIcon } from "./Rating";
function ProductCard({ product = [] }) {
  return (
    <div className="">
      <Card className="w-full">
        <CardHeader shadow={false} floated={false} className="h-48">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-1 ">
            <Typography
              color="blue-gray"
              className="font-bold text-sm text-black"
            >
              {product.name}
            </Typography>
          </div>
          <div className="mb-1">
            <Typography
              variant="small"
              color="gray"
              className="font-normal text-xs opacity-75"
            >
              {product.details}
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
                {product.price}
              </strong>
            </div>
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}

export default ProductCard;