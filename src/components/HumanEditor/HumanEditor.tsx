import { useRef } from "react";
import Konva from "konva";
import { Layer, Stage, Text } from "react-konva";

import { HumanEditorProps } from "./HumanEditor.props";
import AppLine from "../AppLine/AppLine";

const HumanEditor = ({ width, height }: HumanEditorProps) => {
  //refs
  const stageRef = useRef<Konva.Stage>(null);
  const shapesLayerRef = useRef<Konva.Layer>(null);
  const tooltipLayerRef = useRef<Konva.Layer>(null);
  const tooltipRef = useRef<Konva.Text>(null);

  // handlers
  const handleDragMove = (e: Konva.KonvaEventObject<DragEvent>) => {
    const { x, y } = e.target.attrs;
    if (tooltipRef.current) {
      tooltipRef.current.position({ x: x + 20, y: y + 20 });
      tooltipRef.current.text("Red Circle");
      tooltipRef.current.show();
    }
  };

  const handleDragDrop = () => {
    if (tooltipRef.current) {
      tooltipRef.current.hide();
    }
  };

  return (
    <Stage ref={stageRef} width={width} height={height}>
      <Layer ref={shapesLayerRef}>
        <AppLine initialCoords={[100, 100, 200, 100]} onDragMove={handleDragMove} onDragDrop={handleDragDrop} />
        <AppLine initialCoords={[100, 200, 200, 200]} onDragMove={handleDragMove} onDragDrop={handleDragDrop} />
        <AppLine initialCoords={[100, 300, 200, 300]} onDragMove={handleDragMove} onDragDrop={handleDragDrop} />
        <AppLine initialCoords={[100, 400, 200, 400]} onDragMove={handleDragMove} onDragDrop={handleDragDrop} />
      </Layer>
      <Layer ref={tooltipLayerRef}>
        <Text ref={tooltipRef} text="Some text on canvas" fontColor="red" fontSize={15} visible={false} />
      </Layer>
    </Stage>
  );
};

export default HumanEditor;
