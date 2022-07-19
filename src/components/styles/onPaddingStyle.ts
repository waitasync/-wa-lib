import calculateArrayValue from "./calculateArrayValue";
import manipulatorPaddingOrMarginStyling from "./manipulatorPaddingOrMarginStyling";
import returnResponsive from "./returnResponsive";
import { TPaddingStyle } from "../../doman";

/* 
	CSS: padding
	description: Estilização da tag css 
*/

const onPaddingStyle = ({
  theme,
  px,
  py,
  p,
  padding,
  pt,
  pr,
  pb,
  pl,
}: TPaddingStyle) => {
  const Y = calculateArrayValue(theme, py);
  const X = calculateArrayValue(theme, px);
  const E =
    calculateArrayValue(theme, p) || calculateArrayValue(theme, padding);
  const T = calculateArrayValue(theme, pt);
  const R = calculateArrayValue(theme, pr);
  const B = calculateArrayValue(theme, pb);
  const L = calculateArrayValue(theme, pl);

  if (!Y && !X && !E && !T && !R && !B && !L) return "";
  const keyName = "padding";

  return returnResponsive(
    theme,
    keyName,
    { Y, X, E, T, R, B, L },
    manipulatorPaddingOrMarginStyling
  );
};

export default onPaddingStyle;
