import { TTheme } from "../../../doman";
import calculateArrayValue from "./calculateArrayValue";
import returnResponsive from "./returnResponsive";

export default (
  theme: TTheme,
  keyName: string,
  value?: number | string | [],
  callback: any | Function = undefined
) => {
  if (!value) return "";
  const values = calculateArrayValue(theme, value);
  console.log(keyName);
  return returnResponsive(theme, keyName, { values }, callback);
};
