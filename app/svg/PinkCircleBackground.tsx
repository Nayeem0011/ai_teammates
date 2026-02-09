const PinkCircleBackground = ({ className = "" }) => (
  <svg
    width={270}
    height={427}
    viewBox="0 0 270 427"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g opacity="0.5" filter="url(#filter0_fn_157_311)">
      <circle cx="0.963379" cy="157.963" r="94.5" fill="#FF82CA" />
    </g>

    <defs>
      <filter
        id="filter0_fn_157_311"
        x="-267.937"
        y="-110.937"
        width="537.8"
        height="537.8"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="87.2" result="effect1_foregroundBlur_157_311" />
        <feTurbulence
          type="fractalNoise"
          baseFrequency="3.3333332538604736 3.3333332538604736"
          stitchTiles="stitch"
          numOctaves="3"
          result="noise"
          seed="6925"
        />
        <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
        <feComponentTransfer in="alphaNoise" result="coloredNoise1">
          <feFuncA
            type="discrete"
            tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
          />
        </feComponentTransfer>
        <feComposite
          operator="in"
          in2="effect1_foregroundBlur_157_311"
          in="coloredNoise1"
          result="noise1Clipped"
        />
        <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
        <feComposite
          operator="in"
          in2="noise1Clipped"
          in="color1Flood"
          result="color1"
        />
        <feMerge result="effect2_noise_157_311">
          <feMergeNode in="effect1_foregroundBlur_157_311" />
          <feMergeNode in="color1" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);

export default PinkCircleBackground;
