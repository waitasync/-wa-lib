import { css } from "styled-components";
import { TReceivedPropertiesEvents } from "../../doman";
import receivedProperties from "./receivedProperties";

// aplica subpropriedades onFocus
const events = (p: TReceivedPropertiesEvents) => {
  if (!p?.onFocus) return "";

  return css`
    &:hover {
      ${Object.keys(p.onFocus).map((item) => {
        const value = p.onFocus[item];
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
