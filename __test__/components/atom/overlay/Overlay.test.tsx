import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Overlay from "@/components/atoms/overlay/Overlay";

const testId = "overlay";
const showOverlayClass = "active";

afterEach(() => {
  cleanup();
});

describe("Overlay", () => {
  it("should render properly", () => {
    const { getByTestId } = render(<Overlay />);
    const overlay = getByTestId(testId);
    expect(overlay).toBeInTheDocument();
  });

  it("calls the onClick prop when clicked", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Overlay onClick={onClick} showOverlay />);
    const button = getByTestId(testId);
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it("matches snapshot", () => {
    const button = render(<Overlay showOverlay onClick={() => {}} />);
    expect(button).toMatchSnapshot();
  });

  it("not show the overlay", () => {
    const { getByTestId } = render(<Overlay />);
    const button = getByTestId(testId);
    expect(button).not.toHaveClass(showOverlayClass);
  });

  it("show the overlay", () => {
    const { getByTestId } = render(<Overlay showOverlay />);
    const button = getByTestId(testId);
    expect(button).toHaveClass(showOverlayClass);
  });
});
