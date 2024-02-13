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

  // methods
  const dragMove = (x: number, y: number, text: string) => {
    if (tooltipRef.current) {
      tooltipRef.current.position({ x: x + 20, y: y + 20 });
      tooltipRef.current.text(text);
      tooltipRef.current.show();
    }

    setLine([
      toNumber(pointBeginRef.current?.x()),
      toNumber(pointBeginRef.current?.y()),
      toNumber(pointEndRef.current?.x()),
      toNumber(pointEndRef.current?.y()),
    ]);
  };

  const showBeginAngle = (x: number, y: number) => {
    const dx = x - toNumber(pointEndRef.current?.x());
    const dy = y - toNumber(pointEndRef.current?.y());
    const angle = (Math.atan(dy / dx) * 180) / Math.PI;
    dragMove(x, y, angle.toFixed(2).toString());
  };

  const showEndAngle = (x: number, y: number) => {
    const dx = x - toNumber(pointBeginRef.current?.x());
    const dy = y - toNumber(pointBeginRef.current?.y());
    const angle = (Math.atan(-dy / dx) * 180) / Math.PI;
    dragMove(x, y, angle.toFixed(2).toString());
  };

  const hideTooltip = () => {
    if (tooltipRef.current) {
      tooltipRef.current.hide();
    }
  };

  // handlers
  const handleDragMoveBegin = (e: Konva.KonvaEventObject<DragEvent>) => {
    onDragMove?.(e);
    const { x, y } = e.target.attrs;
    showBeginAngle(x, y);
  };

  const handleDragMoveEnd = (e: Konva.KonvaEventObject<DragEvent>) => {
    onDragMove?.(e);
    const { x, y } = e.target.attrs;
    showEndAngle(x, y);
  };

  const handleMouseOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handleMouseOut = () => {
    document.body.style.cursor = "default";
  };

  const handleDragDrop = (e: Konva.KonvaEventObject<DragEvent>) => {
    onDragDrop?.(e);
    hideTooltip();
  };

  const handleMouseDownBegin = () => {
    showBeginAngle(toNumber(pointBeginRef.current?.x()), toNumber(pointBeginRef.current?.y()));
  };

  const handleMouseDownEnd = () => {
    showEndAngle(toNumber(pointEndRef.current?.x()), toNumber(pointEndRef.current?.y()));
  };

  const handleMouseUp = () => {
    hideTooltip();
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
        onDragMove={handleDragMoveBegin}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onMouseDown={handleMouseDownBegin}
        onMouseUp={handleMouseUp}
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
        onDragMove={handleDragMoveEnd}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onMouseDown={handleMouseDownEnd}
        onMouseUp={handleMouseUp}
      />
      <Line points={[...line]} stroke={lineColor} strokeWidth={lineWidth} lineCap="round" lineJoin="round" />
      <Text ref={tooltipRef} fontSize={15} visible={false} />
    </div>
  );
};

export default AppLine;
