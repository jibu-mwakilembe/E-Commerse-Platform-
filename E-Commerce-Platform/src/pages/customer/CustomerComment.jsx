import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Rating,
} from "@material-tailwind/react";
import { Button } from "@mui/material";

function CustomerComment({ image, name, comment }) {
  return (
    <div>
      <div className="flex gap-3">
        <Card className="w-full flex flex-wrap lg:flex-row md:flex-cols">
          <CardHeader shadow={false} floated={false} className="h-16 w-16 ">
            <img
              // src="https://docs.material-tailwind.com/img/team-3.jpg"
              src={image}
              alt={name}
              className="h-full w-full object-cover rounded-full"
            />
          </CardHeader>
          <CardBody className="flex-1">
            <div className="mb-1 ">
              <Typography
                color="blue-gray"
                className="font-bold text-sm text-black"
              >
                {name}
              </Typography>
            </div>
            <div className="mb-1">
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-xs opacity-75"
              >
                4 days ago
              </Typography>
            </div>
            <div className="">
              <Typography
                variant="lead"
                color="black"
                className="mt-3 font-normal"
              >
                {comment}
              </Typography>
            </div>
            <div className=" flex flex-wrap md:flex-cols lg:flex-row gap-4 mt-4">
              <div className="">
                <Button variant="outlined" sx={{ borderRadius: "20px" }}>
                  Repray
                </Button>
              </div>
              <div className="">
                <Button variant="outlined" sx={{ borderRadius: "20px" }}>
                  View all 4 replies
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default CustomerComment;
