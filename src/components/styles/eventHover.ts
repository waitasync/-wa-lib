import { css } from "styled-components";
import { TReceivedPropertiesEvents } from "../../doman";
import receivedProperties from "./receivedProperties";

// aplica subpropriedades onHover
const events = (p: TReceivedPropertiesEvents) => {
  if (!p?.onHover) return "";

  return css`
    &:hover {
      ${Object.keys(p.onHover).map((item) => {
        const value = p.onHover[item];
        const resProps = receivedProperties({
          theme: p.theme,
          [item]: value,
        });

        return resProps;
      })}
    }
  `;
};

export default events;
