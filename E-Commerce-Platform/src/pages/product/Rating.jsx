import { Rating } from "@material-tailwind/react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function RatedIcon() {
  return (
    <span className="">
      <AiFillStar />
    </span>
  );
}

function UnratedIcon() {
  return (
    <span className="">
      <AiOutlineStar />
    </span>
  );
}

export function CustomRatingIcon() {
  return (
    <Rating
      ratedColor="red"
      ratedIcon={<RatedIcon />}
      unratedIcon={<UnratedIcon />}
    />
  );
}
