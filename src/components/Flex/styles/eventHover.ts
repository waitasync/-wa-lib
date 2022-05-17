import { css } from "styled-components";
import { TReceivedPropertiesEvents } from "../../../doman";
import receivedProperties from "./receivedProperties";

// aplica subpropriedades hover
const events = (p: TReceivedPropertiesEvents) => {
  if (!p?.hover) return "";

  return css`
    &:hover {
      ${Object.keys(p.hover).map((item) => {
        const value = p.hover[item];
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
