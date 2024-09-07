import React from "react";

import SyncLoader from "react-spinners/SyncLoader";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <SyncLoader color="#0067FF" />
    </div>
  );
};

export default Loading;
