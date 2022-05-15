export type TBaseSizes = [];

export type TParams = {
  sizes: any | [TBaseSizes];
  baseSizes: TBaseSizes;
  [x: string]: any;
};

export type TTheme = {
  params?: TParams;
  [x: string]: any;
};
