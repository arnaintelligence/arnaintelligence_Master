import { SVGProps } from "react";

export const HumanAiIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Human head profile */}
    <path d="M16.5 21v-2a3 3 0 0 0-1.2-2.4L14 15.5v-1.2a4 4 0 0 0 1.5-3.1V8.5A4.5 4.5 0 0 0 11 4a4.5 4.5 0 0 0-4.5 4.5" />
    <path d="M6.5 12.5 5 14l1.5 1v1.5H8V19H6.5v2" />
    {/* Neural network nodes on the AI side */}
    <circle cx="18" cy="6" r="1.4" />
    <circle cx="21" cy="11" r="1.4" />
    <circle cx="18" cy="16" r="1.4" />
    {/* Connections from head to nodes */}
    <path d="M13 8.5h3.6" />
    <path d="M14 11h5.6" />
    <path d="M13.5 13.5 16.7 15.4" />
    {/* Inter-node connections */}
    <path d="m19 7 1.4 2.8" />
    <path d="m19.4 12.3-.8 2.4" />
  </svg>
);
