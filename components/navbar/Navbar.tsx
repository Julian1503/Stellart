import Image from "next/image";
import Link from "next/link";
import classes from "./navbar.module.css";
import { Aboreto } from '@next/font/google';


const aboretoFont = Aboreto({weight:"400", style:"normal", subsets:["latin"]});

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.image_container}>
        <Image src="/images/stellart.svg" alt="Logo" width={250} height={100}/>
      </div>
      <div className={classes.links_container}>
        <ul>
          <li className={classes.link}>
            <Link className={aboretoFont.className} href="">Artwork</Link>
          </li>
          <li className={classes.link}>
            <Link className={aboretoFont.className} href="">Artists</Link>
          </li>
          <li className={classes.link}>
            <Link className={aboretoFont.className} href="">Expositions</Link>
          </li>
          <li className={classes.link}>
            <Link className={aboretoFont.className} href="">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
