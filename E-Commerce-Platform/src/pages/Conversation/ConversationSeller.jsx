import React from "react";
import HeaderTitle from "../../components/shared/HeaderTitle";
import ConversationGrid from "./ConversationGrid";
import ConversationAge from "./ConversationAge";
import ConversationRate from "./ConversationRate";
import TopHeader from "../../components/shared/TopHeader";
import ConversationProgress from "./ConversationProgress";
import ConversationRentation from "./ConversationRentation";

const ageDataSellers = [
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

function ConversationSeller(props) {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <HeaderTitle title="Sellers" />
        <div className=" gap-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
          <div className=" flex flex-col gap-3">
            <ConversationGrid
              allValue="345"
              newValue="26"
              regularValue=" 319"
            />
            <ConversationAge ageData={ageDataSellers} />
          </div>
          <div className="flex-1 ">
            <ConversationRentation />
            <div className="bg-white rounded-md p-2 mt-3  w-full flex-1 border border-gray-200  ">
              <TopHeader topHead="Segmentation by Gender" />
              <div className="">
                <ConversationProgress
                  item="Male"
                  progress="46"
                  value="85,565"
                />
                <ConversationProgress
                  item="Female "
                  progress="54"
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

export default ConversationSeller;
