import React from "react";
import TopHeader from "../components/shared/TopHeader";
import HeaderTitle from "../components/shared/HeaderTitle";
import ConversationGrid from "./Conversation/ConversationGrid";
import ConversationAge from "./Conversation/ConversationAge";
import ConversationRate from "./Conversation/ConversationRate";
import ConversationProgress from "./Conversation/ConversationProgress";
import ConversationCustomer from "./Conversation/ConversationCustomer";
import ConversationSeller from "./Conversation/ConversationSeller";

function Conversations() {
  return (
    <div className="p-3 flex flex-col gap-3 ">
      <div className="">
        <TopHeader topHead="Conversion & Retention Overview" />
      </div>
      <div className="">
        <ConversationCustomer />
      </div>
      <div className=" mb-4">
        <ConversationSeller />
      </div>
    </div>
  );
}

export default Conversations;
