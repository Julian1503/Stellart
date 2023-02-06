import Link from "next/link";
import classes from "./button.module.css";

type ButtonProps = { onClick?:()=>void, width: number | string, height: number | string, link: string; text?: string, className?: string, hasShadow?: boolean};
function Button({width,onClick, height, className, text, link, hasShadow = false }: ButtonProps) {
  return (
    <Link data-testid="btn" onClick={onClick} arial-name="Button" style={{width: width, height: height}} className={`${classes.btn} ${hasShadow ? classes.shadow : ""} ${className}`} href={link}>
      {text}
    </Link>
  );
}

export default Button;
