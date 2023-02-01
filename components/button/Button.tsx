import Link from "next/link";
import classes from "./button.module.css";

type ButtonProps = { link: string; text: string, className?: string};
function Button({className, text, link }: ButtonProps) {
  return (
    <Link className={`${classes.btn} ${className}`} href={link}>
      {text}
    </Link>
  );
}

export default Button;
