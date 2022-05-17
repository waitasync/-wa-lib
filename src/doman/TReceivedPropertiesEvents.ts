import { TTheme } from "./TTheme";
import { TReceivedProperties } from "./TReceivedProperties";

export type TReceivedPropertiesEvents = {
  theme: TTheme;
  hover?: TReceivedProperties | object | string | number | [] | any;
  active?: TReceivedProperties | object | string | number | [] | any;
};
