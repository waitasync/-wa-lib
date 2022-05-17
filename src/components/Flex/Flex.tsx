import React from "react";
import * as St from "./styles";
import { TTheme, TPropertiesCSS } from "../../doman";
import themeLocal from "../../theme";

export interface FlexProps {
  children?: string | React.FC | any;
  label?: string | React.FC | any;
  theme?: TTheme;
  color?: string | number | [] | any;
  width?: string | number | [] | any;
  height?: string | number | [] | any;
  alignItems?: string | number | [] | any;
  background?: string | number | [] | any;
  backgroundColor?: string | number | [] | any;
  borderBottomStyle?: string | number | [] | any;
  borderBottomColor?: string | number | [] | any;
  borderBottomWidth?: string | number | [] | any;
  backgroundRepeat?: string | number | [] | any;
  backgroundPosition?: string | number | [] | any;
  backgroundSize?: string | number | [] | any;
  backgroundImage?: string | number | [] | any;
  cursor?: string | number | [] | any;
  display?: string | number | [] | any;
  flexDirection?: string | number | [] | any;
  fontSize?: string | number | [] | any;
  fontFamily?: string | number | [] | any;
  letterSpacing?: string | number | [] | any;
  position?: string | number | [] | any;
  justifyContent?: string | number | [] | any;
  transition?: string | number | [] | any;
  textAlign?: string | number | [] | any;
  px?: string | number | [] | any;
  py?: string | number | [] | any;
  p?: string | number | [] | any;
  padding?: string | number | [] | any;
  pt?: string | number | [] | any;
  pr?: string | number | [] | any;
  pb?: string | number | [] | any;
  pl?: string | number | [] | any;
  mx?: string | number | [] | any;
  my?: string | number | [] | any;
  margin?: string | number | [] | any;
  m?: string | number | [] | any;
  mt?: string | number | [] | any;
  mr?: string | number | [] | any;
  mb?: string | number | [] | any;
  ml?: string | number | [] | any;
  active?: TPropertiesCSS | string | number | [] | any;
  hover?: TPropertiesCSS | string | number | [] | any;
  [x: string]: any;
}

export interface compPrivateProps {
  theme: TTheme;
  children?: string | React.FC | any;
  model?: string;
  width?: string | number | [] | any;
  height?: string | number | [] | any;
  color?: string | number | [] | any;
  alignItems?: string | number | [] | any;
  background?: string | number | [] | any;
  backgroundColor?: string | number | [] | any;
  borderBottomStyle?: string | number | [] | any;
  borderBottomColor?: string | number | [] | any;
  borderBottomWidth?: string | number | [] | any;
  backgroundRepeat?: string | number | [] | any;
  backgroundPosition?: string | number | [] | any;
  backgroundSize?: string | number | [] | any;
  backgroundImage?: string | number | [] | any;
  cursor?: string | number | [] | any;
  display?: string | number | [] | any;
  flexDirection?: string | number | [] | any;
  fontSize?: string | number | [] | any;
  fontFamily?: string | number | [] | any;
  letterSpacing?: string | number | [] | any;
  position?: string | number | [] | any;
  justifyContent?: string | number | [] | any;
  transition?: string | number | [] | any;
  textAlign?: string | number | [] | any;
  px?: string | number | [] | any;
  py?: string | number | [] | any;
  p?: string | number | [] | any;
  padding?: string | number | [] | any;
  pt?: string | number | [] | any;
  pr?: string | number | [] | any;
  pb?: string | number | [] | any;
  pl?: string | number | [] | any;
  mx?: string | number | [] | any;
  my?: string | number | [] | any;
  margin?: string | number | [] | any;
  m?: string | number | [] | any;
  mt?: string | number | [] | any;
  mr?: string | number | [] | any;
  mb?: string | number | [] | any;
  ml?: string | number | [] | any;
  active?: TPropertiesCSS | string | number | [] | any;
  hover?: TPropertiesCSS | string | number | [] | any;
  [x: string]: any;
}

const CompPrivate = (p: compPrivateProps) => {
  return <St.Container {...p}>{p?.children || p?.label}</St.Container>;
};

const Flex = (props: FlexProps) => {
  const component = (
    <CompPrivate {...{ ...props, theme: props?.theme || themeLocal }} />
  );
  return component;
};

export default Flex;
