import React from "react";

const SvgFilter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
    <path d="M29.48 24.917h-7.258c-.622 0-1.037.415-1.037 1.037s.415 1.037 1.037 1.037h7.258c.622 0 1.037-.415 1.037-1.037 0-.414-.415-1.037-1.037-1.037zm0-5.806h-7.258c-.622 0-1.037.415-1.037 1.037s.415 1.037 1.037 1.037h7.258c.622 0 1.037-.415 1.037-1.037 0-.415-.415-1.037-1.037-1.037zm0-5.6h-7.258c-.622 0-1.037.415-1.037 1.037s.415 1.037 1.037 1.037h7.258c.622 0 1.037-.415 1.037-1.037s-.415-1.037-1.037-1.037zM17.659 30.102c-.622 0-1.037-.415-1.037-1.037V12.889c0-.207 0-.622.207-.83l7.051-7.88H5.009l7.051 7.88c.207.207.207.415.207.83v9.747l1.659 1.452c.415.415.622 1.037.207 1.452s-1.037.622-1.452.207l-2.074-1.659c-.207-.207-.415-.415-.415-.83v-9.954l-8.295-9.54c-.414-.414-.414-.829-.414-1.244.208-.415.622-.622 1.037-.622h23.849c.415 0 .83.207 1.037.622s0 .83-.207 1.244l-8.295 9.54v15.761c-.001.622-.623 1.037-1.245 1.037z" />
  </svg>
);

export default SvgFilter;
