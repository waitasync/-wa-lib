import { css } from "styled-components";
import { TListKeyName, TReceivedProperties, TTheme } from "../../../doman";
import manipulatorTag from "./manipulatorTag";
import onPaddingStyle from "./onPaddingStyle";
import onMarginStyle from "./onMarginStyle";
import themeLocal from "../../../theme";

const listKeyName: TListKeyName[] = [
  { tag: "height", keyName: "height", callback: undefined },
  { tag: "width", keyName: "width", callback: undefined },
  { tag: "color", keyName: "color", callback: undefined },
  { tag: "alignItems", keyName: "align-items", callback: undefined },
  { tag: "background", keyName: "background", callback: undefined },
  { tag: "backgroundColor", keyName: "background-color", callback: undefined },
  { tag: "backgroundImage", keyName: "background-image", callback: undefined },
  {
    tag: "backgroundRepeat",
    keyName: "background-repeat",
    callback: undefined,
  },
  {
    tag: "backgroundPosition",
    keyName: "background-position",
    callback: undefined,
  },
  { tag: "backgroundSize", keyName: "background-size", callback: undefined },

  {
    tag: "borderBottomStyle",
    keyName: "border-bottom-style",
    callback: undefined,
  },
  {
    tag: "borderBottomColor",
    keyName: "border-bottom-color",
    callback: undefined,
  },
  {
    tag: "borderBottomWidth",
    keyName: "border-bottom-width",
    callback: undefined,
  },
  { tag: "bg", keyName: "background-color", callback: undefined },
  { tag: "lineHeight", keyName: "line-height", callback: undefined },
  { tag: "cursor", keyName: "cursor", callback: undefined },
  { tag: "display", keyName: "display", callback: undefined },
  { tag: "flexDirection", keyName: "flex-direction", callback: undefined },
  { tag: "fontSize", keyName: "font-size", callback: undefined },
  { tag: "fontFamily", keyName: "font-family", callback: undefined },
  { tag: "letterSpacing", keyName: "letter-spacing", callback: undefined },
  { tag: "position", keyName: "position", callback: undefined },
  { tag: "justifyContent", keyName: "justify-content", callback: undefined },
  { tag: "transition", keyName: "transition", callback: undefined },
  { tag: "textAlign", keyName: "text-align", callback: undefined },
];

const execListProperties = (p: TReceivedProperties) => {
  return listKeyName.map((m: TListKeyName) => {
    if (!m?.keyName.length) return "";
    const valueTag = p[m.tag];
    return manipulatorTag(p?.theme || themeLocal, m.keyName, valueTag);
  });
};

const execPaddingStyle = (p: TReceivedProperties) => {
  return onPaddingStyle(p);
};

const execMarginStyle = (p: TReceivedProperties) => {
  return onMarginStyle(p);
};

const receivedProperties = (p: TReceivedProperties) => {
  return css`
    ${execListProperties(p)}
    ${execPaddingStyle(p)};
    ${execMarginStyle(p)};
  `;
};

export default receivedProperties;
