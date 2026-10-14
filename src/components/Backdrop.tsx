export function Backdrop() {
  return (
    <div className="scene" aria-hidden="true">
      <svg
        className="scene-ribbons"
        viewBox="0 0 1440 2400"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="ribbon-a" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#DAF1DE" />
            <stop offset=".35" stopColor="#8EB69B" />
            <stop offset=".68" stopColor="#235347" />
            <stop offset="1" stopColor="#DAF1DE" />
          </linearGradient>
          <linearGradient id="ribbon-b" x1="0" y1="1" x2="1" y2="0">
            <stop stopColor="#DAF1DE" />
            <stop offset=".5" stopColor="#8EB69B" />
            <stop offset="1" stopColor="#163832" />
          </linearGradient>
        </defs>
        <path
          d="M-90 22C185 15 71 331 248 300C-45 325 3 641-140 715Z"
          fill="url(#ribbon-a)"
          opacity=".68"
        />
        <path
          d="M-110 205C112 85 42 448 345 386C141 509 88 439-68 580"
          fill="url(#ribbon-a)"
          stroke="#DAF1DE"
          strokeWidth="1.5"
          opacity=".76"
        />
        <path
          d="M1123-125C1345 181 1073 175 1310 422C1532 187 1519-8 1480-110Z"
          fill="url(#ribbon-b)"
          opacity=".7"
        />
        <path
          d="M1474 243C1238 453 1335 360 1155 550C1364 545 1500 403 1550 324"
          fill="url(#ribbon-b)"
          stroke="#DAF1DE"
          strokeWidth="1.2"
          opacity=".55"
        />
        <path
          d="M-153 768C95 570 73 905 438 969C58 882 56 1104-80 1270"
          fill="url(#ribbon-a)"
          opacity=".36"
        />
        <path
          d="M1542 886C1297 936 1257 1322 741 1399C1201 1578 1482 1330 1550 1198Z"
          fill="url(#ribbon-b)"
          opacity=".42"
        />
        <path
          d="M-110 1710C179 1709 137 1949 561 2117C136 2067 4 2327-95 2410Z"
          fill="url(#ribbon-a)"
          opacity=".66"
        />
        <path
          d="M1514 1862C1128 1948 1139 2254 834 2302C1330 2404 1530 2157 1570 1983Z"
          fill="url(#ribbon-b)"
          opacity=".4"
        />
      </svg>
      <span className="orb orb-one" />
      <span className="orb orb-two" />
      <span className="orb orb-three" />
      <span className="orb orb-four" />
      <span className="orb orb-five" />
      <span className="orb orb-six" />
      <span className="orb orb-seven" />
    </div>
  );
}
