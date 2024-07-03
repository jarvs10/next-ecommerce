import React from "react";

const Loading = () => {
  return (
    <button type="button" className="font-bold" disabled>
      <svg className="h-5 w-5" viewBox="0 0 24 24"></svg>
      Processing...
    </button>
  );
};

export default Loading;
