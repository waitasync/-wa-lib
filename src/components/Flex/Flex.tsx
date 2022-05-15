import React from "react";
import * as St from "./styles";

export interface FlexProps {
  children?: string | React.FC | any;
  flexDirection?: string | number[] | string[];
}

export interface compPrivateProps {
  children?: string | React.FC | any;
  flexDirection?: string | number[] | string[];
}

const CompPrivate = (props: compPrivateProps) => {
  // const modelList = models(model)
  return (
    <St.Container
      {...{
        ...props,
        // ...modelList,
      }}
    >
      {props.children}
    </St.Container>
  );
};

const Flex = (props: FlexProps) => {
  const component = <CompPrivate {...{ ...props }} />;
  return component;
};

export default Flex;
