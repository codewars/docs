import React from "react";

const Anchored = ({ id, children }) => {
  return (
    <div id={`.${id}`} className="anchored inline relative">
      <a className="anchor-link" href={`#.${id}`} aria-hidden="true"></a>
      {children}
    </div>
  );
};
export default Anchored;
