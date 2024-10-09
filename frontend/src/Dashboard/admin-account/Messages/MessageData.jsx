import { useState } from "react";
import Messages from "./Messages";
import ViewMessage from "./ViewMessage";

const MessageData = () => {
  const [view, setView] = useState(false);
  const [messageID, setMessageID] = useState("");

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-5">
          Messages
        </h2>
        {view && (
          <button
            onClick={() => setView(false)}
            className=" bg-primaryColor text-white leading-9 rounded-lg pt-0.5 px-4 mt-[-.25rem] mb-5"
          >
            Back
          </button>
        )}
      </div>
      {view ? (
        <ViewMessage messageID={messageID} />
      ) : (
        <Messages setView={setView} setMessageID={setMessageID} />
      )}
    </div>
  );
};

export default MessageData;
