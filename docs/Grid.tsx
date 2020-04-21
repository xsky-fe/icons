import React from "react";

const Grid = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 320" {...props}>
    <defs>
      <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(107, 88, 196, .5)" strokeWidth="2" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#smallGrid)" />
  </svg>
);

export default Grid;
