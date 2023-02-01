import Image from "next/image";
import classes from "./navbar.module.css";
import { useState } from "react";
import BurguerButton from "../burguer-button/BurguerButton";
import { NavLink } from "@/constants/types";
import CloseButton from "../close-button/CloseButton";
import NavButton from "./nav-button/NavButton";
import Button from "../button/Button";

type NavbarProps = {
  links: Array<NavLink>;
};

function Navbar({ links }: NavbarProps) {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <nav className={classes.navbar}>
      <div className={classes.image_container}>
        <Image src="/images/stellart.svg" alt="Logo" width={190} height={100} />
      </div>
      <BurguerButton className={classes.btn_burguer} onClick={() => setMenuOpen((prev) => !prev)} />
      <div
        className={`${classes.links_container}  ${
          isMenuOpen ? classes.open : ""
        }`}
      >
        <CloseButton
          className={classes.btn_close}
          onClick={() => setMenuOpen((prev) => !prev)}
        />
        <ul>
          {links.map((link) => (
            <NavButton key={link.id} link={link.link} text={link.text} />
          ))}
          <li>
            <Button className={classes.btn_login} link={"/Login"} text={"Login"} />
          </li>
        </ul>
      </div>
      <div
        onClick={() => setMenuOpen(false)}
        className={` ${classes.overlay}   ${isMenuOpen ? classes.active : ""}`}
      />
    </nav>
  );
}

export default Navbar;
