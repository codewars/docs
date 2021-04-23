import React, { useState } from "react";
import copy from "copy-text-to-clipboard";

const CodeBlockWithCopy = ({ codedata, ...props }) => {
  const [showCopied, setShowCopied] = useState(false);
  const handleCopyCode = () => {
    copy(atob(codedata));
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 1500);
  };

  return (
    <div className="relative group">
      <pre {...props}></pre>
      <button
        type="button"
        aria-label={"Copy code to clipboard"}
        className={`absolute top-0 right-0 m-1 px-2 py-1 border-none rounded-lg color-gray-600 bg-gray-200 bg-opacity-30 opacity-0 group-hover:opacity-100 hover:opacity-100 focus:opacity-100 transition-opacity duration-200 ease-in-out cursor-pointer select-none`}
        onClick={handleCopyCode}
      >
        {showCopied ? "Copied" : "Copy"}
      </button>
    </div>
  );
};

export default CodeBlockWithCopy;
