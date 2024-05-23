import React from "react";

const Loading = () => {
  return (
    <button type="button" className="bg-indigo-500 rounded-full text-white font-bold px-2" disabled>
      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"></svg>
      Processing...
    </button>
  );
};

export default Loading;
