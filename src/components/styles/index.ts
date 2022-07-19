import { TPropertiesCSS, TReceivedProperties } from "../../doman";
import receivedProperties from "./receivedProperties";

import eventHover from "./eventHover";
import eventActive from "./eventActive";
import eventPlaceholder from "./eventPlaceholder";
import eventFocus from "./eventFocus";
import onCheckGetModel from "./onCheckGetModel";

export const onProperties = (p: TReceivedProperties) => {
  return receivedProperties(onCheckGetModel(p));
};

export const onHover = (p: TReceivedProperties) => {
  const modelList: TPropertiesCSS = onCheckGetModel(p);
  const { fnHover, theme } = p;
  const dataSend = modelList?.fnHover || fnHover;
  return eventHover({ onHover: dataSend, theme });
};

export const onActive = (p: TReceivedProperties) => {
  const modelList: TPropertiesCSS = onCheckGetModel(p);
  const { fnActive, theme } = p;
  const dataSend = modelList?.fnActive || fnActive;
  return eventActive({ onActive: dataSend, theme });
};

export const onPlaceholder = (p: TReceivedProperties) => {
  const modelList: TPropertiesCSS = onCheckGetModel(p);
  const { fnPlaceholder, theme } = p;
  const dataSend = modelList?.fnPlaceholder || fnPlaceholder;
  return eventPlaceholder({ onPlaceholder: dataSend, theme });
};

export const onFocus = (p: TReceivedProperties) => {
  try {
    const modelList: TPropertiesCSS = onCheckGetModel(p);
    const dataSend = modelList?.fnFocus || p?.fnFocus;
    return eventFocus({ onFocus: dataSend, theme: p.theme });
  } catch (error) {
    console.log(error);
    return "";
  }
};
