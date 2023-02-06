import React from "react";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import Navbar from "@/components/organisms/navbar/Navbar";

const links = [
  { id: 1, link: "/home", text: "Home" },
  { id: 2, link: "/about", text: "About" },
  { id: 3, link: "/contact", text: "Contact" },
];

afterEach(cleanup);
const ICON_SRC = "/images/stellart.svg";

describe("Navbar component", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(<Navbar links={links} iconSrc={ICON_SRC} />);
    const navbar = getByTestId("navbar");
    expect(navbar).toBeInTheDocument();
  });

  it("renders the logo with the correct src", () => {
    const { getByTestId } = render(<Navbar links={links} iconSrc={ICON_SRC} />);
    const logo = getByTestId("logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", ICON_SRC);
  });

  it("renders the menu with the correct links", () => {
    const { getByTestId } = render(<Navbar links={links} iconSrc={ICON_SRC} />);
    const menu = getByTestId("menu");
    expect(menu).toBeInTheDocument();
    links.forEach((link) => {
      const navButton = getByTestId(`btnNav${link.id}`);
      expect(navButton).toBeInTheDocument();
      expect(navButton).toHaveTextContent(link.text);
    });
  });

  it("opens and closes the menu when the burger button is clicked", async () => {
    const { getByTestId } = render(<Navbar links={links} iconSrc={ICON_SRC} />);
    const btnBurger = getByTestId("btnBurger");
    const btnClose = getByTestId("btnClose");
    const overlay = getByTestId("overlay");

    expect(btnClose).toHaveClass("btn_close_menu_closed");
    expect(btnClose).not.toHaveClass("btn_close_menu_opened");
    expect(overlay).not.toHaveClass("active");

    fireEvent.click(btnBurger);

    await waitFor(() => {
      expect(btnClose).not.toHaveClass("btn_close_menu_closed");
      expect(btnClose).toHaveClass("btn_close_menu_opened");
      expect(overlay).toHaveClass("active");
    });

    fireEvent.click(btnClose);

    await waitFor(() => {
      expect(btnClose).toHaveClass("btn_close_menu_closed");
      expect(btnClose).not.toHaveClass("btn_close_menu_opened");
      expect(overlay).not.toHaveClass("active");
    });
  });

  it("matches snapshot", () => {
    const button = render(<Navbar links={links} iconSrc={ICON_SRC} />);
    expect(button).toMatchSnapshot();
  });
});
