import layouts from "./layouts";

const models = {
  ...layouts,
};

export const getModal = (name) => {
  return models[name] || {};
};

export default getModal;
