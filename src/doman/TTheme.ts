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
  sizes: any | [TBaseSizes];
  baseSizes: TBaseSizes;
  mediaQueries: TMediaQueries;
  breakpoints: TBreakpoints;
  platforms: TPlatforms;
  [x: string]: any;
};

export type TTheme = {
  params?: TParams;
  models?: Function | any;
  [x: string]: any;
};
