import { TTheme } from "../doman";
import { colors } from "./colors";
import models from "./models";
import params from "./params";

export * from "./params";
export * from "./colors";
export * from "./models";

const dataExport: TTheme = {
  private: true,
  params,
  colors,
  models,
  variants: {},
};

export default dataExport;
