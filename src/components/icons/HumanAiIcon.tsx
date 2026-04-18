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
    {/* Center divider */}
    <path d="M12 3.5v17" strokeDasharray="1.4 1.6" opacity="0.5" />

    {/* LEFT: Organic brain hemisphere */}
    <path d="M12 4.5c-1.2-1-3-1-4 .2-.5.6-.7 1.3-.6 2-1.2.2-2.1 1.2-2.1 2.5 0 .6.2 1.1.5 1.5-.8.4-1.3 1.2-1.3 2.2 0 .9.5 1.7 1.2 2.1-.4.5-.6 1-.6 1.7 0 1.3 1 2.4 2.3 2.5.1 1.2 1.1 2.3 2.4 2.3.8 0 1.5-.4 2-1" />
    {/* Brain inner curls (left) */}
    <path d="M9.5 8.5c.8 0 1.4.6 1.4 1.4" />
    <path d="M8 12.5c.9 0 1.6.7 1.6 1.6" />
    <path d="M9.8 17c.7 0 1.2-.5 1.2-1.2" />

    {/* RIGHT: Circuit / AI hemisphere */}
    {/* Outer hex-ish frame following head shape */}
    <path d="M12 4.5c1.2-1 3-1 4 .2.5.6.7 1.3.6 2 1.2.2 2.1 1.2 2.1 2.5 0 .6-.2 1.1-.5 1.5.8.4 1.3 1.2 1.3 2.2 0 .9-.5 1.7-1.2 2.1.4.5.6 1 .6 1.7 0 1.3-1 2.4-2.3 2.5-.1 1.2-1.1 2.3-2.4 2.3-.8 0-1.5-.4-2-1" />
    {/* Circuit nodes */}
    <circle cx="14.5" cy="8" r="0.9" />
    <circle cx="17.5" cy="11.5" r="0.9" />
    <circle cx="14.5" cy="15" r="0.9" />
    {/* Circuit traces */}
    <path d="M12.5 8h1.1" />
    <path d="M12.5 11.5h4.1" />
    <path d="M12.5 15h1.1" />
    <path d="M14.5 8.9v1.7" />
    <path d="M14.5 13.4v.7" />
  </svg>
);
