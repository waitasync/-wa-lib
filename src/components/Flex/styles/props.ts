import { css } from "styled-components";
import { TListKeyName, TReceivedProperties, TTheme } from "../../../doman";
import manipulatorTag from "./manipulatorTag";

// import paddingStyle from './paddingStyle'
// import marginStyle from './marginStyle'

const listKeyName: TListKeyName[] = [
  { tag: "color", keyName: "color", callback: undefined },
  { tag: "alignItems", keyName: "align-items", callback: undefined },
  { tag: "background", keyName: "background", callback: undefined },
  { tag: "backgroundColor", keyName: "background-color", callback: undefined },
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
  { tag: "cursor", keyName: "cursor", callback: undefined },
  { tag: "display", keyName: "display", callback: undefined },
  { tag: "flexDirection", keyName: "flex-direction", callback: undefined },
  { tag: "fontSize", keyName: "font-size", callback: undefined },
  { tag: "letterSpacing", keyName: "letter-spacing", callback: undefined },
  { tag: "width", keyName: "width", callback: undefined },
  { tag: "position", keyName: "position", callback: undefined },
  { tag: "justifyContent", keyName: "justify-content", callback: undefined },
  { tag: "transition", keyName: "transition", callback: undefined },
  { tag: "textAlign", keyName: "text-align", callback: undefined },
];

const props = (p: TReceivedProperties) => {
  return css`
    ${listKeyName.map((m: TListKeyName) => {
      if (!m?.keyName.length) return "";
      return manipulatorTag(p.theme, m.keyName, p[m.tag]);
    })}
  `;
};

export default props;
