import { useState } from "react";
import CloseButton from "@/atoms/close-button/CloseButton";
import NavButton from "@/atoms/nav-button/NavButton";
import Button from "@/atoms/button/Button";
import classes from "./navbar-menu.module.css";
import { NavLink } from "@/constants/types";
import BurgerButton from "@/atoms/burger-button/BurgerButton";

type NavbarMenuProps = { links: Array<NavLink>; showLoginButton: boolean; isMenuOpen: boolean; handleMenu: ()=>void};

function NavbarMenu({ links, showLoginButton, isMenuOpen, handleMenu}: NavbarMenuProps) {
  return (
    <>
      <BurgerButton
        className={classes.btn_burger}
        onClick={handleMenu}
      />
      <div
        data-testid="menu"
        className={`${classes.links_container}  ${
          isMenuOpen ? classes.open : ""
        }`}
      >
        <CloseButton
          className={isMenuOpen ? classes.btn_close_menu_opened : classes.btn_close_menu_closed}
          onClick={handleMenu}
        />
        <ul>
          {links.map((link) => (
            <NavButton id={link.id} key={link.id} link={link.link} text={link.text}/>
          ))}
          {showLoginButton && (
            <li>
              <Button
                hasShadow
                width={170}
                height={49}
                link={"/Login"}
                text={"Login"}
              />
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default NavbarMenu;
