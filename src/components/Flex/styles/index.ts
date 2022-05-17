import styled from "styled-components";
import { TPropertiesCSS, TReceivedProperties } from "../../../doman";
import receivedProperties from "./receivedProperties";
import eventHover from "./eventHover";
import eventActive from "./eventActive";

const onCheckGetModel = (p: TReceivedProperties) => {
  try {
    if (!p?.model) return p;
    if (!p.theme?.models) return p;
    let results: any = { ...p };

    const models: Function | undefined = p.theme?.models;
    const modelRes: TPropertiesCSS | any = models && models(p?.model);
    if (!modelRes) return p;
    Object.keys(modelRes).forEach((fieldName: string) => {
      if (
        Object.keys(modelRes).find((f) => f == fieldName) &&
        !results[fieldName] &&
        modelRes[fieldName]
      ) {
        results[fieldName] = modelRes[fieldName];
      }
    });

    return results;
  } catch (error) {
    console.log("aqui", 99999, error);
    return p;
  }
};

const onProperties = (p: TReceivedProperties) => {
  return receivedProperties(onCheckGetModel(p));
};

const onHover = (p: TReceivedProperties) => {
  const modelList: TPropertiesCSS = onCheckGetModel(p);
  const { hover, theme } = p;
  const dataSend = modelList?.hover || hover;
  return eventHover({ hover: dataSend, theme });
};

const onActive = (p: TReceivedProperties) => {
  const modelList: TPropertiesCSS = onCheckGetModel(p);
  const { active, theme } = p;
  const dataSend = modelList?.active || active;
  return eventActive({ active: dataSend, theme });
};

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: left;
  margin: 0;
  padding: 0;
  color: "#000";

  ${(p) => onProperties(p)};
  ${(p) => onHover(p)};
  ${(p) => onActive(p)};
`;
