import { useState } from "react";
import CloseButton from "../close-button/CloseButton";
import NavButton from "../nav-button/NavButton";
import Button from "../button/Button";
import classes from "./navbar-menu.module.css";
import { NavLink } from "@/constants/types";
import BurguerButton from "../burguer-button/BurguerButton";

type NavbarMenuProps = { links: Array<NavLink>; showLoginButton: boolean; isMenuOpen: boolean; handleMenu: ()=>void};

function NavbarMenu({ links, showLoginButton, isMenuOpen, handleMenu}: NavbarMenuProps) {
  return (
    <>
      <BurguerButton
        className={classes.btn_burguer}
        onClick={handleMenu}
      />
      <div
        className={`${classes.links_container}  ${
          isMenuOpen ? classes.open : ""
        }`}
      >
        <CloseButton
          className={classes.btn_close}
          onClick={handleMenu}
        />
        <ul>
          {links.map((link) => (
            <NavButton key={link.id} link={link.link} text={link.text} />
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
