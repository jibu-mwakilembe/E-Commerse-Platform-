import React from "react";
import HeaderTitle from "../../components/shared/HeaderTitle";
import ConversationGrid from "./ConversationGrid";
import ConversationAge from "./ConversationAge";
import ConversationRate from "./ConversationRate";
import TopHeader from "../../components/shared/TopHeader";
import ConversationProgress from "./ConversationProgress";
const ageDataCustomer = [
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

function ConversationCustomer(props) {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <HeaderTitle title="Customers" />
        <div className="flex gap-3  ">
          <div className=" flex flex-col gap-3">
            <ConversationGrid
              allValue="20,345"
              newValue="3,456"
              regularValue=" 16,889"
            />
            <ConversationAge ageData={ageDataCustomer} />
          </div>
          <div className="flex-1 ">
            <ConversationRate />
            <div className="bg-white rounded-md p-2 mt-3  w-full flex-1 border border-gray-200  ">
              <TopHeader topHead="Segmentation by Gender" />
              <div className="">
                <ConversationProgress
                  item="Male"
                  progress="84"
                  value="85,565"
                />
                <ConversationProgress
                  item="Female "
                  progress="36"
                  value="85,565"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConversationCustomer;