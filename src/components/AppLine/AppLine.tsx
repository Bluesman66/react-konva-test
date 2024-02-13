import { useRef, useState } from "react";
import Konva from "konva";
import { Circle, Line } from "react-konva";

import { toNumber } from "../../utils/toNumber";
import { AppLineProps } from "./AppLine.props";

const AppLine = ({
  initialCoords,
  pointRadius = 7,
  pointColor = "black",
  lineColor = "red",
  lineWidth = 4,
  ...props
}: AppLineProps) => {
  // state
  const [line, setLine] = useState<number[]>(initialCoords);

  // refs
  const pointBeginRef = useRef<Konva.Circle>(null);
  const pointEndRef = useRef<Konva.Circle>(null);

  // handlers
  const handleDragEvent = () => {
    setLine([
      toNumber(pointBeginRef.current?.x()),
      toNumber(pointBeginRef.current?.y()),
      toNumber(pointEndRef.current?.x()),
      toNumber(pointEndRef.current?.y()),
    ]);
  };

  const handleMouseOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handleMouseOut = () => {
    document.body.style.cursor = "default";
  };

  if (line.length !== 4) {
    return null;
  }

  return (
    <div {...props}>
      <Circle
        ref={pointBeginRef}
        draggable
        x={line[0]}
        y={line[1]}
        radius={pointRadius}
        stroke={pointColor}
        onDragMove={handleDragEvent}
        onDragEnd={handleDragEvent}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <Circle
        ref={pointEndRef}
        draggable
        x={line[2]}
        y={line[3]}
        radius={pointRadius}
        stroke={pointColor}
        onDragMove={handleDragEvent}
        onDragEnd={handleDragEvent}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <Line points={[...line]} stroke={lineColor} strokeWidth={lineWidth} lineCap="round" lineJoin="round" />
    </div>
  );
};

export default AppLine;
