import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./router";

test("renders banner title", () => {
  render(<App />);
  const linkElement = screen.getByText(/I'm Zeu!/i);
  expect(linkElement).toBeInTheDocument();
});
