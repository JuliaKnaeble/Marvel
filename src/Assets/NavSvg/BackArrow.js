import React from "react";

const BackArrow = ({ className }) => {
  const margin = {
    marginLeft: `10px`,
  };

  return (
    <div className={className}>
      <svg
        width="15px"
        height="15px"
        viewBox="0 0 13 13"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g
          id="Designs"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Artboard"
            transform="translate(-20.000000, -18.000000)"
            fill="currentColor"
          >
            <path
              d="M23.0875,23.6875 L27.1066523,19.6683477 C27.3998314,19.3751686 27.3962655,18.8962655 27.1087109,18.6087109 L27.0287891,18.5287891 C26.7367469,18.2367469 26.2686616,18.2313384 25.9680777,18.5319223 L20,24.5 L25.9680777,30.4680777 C26.2618503,30.7618503 26.7412345,30.7587655 27.0287891,30.4712109 L27.1087109,30.3912891 C27.4007531,30.0992469 27.3928722,29.6178722 27.1066523,29.3316523 L23.0875,25.3125 L32.2549514,25.3125 C32.6664304,25.3125 33,24.9678793 33,24.5570871 L33,24.4429129 C33,24.0257099 32.6701934,23.6875 32.2549514,23.6875 L23.0875,23.6875 Z"
              id="⤷-🎨-Icon-Color-Copy"
            ></path>
          </g>
        </g>
      </svg>
      <span style={margin}> BACK TO PROFILE</span>
    </div>
  );
};

export default BackArrow;
