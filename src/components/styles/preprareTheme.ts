import { TTheme } from "../../doman";
import themeLocal from "../../theme";

const preprareTheme = (theme?: TTheme): TTheme => {
  const result: TTheme = theme || themeLocal;
  return result;
};

export default preprareTheme;
