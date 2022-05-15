import styled from "styled-components";
import { TReceivedProperties } from "../../../doman";
import props from "./props";
// import props from './props'
// import eventHover from './eventHover'
// import eventActive from './eventActive'

const propExecute = (p: any) => {
  const { hover, active, ...propsValue } = p;
  return props(propsValue);
};

export const Container = styled.div`
  display: flex;

  ${propExecute};
`;
