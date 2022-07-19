import styled from "styled-components";
import * as styles from "../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: left;
  margin: 0;
  padding: 0;
  color: "#000";

  ${(p) => styles.onProperties(p)};
  ${(p) => styles.onHover(p)};
  ${(p) => styles.onActive(p)};
`;
