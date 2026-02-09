const GradientLine = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 96 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M95.1667 2.66667C95.1667 4.13943 93.9728 5.33334 92.5 5.33334C91.0272 5.33334 89.8333 4.13943 89.8333 2.66667C89.8333 1.19391 91.0272 0 92.5 0C93.9728 0 95.1667 1.19391 95.1667 2.66667ZM0.5 3.16667C0.223854 3.16667 0 2.94281 0 2.66667C0 2.39053 0.223854 2.16667 0.5 2.16667H92.5V3.16667H0.5Z"
        fill="url(#gradientLine)"
      />
      <defs>
        <linearGradient
          id="gradientLine"
          x1="92.5"
          y1="3.16667"
          x2="0.5"
          y2="3.16667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EAF0F3" />
          <stop offset="1" stopColor="#FBFCFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GradientLine;
