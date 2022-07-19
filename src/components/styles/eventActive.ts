import { css } from "styled-components";
import { TReceivedPropertiesEvents } from "../../doman";
import receivedProperties from "./receivedProperties";

// aplica subpropriedades active
const eventActive = (p: TReceivedPropertiesEvents) => {
  if (!p?.onActive) return "";

  return css`
    :active {
      ${Object.keys(p?.onActive).map((item, i) => {
        const value = p?.onActive[item];
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
