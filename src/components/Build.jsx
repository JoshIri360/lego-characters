import { motion } from "framer-motion";
import images from "./Images";
import Scrollbar from "./Scrollbar";
import { useEffect, useRef, useState } from "react";

const Build = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="flex flex-col items-center justify-between h-[80vh]">
      <div className="mt-20">avatar</div>
      <motion.div
        className="top-carousel flex cursor-grab overflow-hidden w-screen"
        ref={carousel}
      >
        <motion.div
          className="inner-carousel flex p-4 gap-16"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={"grabbing"}
        >
          <Scrollbar images={images.background} />
          <Scrollbar images={images.hair} />
          <Scrollbar images={images.brows} />
          <Scrollbar images={images.eyes} />
          <Scrollbar images={images.glasses} />
          <Scrollbar images={images.mouth} />
          <Scrollbar images={images.shirt} />
          <Scrollbar images={images.pet} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Build;
