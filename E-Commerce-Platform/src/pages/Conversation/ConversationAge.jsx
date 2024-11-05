import React from "react";
import ConversationProgress from "./ConversationProgress";
import TopHeader from "../../components/shared/TopHeader";
const ageData = [
  {
    item: "Age 18 - 25 ",
    progress: "70",
    value: "85,565",
  },

  {
    item: "Age 26 - 45 ",
    progress: "16",
    value: "85,565",
  },

  {
    item: "Age 46 - 65 ",
    progress: "10",
    value: "85,565",
  },
  {
    item: "Age over 65  ",
    progress: "4",
    value: "85,565",
  },
];

function ConversationAge({ ageData = [] }) {
  return (
    <div className="bg-white rounded-md p-2 mt-2  w-110  border border-gray-200  ">
      <div className="">
        <TopHeader topHead="Demographic segmentation by Age" />
      </div>
      <div className="w-full ">
        {ageData.map((data, index) => (
          <ConversationProgress
            key={index}
            item={data.item}
            progress={data.progress}
            value={data.value}
          />
        ))}
      </div>
    </div>
  );
}

export default ConversationAge;
