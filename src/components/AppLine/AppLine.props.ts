import { BaseProps } from "../../models/Base.props";

export interface AppLineProps extends BaseProps {
  initialCoords: number[];
  pointRadius?: number;
  pointColor?: string;
  lineColor?: string;
  lineWidth?: number;
}
