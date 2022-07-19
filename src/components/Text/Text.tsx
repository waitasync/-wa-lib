import React, { useState, useEffect, memo } from "react";
import * as St from "./styles";
import {
  TTheme,
  ICompPrivateInputProps,
  EWhiteSpace,
  TPropertiesCSS,
} from "../../doman";
import preprareTheme from "../styles/preprareTheme";
import Flex from "../Flex";
import themeLocal from "../../theme";
import onCheckGetModel from "../styles/onCheckGetModel";

export interface InputProps {
  theme?: TTheme;
  rows?: number | any;
  label?: string | React.FC | any;
  value?: string | string[] | any;
  onChange?: string | number | string[] | number[] | any;
  width?: string | number | string[] | number[] | any;
  height?: string | number | string[] | number[] | any;
  color?: string | string[] | any;
  background?: string | string[] | any;
  backgroundColor?: string | string[] | any;
  borderBottomStyle?: string | string[] | any;
  borderBottomColor?: string | string[] | any;
  borderBottomWidth?: string | number[] | string[] | any;
  backgroundRepeat?: string | number | number[] | string[] | any;
  backgroundPosition?: string | string[] | any;
  backgroundSize?: string | number | number[] | string[] | any;
  backgroundImage?: string | number | number[] | string[] | any;
  cursor?: string | string[] | any;
  display?: string | string[] | any;
  flexDirection?: string | string[] | any;
  fontSize?: string | number | number[] | string[] | any;
  fontFamily?: string | string[] | any;
  letterSpacing?: string | number | number[] | string[] | any;
  position?: string | string[] | any;
  justifyContent?: string | string[] | any;
  transition?: string | string[] | any;
  textAlign?: string | string[] | any;
  textShadow?: string | string[] | any;
  px?: string | string[] | number | number[] | any;
  py?: string | string[] | number | number[] | any;
  p?: string | string[] | number | number[] | any;
  padding?: string | string[] | number | number[] | any;
  pt?: string | string[] | number | number[] | any;
  pr?: string | string[] | number | number[] | any;
  pb?: string | string[] | number | number[] | any;
  pl?: string | string[] | number | number[] | any;
  mx?: string | string[] | number | number[] | any;
  my?: string | string[] | number | number[] | any;
  margin?: string | string[] | number | number[] | any;
  m?: string | string[] | number | number[] | any;
  mt?: string | string[] | number | number[] | any;
  mr?: string | string[] | number | number[] | any;
  mb?: string | string[] | number | number[] | any;
  ml?: string | string[] | number | number[] | any;
  outline?: string | string[] | any;
  borderRadius?: string | string[] | any;
  border?: string | string[] | any;
  error?: boolean | boolean[] | any; // defini error
  message?: boolean | boolean[] | any; // defini error
  labelCustom?: TPropertiesCSS | any;

  placeholder?: string | string[] | any;
  fnPlaceholder?: TPropertiesCSS | any;
}

const CompPrivate = (p: ICompPrivateInputProps) => {
  const model = p?.model || "prv.default";
  const props = onCheckGetModel(p);

  const {
    theme,
    flexDirection,
    width,
    rows,
    label,
    error,
    message,
    labelCustom,
    ...sendProsInput
  } = props;

  let propsError = {};
  if (!error) {
    propsError = {
      error,
      message,
      color: p.theme?.colors?.danger | themeLocal.colors.danger,
    };
  }

  return (
    <Flex
      {...{
        p: [4],
        borderRadius: [5],
        width,
        ...(flexDirection
          ? {
              flexDirection,
            }
          : {}),
      }}
    >
      {label && (
        <Flex
          {...{
            pb: [3],
            pr: [3],
            whiteSpace: EWhiteSpace.pre,
            ...propsError,
            ...labelCustom,
          }}
          children={label}
        />
      )}
      <Flex>
        <St.Container {...{ ...sendProsInput, model, rows }} />
      </Flex>
    </Flex>
  );
};

const Input = (p: InputProps) => {
  return <CompPrivate {...p} theme={preprareTheme(p.theme)} />;
};

export default Input;
