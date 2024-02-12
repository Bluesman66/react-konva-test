import { useRef, useState } from "react";
import Konva from "konva";
import { Circle, Layer, Line, Stage } from "react-konva";

import { HumanEditorProps } from "./HumanEditor.props";
import { toNumber } from "../../utils/toNumber";

const HumanEditor = ({ width, height }: HumanEditorProps) => {
  const [point11, setPoint11] = useState<number[]>([100, 100]);
  const [point21, setPoint21] = useState<number[]>([200, 100]);

  const [point12, setPoint12] = useState<number[]>([100, 200]);
  const [point22, setPoint22] = useState<number[]>([200, 200]);

  const circle1Ref = useRef<Konva.Circle>(null);
  const circle2Ref = useRef<Konva.Circle>(null);

  const circle3Ref = useRef<Konva.Circle>(null);
  const circle4Ref = useRef<Konva.Circle>(null);

  const handleDragEvent11 = () => {
    setPoint11([toNumber(circle1Ref.current?.x()), toNumber(circle1Ref.current?.y())]);
  };

  const handleDragEvent21 = () => {
    setPoint21([toNumber(circle2Ref.current?.x()), toNumber(circle2Ref.current?.y())]);
  };

  const handleDragEvent12 = () => {
    setPoint12([toNumber(circle3Ref.current?.x()), toNumber(circle3Ref.current?.y())]);
  };

  const handleDragEvent22 = () => {
    setPoint22([toNumber(circle4Ref.current?.x()), toNumber(circle4Ref.current?.y())]);
  };

  const handleMouseOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handleMouseOut = () => {
    document.body.style.cursor = "default";
    circle1Ref.current?.x();
  };

  return (
    <Stage width={width} height={height}>
      <Layer>
        <Circle
          ref={circle1Ref}
          draggable
          x={point11[0]}
          y={point11[1]}
          radius={6}
          stroke="black"
          onDragMove={handleDragEvent11}
          onDragEnd={handleDragEvent11}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
        <Circle
          ref={circle2Ref}
          draggable
          x={point21[0]}
          y={point21[1]}
          radius={6}
          stroke="black"
          onDragMove={handleDragEvent21}
          onDragEnd={handleDragEvent21}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
        <Line points={[...point11, ...point21]} stroke="red" strokeWidth={4} lineCap="round" lineJoin="round" />

        <Circle
          ref={circle3Ref}
          draggable
          x={point12[0]}
          y={point12[1]}
          radius={6}
          stroke="black"
          onDragMove={handleDragEvent12}
          onDragEnd={handleDragEvent12}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
        <Circle
          ref={circle4Ref}
          draggable
          x={point22[0]}
          y={point22[1]}
          radius={6}
          stroke="black"
          onDragMove={handleDragEvent22}
          onDragEnd={handleDragEvent22}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
        <Line points={[...point12, ...point22]} stroke="red" strokeWidth={4} lineCap="round" lineJoin="round" />
      </Layer>
    </Stage>
  );
};

export default HumanEditor;
