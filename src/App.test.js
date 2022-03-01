import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./components/App";
import { server } from "./mocks/server";
import "mutationobserver-shim";

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => {
  server.resetHandlers();
  document.body.innerHTML = "";
});

describe("<App />", () => {
  test("[2] Luke Skywalker eventually appears in the DOM", async () => {
    render(<App />);
    expect(screen.queryByText(/Luke/i)).not.toBeInTheDocument();
    setTimeout(() => {
      expect(screen.findByText(/Luke/i)).toBeInTheDocument();
    }, 0)
  });
  test("[3] C-3PO eventually appears in the DOM", async () => {
    render(<App />);
    expect(screen.queryByText(/3PO/i)).not.toBeInTheDocument();
    setTimeout(() => {
      expect(screen.findByText(/3PO/i)).toBeInTheDocument();
    }, 0)
  });
  test("[4] R2-D2 eventually appears in the DOM", async () => {
    render(<App />);
    expect(screen.queryByText(/R2/i)).not.toBeInTheDocument();
    setTimeout(() => {
      expect(screen.findByText(/R2/i)).toBeInTheDocument();
    }, 0)
  });
  test("[5] Darth Vader eventually appears in the DOM", async () => {
    render(<App />);
    expect(screen.queryByText(/Vader/i)).not.toBeInTheDocument();
    setTimeout(() => {
      expect(screen.findByText(/Vader/i)).toBeInTheDocument();
    }, 0)
  });
  test("[6] Leia Organa eventually appears in the DOM", async () => {
    render(<App />);
    expect(screen.queryByText(/Leia/i)).not.toBeInTheDocument();
    setTimeout(() => {
      expect(screen.findByText(/Leia/i)).toBeInTheDocument();
    }, 0)
  });
  test("[7] Owen Lars eventually appears in the DOM", async () => {
    render(<App />);
    expect(screen.queryByText(/Owen/i)).not.toBeInTheDocument();
    setTimeout(() => {
      expect(screen.findByText(/Owen/i)).toBeInTheDocument();
    }, 0)
  });
});
