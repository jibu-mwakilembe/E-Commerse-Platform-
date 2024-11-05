import { Rating } from "@material-tailwind/react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function RatedIcon() {
  return (
    <div className="">
      <AiFillStar />
    </div>
  );
}

function UnratedIcon() {
  return (
    <div className="">
      <AiOutlineStar />
    </div>
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
