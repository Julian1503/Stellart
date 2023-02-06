import Link from "next/link";
import classes from "./navbutton.module.css";

type NavButtonProps = {
  className?: string;
  link: string;
  text: string;
  id: number | string;
};

function NavButton({id, link, text, className} : NavButtonProps) {
  return (
    <li data-testid={`btnNav${id}`} className={`${classes.link} ${className ? className : ""}`}>
      <Link href={link}>{text}</Link>
    </li>
  );
}

export default NavButton;
