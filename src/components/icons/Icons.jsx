const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export const PhoneIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

export const WhatsAppIcon = (p) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.07h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.26-4.3c0-4.53 3.7-8.22 8.26-8.22 2.2 0 4.28.86 5.83 2.42a8.17 8.17 0 0 1 2.42 5.82c0 4.53-3.7 8.22-8.26 8.22Zm4.52-6.16c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.13-.17.25-.64.8-.78.96-.14.17-.29.19-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.41 1.02 2.58.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.66-1.17.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
  </svg>
);

export const DropIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />
  </svg>
);

export const KeyIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="15" r="4" />
    <path d="M10.85 12.15 20 3M20 3h-4M20 3v4M16.5 6.5 18 8" />
  </svg>
);

export const BugIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="8" y="7" width="8" height="12" rx="4" />
    <path d="M12 7V4M9 4l1.5 1.5M15 4l-1.5 1.5M4 10l4 1M20 10l-4 1M4 16l4-1M20 16l-4-1M9 19l-2 2M15 19l2 2" />
  </svg>
);

export const ClockIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const ShieldIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const MapPinIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const CheckIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const ToolIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L2 19l3 3 7.3-7.3a4 4 0 0 0 5.4-5.4l-2.55 2.55a1.5 1.5 0 0 1-2.12 0l-.88-.88a1.5 1.5 0 0 1 0-2.12L14.7 6.3Z" />
  </svg>
);

export const ChevronDownIcon = (p) => (
  <svg {...base} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const SprayIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M9 3h4l1 3H8l1-3Z" />
    <path d="M8 6h6l1 15H7L8 6Z" />
    <path d="M3 8h2M2 12h2.5M3 16h2M20 6h2M18.5 3h2M18.5 9.5h2" />
  </svg>
);

export const PipeWrenchIcon = ToolIcon;

export const HouseIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M3 11 12 4l9 7" />
    <path d="M5 9.5V20h14V9.5" />
    <path d="M10 20v-6h4v6" />
  </svg>
);

export const BuildingIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="5" y="3" width="14" height="18" rx="1" />
    <path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01" />
    <path d="M10 21v-4h4v4" />
  </svg>
);

export const CarIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 16V11l2-5h12l2 5v5" />
    <path d="M4 16h16M6 16v2M18 16v2" />
    <circle cx="7.5" cy="16" r="1.5" />
    <circle cx="16.5" cy="16" r="1.5" />
  </svg>
);

export const GarageIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M3 10 12 4l9 6v10H3V10Z" />
    <path d="M3 10h18M7 20v-6M11 20v-6M15 20v-6M19 20v-6" />
  </svg>
);

export const DocumentIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M7 3h7l4 4v14H7V3Z" />
    <path d="M14 3v4h4" />
    <path d="m10.5 14 1.5 1.5L15 12" />
  </svg>
);

export const IdCardIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <circle cx="9" cy="12" r="2" />
    <path d="M7 16.5c.6-1.2 1.8-2 3-2s2.4.8 3 2M14 9h4M14 13h4" />
  </svg>
);

export const CallRingIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    <path d="M17 2c1.5.3 2.7 1.5 3 3M17 5c.7.15 1.15.7 1.3 1.3" />
  </svg>
);

export const TagIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M3 3h8l10 10-8 8L3 11V3Z" />
    <circle cx="7.5" cy="7.5" r="1.5" />
  </svg>
);

export const DoorOpenIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 21V4l9-1v18" />
    <path d="M13 21h7V7l-7-2" />
    <circle cx="9" cy="12" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

export const QuestionIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.3 9.3a2.7 2.7 0 1 1 3.9 2.4c-.8.5-1.2.9-1.2 1.9" />
    <path d="M12 17.2h.01" />
  </svg>
);

export const ImagePlaceholderIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <circle cx="9" cy="10" r="1.7" />
    <path d="m4 18 5.5-5.5a2 2 0 0 1 2.8 0L18 18" />
  </svg>
);
