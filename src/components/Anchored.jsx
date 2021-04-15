import React from "react";

const Anchored = ({ id, children }) => {
  return (
    <div id={`.${id}`} class="anchored inline relative">
      <a class="anchor-link" href={`#.${id}`} aria-hidden="true"></a>
      {children}
    </div>
  );
};
export default Anchored;
