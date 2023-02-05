import Image from "next/image";
import classes from "./navbar.module.css";
import { useState } from "react";
import BurguerButton from "../burguer-button/BurguerButton";
import { NavLink } from "@/constants/types";
import CloseButton from "../close-button/CloseButton";
import NavButton from "../nav-button/NavButton";
import Button from "../button/Button";
import Overlay from "../overlay/Overlay";
import NavbarMenu from "../navbar-menu/NavbarMenu";

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
      <NavbarMenu showLoginButton links={links} isMenuOpen={isMenuOpen} handleMenu={ () => setMenuOpen((prevState) => !prevState)}/>
      <Overlay
        onClick={() => setMenuOpen(false)}
        showOverlay={isMenuOpen}
      />
    </nav>
  );
}

export default Navbar;
