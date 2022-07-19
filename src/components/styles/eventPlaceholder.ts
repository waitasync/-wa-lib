import { css } from "styled-components";
import { TReceivedPropertiesEvents } from "../../doman";
import receivedProperties from "./receivedProperties";

// aplica subpropriedades onPlaceholder
const events = (p: TReceivedPropertiesEvents) => {
  if (!p?.onPlaceholder) return "";

  return css`
    &::placeholder {
      ${Object.keys(p.onPlaceholder).map((item) => {
        const value = p.onPlaceholder[item];
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
