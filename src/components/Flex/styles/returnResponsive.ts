import { TTheme } from "../../../doman";
import { css } from "styled-components";
import styling from "./manipulatorStyling";

const returnResponsive = (
  theme: TTheme,
  keyName: string,
  data: string[] | number[] | [] | any,
  callback: Function | any = undefined
) => {
  const mediaQueries = theme?.mediaQueries;
  const platforms = theme?.platforms;

  const list = [
    mediaQueries[platforms?.mobile],
    mediaQueries[platforms?.mobileLyingDown],
    mediaQueries[platforms?.tablet],
    mediaQueries[platforms?.computer],
    mediaQueries[platforms?.desktop],
    mediaQueries[platforms?.widescreen],
  ];

  return list.map((m, platform) => {
    return css`
      ${m} {
        ${callback
          ? callback(platform, keyName, data)
          : styling(platform, keyName, data)};
      }
    `;
  });
};

export default returnResponsive;
