import { IColors } from "./interfaces";

export type TBaseSizes = string[] | number[];
export type TBreakpoints = string[];
export type TPlatforms = {
  mobile: string;
  mobileLyingDown: string;
  tablet: string;
  computer: string;
  desktop: string;
  widescreen: string;
};

export type TMediaQueries = {
  mobile: string;
  mobileLyingDown: string;
  tablet: string;
  computer: string;
  desktop: string;
  widescreen: string;
};

export type TParams = {
  platforms: TPlatforms;
  breakpoints: TBreakpoints;
  mediaQueries: TMediaQueries;
  baseSizes: TBaseSizes;
  sizes: any | [TBaseSizes];
};

export type TTheme = {
  params: TParams;
  models: Function | Object | any;
  colors: IColors;
};
