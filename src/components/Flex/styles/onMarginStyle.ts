import { TMarginStyle } from "../../../doman";
import calculateArrayValue from "./calculateArrayValue";
import manipulatorPaddingOrMarginStyling from "./manipulatorPaddingOrMarginStyling";
import returnResponsive from "./returnResponsive";

/* 
	CSS: margin
	description: Estilização da tag css 
*/

export default ({ theme, mx, my, margin, m, mt, mr, mb, ml }: TMarginStyle) => {
  const Y = calculateArrayValue(theme, my);
  const X = calculateArrayValue(theme, mx);
  const E = calculateArrayValue(theme, m) || calculateArrayValue(theme, margin);
  const T = calculateArrayValue(theme, mt);
  const R = calculateArrayValue(theme, mr);
  const B = calculateArrayValue(theme, mb);
  const L = calculateArrayValue(theme, ml);

  if (!Y && !X && !E && !T && !R && !B && !L) return "";
  const keyName = "margin";

  return returnResponsive(
    theme,
    keyName,
    { Y, X, E, T, R, B, L },
    manipulatorPaddingOrMarginStyling
  );
};
