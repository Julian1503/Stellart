import Link from "next/link";
import classes from "./navbutton.module.css";

type NavButtonProps = {
  className?: string;
  link: string;
  text: string;
};

function NavButton({ className, link, text }: NavButtonProps) {
  return (
    <li className={`${classes.link}${className ? className : ""}`}>
      <Link href={link}>{text}</Link>
    </li>
  );
}

export default NavButton;
