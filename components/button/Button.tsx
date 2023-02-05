import Link from "next/link";
import classes from "./button.module.css";

type ButtonProps = { width: number | string, height: number | string, link: string; text: string, className?: string, hasShadow?: boolean};
function Button({width, height,className, text, link, hasShadow }: ButtonProps) {
  return (
    <Link style={{width: width, height: height}} className={`${classes.btn} ${hasShadow ? classes.shadow : ""} ${className}`} href={link}>
      {text}
    </Link>
  );
}

export default Button;
