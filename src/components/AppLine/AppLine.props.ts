import Konva from "konva";

import { BaseProps } from "../../models/Base.props";

export interface AppLineProps extends BaseProps {
  initialCoords: number[];
  pointRadius?: number;
  pointColor?: string;
  lineColor?: string;
  lineWidth?: number;
  onDragBegin?: (e: Konva.KonvaEventObject<DragEvent>) => void;
  onDragDrop?: (e: Konva.KonvaEventObject<DragEvent>) => void;
  onDragMove?: (e: Konva.KonvaEventObject<DragEvent>) => void;
}
