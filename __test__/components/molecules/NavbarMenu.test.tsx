import React, { useState } from "react";
import { render, fireEvent } from "@testing-library/react";
import { NavLink } from "@/constants/types";
import NavbarMenu from "@/components/molecules/navbar-menu/NavbarMenu";

const menuTestId = "menu";
const btnLoginTestId = "btn";

describe("Navbar Menu", () => {
  let links: Array<NavLink>,
    showLoginButton: boolean,
    isMenuOpen: boolean,
    handleMenu: () => void;

  beforeEach(() => {
    links = [
      { id: 1, link: "/home", text: "Home" },
      { id: 2, link: "/about", text: "About" },
      { id: 3, link: "/contact", text: "Contact" },
    ];
    showLoginButton = true;
    isMenuOpen = false;
    handleMenu = jest.fn();
  });

  it("should render the component with the correct links", () => {
    const { getByTestId } = render(
      <NavbarMenu
        links={links}
        showLoginButton={false}
        isMenuOpen={false}
        handleMenu={() => {}}
      />
    );
    console.log(getByTestId(menuTestId));
    const navLinks = getByTestId(menuTestId).querySelectorAll(
      '[data-testid^="btnNav"]'
    );

    expect(navLinks.length).toBe(links.length);
    links.forEach((link, index) => {
      expect(navLinks[index]).toHaveTextContent(link.text);
    });
  });

  it("should render the login button when showLoginButton is set to true", () => {
    const { getByTestId } = render(
      <NavbarMenu
        links={links}
        showLoginButton={true}
        isMenuOpen={false}
        handleMenu={() => {}}
      />
    );
    const loginBtn = getByTestId(btnLoginTestId);

    expect(loginBtn).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const button = render(
      <NavbarMenu
        links={links}
        showLoginButton={false}
        isMenuOpen={true}
        handleMenu={() => {}}
      />
    );
    expect(button).toMatchSnapshot();
  });
});
