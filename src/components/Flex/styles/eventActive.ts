import { css } from "styled-components";
import { TReceivedPropertiesEvents } from "../../../doman";
import receivedProperties from "./receivedProperties";

// aplica subpropriedades active
const eventActive = (p: TReceivedPropertiesEvents) => {
  if (!p?.active) return "";

  return css`
    :active {
      ${Object.keys(p?.active).map((item, i) => {
        const value = p?.active[item];
        const resProps = receivedProperties({
          theme: p?.theme,
          [item]: value,
        });
        return resProps;
      })}
    }
  `;
};

export default eventActive;
