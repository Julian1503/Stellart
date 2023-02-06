import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavButton from "@/components/atoms/nav-button/NavButton";

const testId = "btnNav1";
const testClass = "test-class";
const text = "Test button";
const link = "/test-link";

afterEach(() => {
  cleanup();
});

describe("Navbar button", () => {
  it("renders the nav button correctly", () => {
    const { getByTestId } = render(
      <NavButton id={1} link={link} text={text} />
    );
    const btnNav = getByTestId(testId);
    expect(btnNav).toBeInTheDocument();
  });

  it("renders the correct text content in the nav button", () => {
    const { getByTestId } = render(
      <NavButton id={1} link={link} text={text} />
    );
    const btnNav = getByTestId(testId);
    expect(btnNav).toHaveTextContent(text);
  });

  it("renders the correct link in the nav button", () => {
    const { getByTestId } = render(
      <NavButton id={1} link={link} text={text} />
    );
    const btnNav = getByTestId(testId);
    expect(btnNav.querySelector("a")).toHaveAttribute("href", link);
  });

  it("renders the correct class name in the nav button", () => {
    const { getByTestId } = render(
      <NavButton id={1} link={link} text={text} className={testClass} />
    );
    const btnNav = getByTestId(testId);
    expect(btnNav).toHaveClass(testClass);
  });

  it("matches snapshot", () => {
    const button = render(
      <NavButton id={1} className={testClass} link={link} text={text} />
    );
    expect(button).toMatchSnapshot();
  });
});
