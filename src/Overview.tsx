import React from "react";

const SvgOverview = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
    <path d="M4.205 17.785h3.428v2.023H4.205v-2.023zm20.092 0h3.428v2.023h-3.428v-2.023zM14.961 6.762h2.023v3.426h-2.023V6.762zm6.943 5.259l2.423-2.422 1.43 1.431-2.423 2.422-1.43-1.431zM9.01 13.553L6.588 11.13l1.431-1.431 2.422 2.423-1.431 1.431z" />
    <path d="M26.812 29.523H5.188c-.562 0-1.11-.273-1.504-.75C1.295 25.906-.022 22.26-.022 18.51-.021 9.67 7.165 2.477 16 2.477c3.6 0 7.001 1.17 9.839 3.383L24.61 7.438C22.126 5.5 19.148 4.477 16 4.477c-7.731 0-14.021 6.296-14.021 14.034 0 3.283 1.152 6.474 3.245 8.986l21.588.026c2.059-2.535 3.209-5.733 3.209-9.029 0-2.941-.904-5.759-2.615-8.146l1.625-1.166c1.957 2.73 2.99 5.95 2.99 9.312 0 3.763-1.315 7.416-3.707 10.285-.389.472-.938.744-1.502.744z" />
    <path d="M21.326 14.014l-6.909 4.341c-.509.354-.84.943-.832 1.611.012 1.071.891 1.93 1.96 1.918.54-.006 1.025-.232 1.372-.592l.017-.02c.09-.094.168-.198.237-.311l4.231-6.949z" />
  </svg>
);

export default SvgOverview;
