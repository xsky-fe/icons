import React from "react";

const SvgWarningTriangle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
    <path d="M31.2 25.8l-4.9-8.5-3.5-6.1-4.9-8.5c-1-1.7-2.5-1.7-3.5 0l-4.9 8.5L6 17.3l-4.9 8.5c-1 1.7-.2 3.1 1.8 3.1h26.8c1.7 0 2.5-1.4 1.5-3.1zm-13.4-1.1h-3.5v-2.9h3.5v2.9zm0-6.1h-3.5v-7h3.5v7z" />
  </svg>
);

export default SvgWarningTriangle;
