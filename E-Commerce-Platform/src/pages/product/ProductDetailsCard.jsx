import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import { CustomRatingIcon } from "./Rating";
import TopHeader from "../../components/shared/TopHeader";
import { useParams } from "react-router-dom";
import useProductStore from "../../store/productStore";

function ProductDetailsCard(props) {
  const { id } = useParams();
  const { selectedProduct, getProductById } = useProductStore();
  // const product = productDataList.find((item) => item.Id === id);
  useEffect(() => {
    getProductById(id);
  }, [id, getProductById]);

  const product = selectedProduct;

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <Card className="w-full px-4 py-2  ">
        <div className="flex">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/4 h-96 shrink-0 rounded-r-none rounded-lg"
          >
            <img
              src={product.image}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {product.name}
            </Typography>
            <Typography color="gray" className="mb-2 font-normal">
              {product.details}
            </Typography>
            <div className="flex justify-between gap-4 text-sm text-gray-500 mb-3">
              <div className="">
                <CustomRatingIcon />
              </div>
              <div className="">
                <span>121 Reviews</span>
              </div>
              <div className="">
                <span>89 Sold</span>
              </div>
              <div className="pr-3">
                <span>13 Remaining</span>
              </div>
            </div>
            <div className="border-t border-b border-gray-300 py-2 px-6 ">
              <TopHeader topHead={product.price} />
            </div>
          </CardBody>
        </div>
        <div className="mt-3">
          <div className="flex gap-3">
            <div className="h-24 w-24  ">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover rounded-lg ring-2 ring-gray-500"
              />
            </div>
            <div className="h-24 w-24">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover rounded-lg ring-2 ring-gray-500"
              />
            </div>
            <div className="h-24 w-24">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover rounded-lg ring-2 ring-gray-500"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ProductDetailsCard;
