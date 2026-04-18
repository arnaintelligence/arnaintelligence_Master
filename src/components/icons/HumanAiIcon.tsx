import { SVGProps } from "react";

export const HumanAiIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Human head profile silhouette (facing right) */}
    <path d="M14 21v-2.2c0-.8.4-1.5 1-2 1.8-1.3 3-3.4 3-5.8a6 6 0 0 0-6-6c-3.3 0-6 2.7-6 6 0 1.6.6 3 1.6 4L8 16H6v2h2v3" />

    {/* Vertical divider down the middle of the head */}
    <path d="M12 5v13" strokeDasharray="1.2 1.6" opacity="0.55" />

    {/* Circuit / neural nodes on the AI half (right side of head) */}
    <circle cx="14.5" cy="9" r="1" />
    <circle cx="16.5" cy="12.5" r="1" />
    <circle cx="14.5" cy="15.5" r="1" />

    {/* Circuit connections inside the head */}
    <path d="M12 9h1.5" />
    <path d="M12 12.5h3.5" />
    <path d="M12 15.5h1.5" />
    <path d="M14.5 10v1.5" />
    <path d="M14.5 14v.5" />
  </svg>
);
