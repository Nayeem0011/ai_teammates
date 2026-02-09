const GradientLineRight = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 96 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M-0.00016284 2.66667C-0.00016284 4.13943 1.19374 5.33334 2.6665 5.33334C4.13926 5.33334 5.33317 4.13943 5.33317 2.66667C5.33317 1.19391 4.13926 0 2.6665 0C1.19374 0 -0.00016284 1.19391 -0.00016284 2.66667ZM94.6665 3.16667C94.9426 3.16667 95.1665 2.94281 95.1665 2.66667C95.1665 2.39053 94.9426 2.16667 94.6665 2.16667V3.16667ZM2.6665 2.66667V3.16667H94.6665V2.16667H2.6665V2.66667Z"
        fill="url(#gradientRight)"
      />
      <defs>
        <linearGradient
          id="gradientRight"
          x1="2.6665"
          y1="3.16667"
          x2="94.6665"
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

export default GradientLineRight;
