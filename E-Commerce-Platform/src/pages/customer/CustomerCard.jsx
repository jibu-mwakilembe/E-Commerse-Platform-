import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function CustomerCard({ customer = [] }) {
  const navigate = useNavigate();
  const handleCustomerClick = (id) => {
    navigate(`/customer/${id}`);
  };
  return (
    <div>
      <Card
        onClick={() => handleCustomerClick(customer.Id)}
        className="w-64 h-64 flex flex-col items-center "
      >
        <CardHeader floated={false} className=" h-32 w-32 rounded-full   ">
          <img
            src={customer.image}
            alt="profile-picture"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {customer.name}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            {customer.email}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}

export default CustomerCard;
