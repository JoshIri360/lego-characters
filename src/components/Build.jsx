import PropTypes from "prop-types";
import { motion } from "framer-motion";
import images from "./Images";
import Scrollbar from "./Scrollbar";
import { useEffect, useRef, useState } from "react";
import MergeImages from "./MergeImages";
import base from "../assets/images/base/Base.png";

const Build = ({ setUri }) => {
  const [width, setWidth] = useState(0);
  const [background, setBackground] = useState(images.background[0]);
  const [hair, setHair] = useState(images.hair[0]);
  const [brows, setBrows] = useState(images.brows[0]);
  const [eyes, setEyes] = useState(images.eyes[0]);
  const [glasses, setGlasses] = useState(images.glasses[0]);
  const [mouth, setMouth] = useState(images.mouth[0]);
  const [shirt, setShirt] = useState(images.shirt[0]);
  const [pet, setPet] = useState(images.pet[0]);

  const [clickedBackground, setClickedBackground] = useState(null);
  const [clickedHair, setClickedHair] = useState(null);
  const [clickedBrows, setClickedBrows] = useState(null);
  const [clickedEyes, setClickedEyes] = useState(null);
  const [clickedGlasses, setClickedGlasses] = useState(null);
  const [clickedMouth, setClickedMouth] = useState(null);
  const [clickedShirt, setClickedShirt] = useState(null);
  const [clickedPet, setClickedPet] = useState(null);

  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="flex flex-col items-center justify-between h-[80vh]">
      <div className="mt-10 flex-col md:flex-row flex items-center gap-5">
        <MergeImages
          images={[
            { src: background, x: 0, y: 0 },
            { src: base, x: 106.125, y: 97.7575 },
            { src: shirt, x: 54.375, y: 222.9075 },
            { src: hair, x: 69.03, y: 43.16 },
            { src: brows, x: 126.1125, y: 132.5 },
            { src: eyes, x: 134.865, y: 149.655 },
            { src: glasses, x: 106.5, y: 145.5 },
            { src: mouth, x: 128.41, y: 168.945 },
            { src: pet, x: -105, y: 300.9775, rot: -30 },
          ]}
          setUri={setUri}
        />
        <p
          className="cursor-pointer"
          onClick={() => {
            const randHair = Math.floor(Math.random() * images.hair.length);
            setHair(images.hair[randHair]);
            setClickedHair(`Hair${randHair + 1}`);

            const randBrows = Math.floor(Math.random() * images.brows.length);
            setBrows(images.brows[randBrows]);
            setClickedBrows(`Brows${randBrows + 1}`);

            const randEyes = Math.floor(Math.random() * images.eyes.length);
            setEyes(images.eyes[randEyes]);
            setClickedEyes(`Eyes${randEyes + 1}`);

            const randGlasses = Math.floor(
              Math.random() * images.glasses.length
            );
            setGlasses(images.glasses[randGlasses]);
            setClickedGlasses(`Glasses${randGlasses + 1}`);

            const randMouth = Math.floor(Math.random() * images.mouth.length);
            setMouth(images.mouth[randMouth]);
            setClickedMouth(`Mouth${randMouth + 1}`);

            const randShirt = Math.floor(Math.random() * images.shirt.length);
            setShirt(images.shirt[randShirt]);
            setClickedShirt(`Shirt${randShirt + 1}`);

            const randPet = Math.floor(Math.random() * images.pet.length);
            setPet(images.pet[randPet]);
            setClickedPet(`Pet${randPet + 1}`);

            const randBackground = Math.floor(
              Math.random() * images.background.length
            );
            setBackground(images.background[randBackground]);
            setClickedBackground(`Background${randBackground + 1}`);
          }}
        >
          RANDOM
        </p>
      </div>
      <motion.div
        className="top-carousel flex cursor-grab overflow-hidden w-screen"
        ref={carousel}
      >
        <motion.div
          className="inner-carousel flex p-4 gap-16 focus:outline-none"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={"grabbing"}
        >
          <Scrollbar
            images={images.background}
            setImage={setBackground}
            setClickedItems={setClickedBackground}
            clickedItems={clickedBackground}
          />
          <Scrollbar
            images={images.hair}
            setImage={setHair}
            setClickedItems={setClickedHair}
            clickedItems={clickedHair}
          />
          <Scrollbar
            images={images.brows}
            setImage={setBrows}
            setClickedItems={setClickedBrows}
            clickedItems={clickedBrows}
          />
          <Scrollbar
            images={images.eyes}
            setImage={setEyes}
            setClickedItems={setClickedEyes}
            clickedItems={clickedEyes}
          />
          <Scrollbar
            images={images.glasses}
            setImage={setGlasses}
            setClickedItems={setClickedGlasses}
            clickedItems={clickedGlasses}
          />
          <Scrollbar
            images={images.mouth}
            setImage={setMouth}
            setClickedItems={setClickedMouth}
            clickedItems={clickedMouth}
          />
          <Scrollbar
            images={images.shirt}
            setImage={setShirt}
            setClickedItems={setClickedShirt}
            clickedItems={clickedShirt}
          />
          <Scrollbar
            images={images.pet}
            setImage={setPet}
            setClickedItems={setClickedPet}
            clickedItems={clickedPet}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

Build.propTypes = {
  setUri: PropTypes.func.isRequired,
};

export default Build;
