import { TTheme } from "../../doman";
import list from "./list";

export const modelData = (theme: TTheme, name: string) => {
  const listModelToParse =
    typeof theme?.models == "object" ? theme?.models : {};

  const models = {
    ...list,
    ...listModelToParse,
  };

  console.log(111, models);

  const sub = name.split(".");
  if (sub.length > 0) {
    let subModel = undefined;
    sub.forEach((f) => {
      if (!subModel) subModel = models[f];
      else subModel = subModel[f];

      console.log(22, subModel, models[f]);
    });

    if (subModel) return subModel;
  }

  return models[name] || {};
};

export default modelData;
