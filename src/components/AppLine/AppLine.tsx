import { useRef, useState } from "react";
import Konva from "konva";
import { Circle, Line, Text } from "react-konva";

import { toNumber } from "../../utils/toNumber";
import { AppLineProps } from "./AppLine.props";

const AppLine = ({
  initialCoords,
  pointRadius = 7,
  pointColor = "black",
  lineColor = "red",
  lineWidth = 4,
  onDragBegin,
  onDragMove,
  onDragDrop,
  ...props
}: AppLineProps) => {
  // state
  const [line, setLine] = useState<number[]>(initialCoords);

  // refs
  const pointBeginRef = useRef<Konva.Circle>(null);
  const pointEndRef = useRef<Konva.Circle>(null);
  const tooltipRef = useRef<Konva.Text>(null);

  // handlers
  const handleDragMove = (e: Konva.KonvaEventObject<DragEvent>) => {
    const { x, y } = e.target.attrs;
    if (tooltipRef.current) {
      tooltipRef.current.position({ x: x + 20, y: y + 20 });
      tooltipRef.current.text("Red Circle");
      tooltipRef.current.show();
    }

    setLine([
      toNumber(pointBeginRef.current?.x()),
      toNumber(pointBeginRef.current?.y()),
      toNumber(pointEndRef.current?.x()),
      toNumber(pointEndRef.current?.y()),
    ]);

    onDragMove?.(e);
  };

  const handleMouseOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handleMouseOut = () => {
    document.body.style.cursor = "default";
  };

  const handleDragDrop = (e: Konva.KonvaEventObject<DragEvent>) => {
    if (tooltipRef.current) {
      tooltipRef.current.hide();
    }

    onDragDrop?.(e);
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
        onDragStart={onDragBegin}
        onDragEnd={handleDragDrop}
        onDragMove={handleDragMove}
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
        onDragStart={onDragBegin}
        onDragEnd={handleDragDrop}
        onDragMove={handleDragMove}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <Line points={[...line]} stroke={lineColor} strokeWidth={lineWidth} lineCap="round" lineJoin="round" />
      <Text ref={tooltipRef} fontSize={15} visible={false} />
    </div>
  );
};

export default AppLine;
