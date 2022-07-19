import { TTheme } from "../doman";
import { colors } from "./colors";
import models from "./models";
import params from "./params";

export * from "./params";
export * from "./colors";
export * from "./models";

const dataExport: TTheme = {
  params,
  colors,
  models,
};

export default dataExport;
