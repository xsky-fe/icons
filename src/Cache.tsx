import React from "react";

const SvgCache = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
    <path d="M16 17.9L0 10.1l16-7.6 16 7.7-16 7.7zM5.1 10.1L16 15.4l10.9-5.2L16 5 5.1 10.1z" />
    <path d="M29.4 14.5L16 21 2.6 14.5.1 15.7 16 23.5l16-7.7z" />
    <path d="M29.4 19.9L16 26.3 2.6 19.8.1 21 16 28.8l16-7.7z" />
  </svg>
);

export default SvgCache;
