import { Image } from "react-konva";
import useImage from "use-image";

import { LionImageProps } from "./LionImage.props";

const LionImage = ({ draggable = false }: LionImageProps) => {
  const [image] = useImage("https://konvajs.org/assets/lion.png");
  return <Image draggable={draggable} image={image} />;
};

export default LionImage;
