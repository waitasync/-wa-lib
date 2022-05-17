import { TBaseSizes, TParams } from "../doman";

export const platforms = {
  mobile: "mobile",
  mobileLyingDown: "mobileLyingDown",
  tablet: "tablet",
  computer: "computer",
  desktop: "desktop",
  widescreen: "widescreen",
};

export const breakpoints = [
  "0px",
  "650px",
  "850px",
  "1280px",
  "1376px",
  "2000px",
  "2900px",
];

export const mediaQueries = {
  mobile: `@media screen and (min-width: ${breakpoints[0]})`,
  mobileLyingDown: `@media screen and (min-width: ${breakpoints[1]})`,
  tablet: `@media screen and (min-width: ${breakpoints[2]})`,
  computer: `@media screen and (min-width: ${breakpoints[3]})`,
  desktop: `@media screen and (min-width: ${breakpoints[4]})`,
  widescreen: `@media screen and (min-width: ${breakpoints[5]})`,
};

let totalSizes: string[] = [];
let valueSize = 0.05;
let valueNowSize = 0;
for (let i = 0; i < 500; i++) {
  valueNowSize += valueSize;
  totalSizes.push(`${valueNowSize}em`);
}

export const baseSizes: TBaseSizes = totalSizes;

const sizesBase = [
  baseSizes,
  baseSizes,
  baseSizes,
  baseSizes,
  baseSizes,
  baseSizes,
  baseSizes,
];
export const sizes = sizesBase;

const fontSizesBase = [
  baseSizes,
  baseSizes,
  baseSizes,
  baseSizes,
  baseSizes,
  baseSizes,
  baseSizes,
];
export const fontSizes = fontSizesBase;

const dataExport: TParams = {
  baseSizes,
  sizes,
  mediaQueries,
  breakpoints: [],
  platforms,
};
export default dataExport;
