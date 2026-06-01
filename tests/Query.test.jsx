import { screen, getByLabelText } from "@testing-library/dom";
import { render } from "@testing-library/react";
import Query from "../src/Query";

describe("Query component", () => {
  it("renders the input with the correct label", () => {
    render(<Query />);

    const inputNode1 = screen.getByLabelText("Username");
    expect(inputNode1).toBeInTheDocument();

    const container = document.querySelector("#app");
    const inputNode2 = getByLabelText(container, "Username");
    expect(inputNode2).toBeInTheDocument();
  });

  it("matches the snapshot", () => {
    const { container } = render(<Query />);
    expect(container).toMatchSnapshot();
  });

  it("fails when the text is not found", () => {
    render(<Query />);
    screen.getByText("llo Worl", { exact: false });
    screen.getByText("hello world", { exact: false });
  });
});

// const inputNode1 = screen.getByLabelText("Username");

// const container = document.querySelector("#app");
// const inputNode2 = getByLabelText(container, "Username");
