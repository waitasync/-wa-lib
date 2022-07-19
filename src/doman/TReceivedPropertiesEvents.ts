import { TTheme } from "./TTheme";
import { TReceivedProperties } from "./TReceivedProperties";

export type TReceivedPropertiesEvents = {
  theme: TTheme;
  onHover?: TReceivedProperties | any;
  onActive?: TReceivedProperties | any;
  onPlaceholder?: TReceivedProperties | any;
  onFocus?: TReceivedProperties | any;
};
