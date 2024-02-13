import { useRef } from "react";
import Konva from "konva";
import { Layer, Stage } from "react-konva";

import { HumanEditorProps } from "./HumanEditor.props";
import AppLine from "../AppLine/AppLine";

const HumanEditor = ({ width, height }: HumanEditorProps) => {
  //refs
  const stageRef = useRef<Konva.Stage>(null);
  const shapesLayerRef = useRef<Konva.Layer>(null);
  const tooltipLayerRef = useRef<Konva.Layer>(null);

  return (
    <Stage ref={stageRef} width={width} height={height}>
      <Layer ref={shapesLayerRef}>
        <AppLine initialCoords={[100, 100, 200, 100]} />
        <AppLine initialCoords={[100, 200, 200, 200]} />
        <AppLine initialCoords={[100, 300, 200, 300]} />
        <AppLine initialCoords={[100, 400, 200, 400]} />
      </Layer>
      <Layer ref={tooltipLayerRef}></Layer>
    </Stage>
  );
};

export default HumanEditor;
