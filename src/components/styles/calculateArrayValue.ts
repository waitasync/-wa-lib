import Themes from "../../theme";
import { TTheme } from "../../doman";

export default (
  theme?: TTheme,
  value?: number | string | [],
  base?: [],
  data?: { type?: string }
) => {
  if (!value) return undefined;

  if (Array.isArray(value)) {
    let result = [...value];
    for (let i = value.length - 1; i < 5; i++) {
      result.push(value[value.length - 1]);
    }

    return result.map((m, i) => {
      if (typeof m == "number") {
        // forçando um tipo para retorno
        if (data?.type) {
          if (data.type == "number") return m;
        }

        if (base) {
          const sizeList: any = base[i];
          if (Array.isArray(sizeList)) {
            const sizeValue = sizeList.length >= m && sizeList[m];
            if (sizeValue) return sizeValue;
          }
        } else if (theme?.params?.sizes) {
          const sizeList =
            theme?.params?.sizes.length >= m && theme?.params?.sizes[m];

          if (sizeList) {
            const sizeValue = sizeList[m];
            if (sizeValue) return sizeValue;
          }
        } else if (Themes.params.sizes) {
          const sizeList =
            Themes.params.sizes.length >= m && Themes.params.sizes[m];
          if (sizeList) {
            const sizeValue = sizeList[m];
            if (sizeValue) return sizeValue;
          }
        }

        return `${m}px`;
      }
      return m;
    });
  }

  let vl = value;
  if (typeof value == "number") {
    if (theme?.params?.baseSizes) {
      const sizeValue =
        theme?.params?.baseSizes[value] || Themes.params.baseSizes[value];
      if (sizeValue) {
        vl = sizeValue;
      } else {
        vl = `${value}px`;
      }
    }
  }

  return [vl, vl, vl, vl, vl, vl];
};
