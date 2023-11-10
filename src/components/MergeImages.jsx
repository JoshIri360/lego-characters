import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { Stage, Layer, Image } from "react-konva";

const MergeImages = ({ images, setUri }) => {
  const [image, setImage] = useState([]);
  const stageRef = useRef(null);

  useEffect(() => {
    const convertedImages = [];
    images.map((image) => {
      const img = new window.Image();
      img.src = image.src;
      const imgObject = {
        ...image,
        image: img,
      };
      convertedImages.push(imgObject);
    });

    setImage(convertedImages);

    setTimeout(() => {
      const uri = stageRef.current.toDataURL();
      setUri(uri);
    }, 100);
  }, [images, setUri]);

  return (
    <Stage width={330} height={330} ref={stageRef}>
      <Layer>
        {image.map((img, index) => (
          <Image
            key={index}
            image={img.image}
            x={img.x}
            y={img.y}
            scaleX={0.75}
            scaleY={0.75}
            rotation={img.rot}
          />
        ))}
      </Layer>
    </Stage>
  );
};

MergeImages.propTypes = {
  images: PropTypes.array.isRequired,
  setUri: PropTypes.func.isRequired,
};

export default MergeImages;
