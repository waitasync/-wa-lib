import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Flex from "./Flex";

describe("Flex", () => {
  test("renders the Flex component", () => {
    render(<Flex />);
  });
});
