import { TTheme } from "../../../doman";

export default (theme?: TTheme, value?: number | string | [], base?: []) => {
  if (!value) return undefined;

  if (Array.isArray(value)) {
    let result = [...value];
    for (let i = value.length - 1; i < 5; i++) {
      result.push(value[value.length - 1]);
    }

    return result.map((m, i) => {
      if (typeof m == "number") {
        if (base) {
          try {
            const sizeList = base[i];
            if (sizeList) {
              const sizeValue = sizeList[m];
              if (sizeValue) {
                return sizeValue;
              }
            }
          } catch (error) {
            console.log("calculateArrayValue.error", error);
          }
        } else if (theme?.params?.sizes) {
          const sizeList = theme?.params.sizes[m];
          const sizeValue = sizeList[m];
          if (sizeValue) {
            return sizeValue;
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
      const sizeValue = theme?.params?.baseSizes[value];
      if (sizeValue) vl = sizeValue;
    }
  }

  return [vl, vl, vl, vl, vl, vl];
};
