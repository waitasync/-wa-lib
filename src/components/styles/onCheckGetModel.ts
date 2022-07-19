import { TPropertiesCSS, TReceivedProperties } from "../../doman";
import themeLocal from "../../theme";

export default (p: TReceivedProperties) => {
  try {
    if (!p?.model) return p;
    if (!p.theme?.models) return p;
    let results: any = { ...p };

    const modelRes: TPropertiesCSS | any = themeLocal.models(p.theme, p?.model);
    if (!modelRes) return p;

    // mesclando dados
    Object.keys(modelRes).forEach((fieldName: string) => {
      if (
        Object.keys(modelRes).find((f) => f == fieldName) &&
        !results[fieldName] &&
        modelRes[fieldName]
      ) {
        console.log("modelLocal", fieldName, results[fieldName]);
        results[fieldName] = modelRes[fieldName];
      }
    });

    return results;
  } catch (error) {
    return p;
  }
};
