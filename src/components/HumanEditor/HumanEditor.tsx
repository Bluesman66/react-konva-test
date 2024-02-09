import { useRef, useState } from "react";
import Konva from "konva";
import { Circle, Layer, Line, Stage } from "react-konva";

import { HumanEditorProps } from "./HumanEditor.props";

const HumanEditor = ({ width, height }: HumanEditorProps) => {
  const offsetX = useRef<number>(0);
  const offsetY = useRef<number>(0);

  const [point11, setPoint11] = useState<number[]>([100, 100]);
  const [point21, setPoint21] = useState<number[]>([200, 100]);

  const [point12, setPoint12] = useState<number[]>([100, 200]);
  const [point22, setPoint22] = useState<number[]>([200, 200]);

  const handleDragStart11 = (evt: Konva.KonvaEventObject<DragEvent>) => {
    offsetX.current = point11[0] - evt.evt.offsetX;
    offsetY.current = point11[1] - evt.evt.offsetY;
  };

  const handleDragStart21 = (evt: Konva.KonvaEventObject<DragEvent>) => {
    offsetX.current = point21[0] - evt.evt.offsetX;
    offsetY.current = point21[1] - evt.evt.offsetY;
  };

  const handleDragStart12 = (evt: Konva.KonvaEventObject<DragEvent>) => {
    offsetX.current = point12[0] - evt.evt.offsetX;
    offsetY.current = point12[1] - evt.evt.offsetY;
  };

  const handleDragStart22 = (evt: Konva.KonvaEventObject<DragEvent>) => {
    offsetX.current = point22[0] - evt.evt.offsetX;
    offsetY.current = point22[1] - evt.evt.offsetY;
  };

  const handleDragEvent11 = (evt: Konva.KonvaEventObject<DragEvent>) => {
    setPoint11([evt.evt.offsetX + offsetX.current, evt.evt.offsetY + offsetY.current]);
  };

  const handleDragEvent21 = (evt: Konva.KonvaEventObject<DragEvent>) => {
    setPoint21([evt.evt.offsetX + offsetX.current, evt.evt.offsetY + offsetY.current]);
  };

  const handleDragEvent12 = (evt: Konva.KonvaEventObject<DragEvent>) => {
    setPoint12([evt.evt.offsetX + offsetX.current, evt.evt.offsetY + offsetY.current]);
  };

  const handleDragEvent22 = (evt: Konva.KonvaEventObject<DragEvent>) => {
    setPoint22([evt.evt.offsetX + offsetX.current, evt.evt.offsetY + offsetY.current]);
  };

  const handleMouseOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handleMouseOut = () => {
    document.body.style.cursor = "default";
  };

  return (
    <Stage width={width} height={height}>
      <Layer>
        {/* <LionImage draggable /> */}

        <Circle
          draggable
          x={point11[0]}
          y={point11[1]}
          radius={10}
          stroke="black"
          onDragStart={handleDragStart11}
          onDragMove={handleDragEvent11}
          onDragEnd={handleDragEvent11}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
        <Circle
          draggable
          x={point21[0]}
          y={point21[1]}
          radius={10}
          stroke="black"
          onDragStart={handleDragStart21}
          onDragMove={handleDragEvent21}
          onDragEnd={handleDragEvent21}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
        <Line points={[...point11, ...point21]} stroke="red" strokeWidth={4} lineCap="round" lineJoin="round" />

        <Circle
          draggable
          x={point12[0]}
          y={point12[1]}
          radius={10}
          stroke="black"
          onDragStart={handleDragStart12}
          onDragMove={handleDragEvent12}
          onDragEnd={handleDragEvent12}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
        <Circle
          draggable
          x={point22[0]}
          y={point22[1]}
          radius={10}
          stroke="black"
          onDragStart={handleDragStart22}
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
