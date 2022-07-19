import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  test("renders the Input component", () => {
    render(<Input />);
  });
});
