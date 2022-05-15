import { TManipulatorStylingData } from "../../../doman";

export default (i: number, name: string, data: TManipulatorStylingData) => {
  let styleResult: string | undefined = undefined;
  if (!data?.values) return styleResult;

  styleResult = `
    ${`${name}: ${data?.values[i]};`}
  `;

  return styleResult;
};
