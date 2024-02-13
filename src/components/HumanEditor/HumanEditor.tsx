import { useRef, useState } from "react";
import Konva from "konva";
import { Circle, Layer, Line, Stage } from "react-konva";

import { HumanEditorProps } from "./HumanEditor.props";
import { toNumber } from "../../utils/toNumber";

const HumanEditor = ({ width, height }: HumanEditorProps) => {
  const [line1, setLine1] = useState<number[]>([100, 100, 200, 100]);
  const [line2, setLine2] = useState<number[]>([100, 200, 200, 200]);

  const circle1Ref = useRef<Konva.Circle>(null);
  const circle2Ref = useRef<Konva.Circle>(null);

  const circle3Ref = useRef<Konva.Circle>(null);
  const circle4Ref = useRef<Konva.Circle>(null);

  const handleDragEvent1 = () => {
    setLine1([
      toNumber(circle1Ref.current?.x()),
      toNumber(circle1Ref.current?.y()),
      toNumber(circle2Ref.current?.x()),
      toNumber(circle2Ref.current?.y()),
    ]);
  };

  const handleDragEvent2 = () => {
    setLine2([
      toNumber(circle3Ref.current?.x()),
      toNumber(circle3Ref.current?.y()),
      toNumber(circle4Ref.current?.x()),
      toNumber(circle4Ref.current?.y()),
    ]);
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
          x={line1[0]}
          y={line1[1]}
          radius={7}
          stroke="black"
          onDragMove={handleDragEvent1}
          onDragEnd={handleDragEvent1}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
        <Circle
          ref={circle2Ref}
          draggable
          x={line1[2]}
          y={line1[3]}
          radius={7}
          stroke="black"
          onDragMove={handleDragEvent1}
          onDragEnd={handleDragEvent1}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
        <Line points={[...line1]} stroke="red" strokeWidth={4} lineCap="round" lineJoin="round" />

        <Circle
          ref={circle3Ref}
          draggable
          x={line2[0]}
          y={line2[1]}
          radius={7}
          stroke="black"
          onDragMove={handleDragEvent2}
          onDragEnd={handleDragEvent2}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
        <Circle
          ref={circle4Ref}
          draggable
          x={line2[2]}
          y={line2[3]}
          radius={7}
          stroke="black"
          onDragMove={handleDragEvent2}
          onDragEnd={handleDragEvent2}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
        <Line points={[...line2]} stroke="red" strokeWidth={4} lineCap="round" lineJoin="round" />
      </Layer>
    </Stage>
  );
};

export default HumanEditor;
