import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Scrollbar = ({ images, setImage, clickedItems, setClickedItems }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  const imageNames = [];

  images.map((imagePath) => {
    const pathSegments = imagePath.split("/");
    const imageNameWithExtension = pathSegments[pathSegments.length - 1];
    const imageName = imageNameWithExtension.split(".")[0];
    imageNames.push(imageName);
  });

  const handleRandomClick = () => {
    const randomPart = images[Math.floor(Math.random() * images.length)];
    setClickedItems(imageNames[images.indexOf(randomPart)]);
    console.log(imageNames[images.indexOf(randomPart)]);
    setImage(randomPart);
  };

  const handleClick = (e) => {
    const imgElement = e.target.children[0] ? e.target.children[0] : e.target;

    const bodyPart = imgElement.src.split("/")[
      // eslint-disable-next-line no-unexpected-multiline
      imgElement.src.split("/").length - 1
    ].split(".")[0];

    setImage(imgElement.src.split("/").slice(-5).join("/"));

    setClickedItems(bodyPart);
  };

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    setClickedItems(imageNames[0]);
    handleRandomClick(images, setImage);
  }, []);

  return (
    <div className="relative">
      <motion.div
        ref={carousel}
        className="top-carousel flex cursor-grab overflow-hidden min-w-[14rem] max-w-[20rem] md:max-w-md rounded-md bg-primary-content focus:outline-none"
      >
        <motion.div
          className="inner-carousel flex bg-secondary-content p-4 gap-4 focus:outline-none"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragTransition={{
            power: 0.5,
            // Snap calculated target to nearest 50 pixels on release
            modifyTarget: (target) => Math.round(target / 96) * 96,
            bounceDamping: 60,
            timeConstant: 400,
          }}
          whileTap={"grabbing"}
        >
          {images.map((image, index) => (
            <motion.div
              className={`item rounded-md min-h-[5rem] w-20 flex cursor-pointer items-center justify-center bg-white`}
              key={index}
              style={{
                boxShadow:
                  clickedItems === imageNames[index]
                    ? "0 0 0 3px #fff, 0 0 0 6px #000"
                    : "none",
              }}
              onClick={(e) => {
                handleClick(e);
              }}
            >
              <img
                className="rounded-md w-16"
                draggable="false"
                src={image}
                alt="lego"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

Scrollbar.propTypes = {
  images: PropTypes.array.isRequired,
  setImage: PropTypes.func.isRequired,
  clickedItems: PropTypes.string.isRequired,
  setClickedItems: PropTypes.func.isRequired,
};

export default Scrollbar;
