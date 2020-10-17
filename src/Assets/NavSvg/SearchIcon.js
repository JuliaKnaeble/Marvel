import React from "react";

const SearchIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="37px"
      height="37px"
      viewBox="0 0 37 37"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="Page-2"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M16,0 C24.836556,0 32,7.163444 32,16 C32,19.6974492 30.7458189,23.1019687 28.6396699,25.8113455 L35.8994949,33.0710678 C36.6805435,33.8521164 36.6805435,35.1184464 35.8994949,35.8994949 C35.1184464,36.6805435 33.8521164,36.6805435 33.0710678,35.8994949 L25.8113455,28.6396699 C23.1019687,30.7458189 19.6974492,32 16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 Z M16,4 C9.372583,4 4,9.372583 4,16 C4,22.627417 9.372583,28 16,28 C22.627417,28 28,22.627417 28,16 C28,9.372583 22.627417,4 16,4 Z"
          id="magnify"
          fill="currentColor"
          fillRule="nonzero"
        ></path>
      </g>
    </svg>
  );
};

export default SearchIcon;
