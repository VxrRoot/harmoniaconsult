import React from "react";

export const ToolboxIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 12H10V14H14V12H20V18H4V12Z" fill="#1C2E45" />
      <path d="M11 11H13V13H11V11Z" fill="#1C2E45" fillOpacity="0.6" />
      <path
        d="M15 8V6H9V8H4V11H10V10H14V11H20V8H15ZM10 8V7H14V8H10Z"
        fill="#1C2E45"
      />
    </svg>
  );
};

export const LangIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M9 2.25a.75.75 0 0 1 .75.75v1.506a49.384 49.384 0 0 1 5.343.371.75.75 0 1 1-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 0 1-2.97 6.323c.318.384.65.753 1 1.107a.75.75 0 0 1-1.07 1.052A18.902 18.902 0 0 1 9 13.687a18.823 18.823 0 0 1-5.656 4.482.75.75 0 0 1-.688-1.333 17.323 17.323 0 0 0 5.396-4.353A18.72 18.72 0 0 1 5.89 8.598a.75.75 0 0 1 1.388-.568A17.21 17.21 0 0 0 9 11.224a17.168 17.168 0 0 0 2.391-5.165 48.04 48.04 0 0 0-8.298.307.75.75 0 0 1-.186-1.489 49.159 49.159 0 0 1 5.343-.371V3A.75.75 0 0 1 9 2.25ZM15.75 9a.75.75 0 0 1 .68.433l5.25 11.25a.75.75 0 1 1-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 0 1-1.36-.634l5.25-11.25A.75.75 0 0 1 15.75 9Zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726Z"
      clipRule="evenodd"
    />
  </svg>
);

export const BuildingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
    <path
      fillRule="evenodd"
      d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z"
      clipRule="evenodd"
    />
    <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
  </svg>
);

export const MessageIcon: React.FC = () => (
  <svg
    width="29"
    height="29"
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.4333 5.33203H5.23325C4.28392 5.33203 3.45872 5.85573 3.07014 6.61019C3.17817 6.63653 3.28363 6.68147 3.38191 6.74596L14.8333 14.2609L26.2846 6.74596C26.3829 6.68147 26.4883 6.63653 26.5964 6.6102C26.2078 5.85574 25.3826 5.33203 24.4333 5.33203ZM26.8333 8.77812L15.3819 16.2931C15.0488 16.5117 14.6177 16.5117 14.2846 16.2931L2.83325 8.77812V21.082C2.83325 22.3195 3.91325 23.332 5.23325 23.332H24.4333C25.7533 23.332 26.8333 22.3195 26.8333 21.082V8.77812Z"
      fill="#ca8a04"
    />
  </svg>
);

export const FacebookIcon: React.FC = () => (
  <svg
    width="29"
    height="29"
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25 0.665039H4C2.06975 0.665039 0.5 2.23479 0.5 4.16504V25.165C0.5 27.0953 2.06975 28.665 4 28.665H14.5V19.04H11V14.665H14.5V11.165C14.5 8.26529 16.8503 5.91504 19.75 5.91504H23.25V10.29H21.5C20.534 10.29 19.75 10.199 19.75 11.165V14.665H24.125L22.375 19.04H19.75V28.665H25C26.9303 28.665 28.5 27.0953 28.5 25.165V4.16504C28.5 2.23479 26.9303 0.665039 25 0.665039Z"
      fill="#2A89FE"
    />
  </svg>
);

export const ChevronIcon: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5 5L12.5 10L7.5 15"
      stroke="#ca8a04"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const NewsletterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
    />
  </svg>
);
