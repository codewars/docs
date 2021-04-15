import React from "react";

const Anchored = ({ id, bold = true, children }) => {
  return (
    <div id={`.${id}`} class="anchored">
      <a class="anchor-link" href={`#.${id}`} aria-hidden="true"></a>
      {bold ? <b>{children}</b> : children}
    </div>
  );
};
export default Anchored;
