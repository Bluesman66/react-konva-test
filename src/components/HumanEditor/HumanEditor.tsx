import { Layer, Stage } from "react-konva";

import { HumanEditorProps } from "./HumanEditor.props";
import AppLine from "../AppLine/AppLine";

const HumanEditor = ({ width, height }: HumanEditorProps) => {
  return (
    <Stage width={width} height={height}>
      <Layer>
        <AppLine initialCoords={[100, 100, 200, 100]} />
        <AppLine initialCoords={[100, 200, 200, 200]} />
        <AppLine initialCoords={[100, 300, 200, 300]} />
        <AppLine initialCoords={[100, 400, 200, 400]} />
      </Layer>
    </Stage>
  );
};

export default HumanEditor;
