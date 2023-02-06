import Image from "next/image";
import classes from "./navbar.module.css";
import { useState } from "react";
import { NavLink } from "@/constants/types";
import Overlay from "@/atoms/overlay/Overlay";
import NavbarMenu from "@/molecules/navbar-menu/NavbarMenu";

type NavbarProps = {
  links: Array<NavLink>;
  iconSrc: string;
};

function Navbar({ links, iconSrc }: NavbarProps) {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <nav data-testid="navbar" className={classes.navbar}>
      <div data-testid="logo-container" className={classes.image_container}>
        <Image data-testid="logo" src={iconSrc} alt="Logo" width={190} height={100} />
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
