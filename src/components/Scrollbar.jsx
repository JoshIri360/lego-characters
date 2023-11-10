import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Scrollbar = ({ images }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  const imageNames = [];

  images.map((imagePath) => {
    const pathSegments = imagePath.split("/");
    const imageNameWithExtension = pathSegments[pathSegments.length - 1];
    const imageName = imageNameWithExtension.split(".")[0];
    imageNames.push(imageName);
  });

  //   console.log(imageNames);

  const handleClick = (e) => {
    console.log(
      e.target.src.split("/")[e.target.src.split("/").length - 1].split(".")[0]
    );
  };

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className="top-carousel flex cursor-grab overflow-hidden min-w-[14rem] md:max-w-md rounded-md bg-primary-content"
    >
      <motion.div
        className="inner-carousel flex bg-secondary-content p-4 gap-4"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        whileTap={"grabbing"}
      >
        {images.map((image, index) => (
          <motion.div
            className={`item rounded-md min-h-[5rem] w-20 max-w flex items-center justify-center bg-white`}
            key={index}
          >
            <img
              className="rounded-md cursor-pointer w-16"
              draggable="false"
              onClick={(e) => {
                handleClick(e);
              }}
              src={image}
              alt="lego"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

Scrollbar.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Scrollbar;
