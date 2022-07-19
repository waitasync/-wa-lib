import { TTheme } from "../../doman";
import calculateArrayValue from "./calculateArrayValue";
import returnResponsive from "./returnResponsive";

export default (
  theme: TTheme,
  keyName: string,
  value?: number | string | [],
  callback: any | Function = undefined,
  type?: string
) => {
  if (!value) return "";

  const values = calculateArrayValue(theme, value, undefined, { type });
  return returnResponsive(theme, keyName, { values }, callback);
};
