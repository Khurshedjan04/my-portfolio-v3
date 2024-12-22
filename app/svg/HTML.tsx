const HTMLicon = () => {
    return (
      <div className="relative -z-10">
        {/* Colors adjusted to a dark tone to keep consistency */}
        <svg
          className="relative z-10"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 256 256"
        >
          <g
            fill="#1a202c00" 
            fillOpacity="1"
            fillRule="nonzero"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
            style={{ mixBlendMode: "normal" }}
          >
            <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
          </g>
          <g
            fill="none"
            fillRule="nonzero"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
            style={{ mixBlendMode: "normal" }}
          >
            <g transform="scale(5.33333,5.33333)">
              <path d="M41,5h-34l3,34l14,4l14,-4l3,-34z" fill="#4a5568"></path> 
              <path d="M24,8v31.9l11.2,-3.2l2.5,-28.7z" fill="#2d3748"></path> 
              <path
                d="M24,25v-4h8.6l-0.7,11.5l-7.9,2.6v-4.2l4.1,-1.4l0.3,-4.5zM32.9,17l0.3,-4h-9.2v4z"
                fill="#e2e8f0"
              ></path>
              <path
                d="M24,30.9v4.2l-7.9,-2.6l-0.4,-5.5h4l0.2,2.5zM19.1,17h4.9v-4h-9.1l0.7,12h8.4v-4h-4.6z"
                fill="#e2e8f0" 
              ></path>
            </g>
          </g>
        </svg>
        <svg
          className=" absolute top-full left-full -translate-x-3/4 -translate-y-1/2"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 48 48"
        >
          <path fill="#1a202c" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
          <path fill="#4a5568" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path> 
          <path
            fill="#e2e8f0"
            d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
          ></path> 
          <path
            fill="#e2e8f0"
            d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
          ></path> 
        </svg>
      </div>
    );
  };
  
  export default HTMLicon;
  