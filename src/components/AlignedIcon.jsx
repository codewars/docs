import React from "react";

// Wraps Tabler icon and aligns to the surrounding text better.
// Created to display the crown and shield icons in the moderation page.
const Aligned = ({ icon: Icon }) => (
  <div className="inline-flex self-center relative top-1">
    <Icon size={20} />
  </div>
);

export default Aligned;
