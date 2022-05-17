import { TManipulatorPaddingOrMarginStyling } from "../../../doman";
import { css } from "styled-components";

/* 
	obs: E = entity
	classe generia entra margin e padding
*/

const onStyling = (
  platform: number,
  keyName: String,
  data: TManipulatorPaddingOrMarginStyling
) => {
  const { E, X, Y, T, R, B, L } = data;

  let styleResult = "";
  let styleTop = "";
  let styleRight = "";
  let styleBottom = "";
  let styleLeft = "";

  if (E) {
    styleResult = `${keyName}:${E[platform]};`;
  } else if (T && R && B && L) {
    styleResult = `${keyName}:${T[platform] || 0} ${R[platform] || 0} ${
      B[platform] || 0
    } ${L[platform] || 0};`;
  } else if (Y && X) {
    styleResult = `${keyName}:${Y[platform]} ${X[platform]} ${Y[platform]} ${X[platform]};`;
  } else if (X) {
    styleResult = `${keyName}: 0 ${X[platform]} 0 ${X[platform]};`;
  } else if (Y) {
    styleResult = `${keyName}: ${Y[platform]} 0 ${Y[platform]} 0;`;
  }

  if (T) {
    styleTop = `${keyName}-top: ${T[platform]};`;
  }

  if (R) {
    styleRight = `${keyName}-right: ${R[platform]};`;
  }
  if (B) {
    styleBottom = `${keyName}-bottom: ${B[platform]};`;
  }
  if (L) {
    styleLeft = `${keyName}-left: ${L[platform]};`;
  }

  return css`
    ${styleResult}
    ${styleTop}
		${styleRight}
		${styleBottom}
		${styleLeft}
  `;
};

export default onStyling;
