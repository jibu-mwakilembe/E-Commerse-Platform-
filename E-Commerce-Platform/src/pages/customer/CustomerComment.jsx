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

function CustomerComment(props) {
  return (
    <div>
      <div className="flex gap-3">
        <Card className="w-full flex-row">
          <CardHeader shadow={false} floated={false} className="h-16 w-16">
            <img
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="user name"
              className="h-full w-full object-cover rounded-full"
            />
          </CardHeader>
          <CardBody className="flex-1">
            <div className="mb-1 ">
              <Typography
                color="blue-gray"
                className="font-bold text-sm text-black"
              >
                Amir Kingstone
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
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface
              </Typography>
            </div>
            <div className=" flex gap-4 mt-4">
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
