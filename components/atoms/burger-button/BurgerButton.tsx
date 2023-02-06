import classes from "./burger.module.css";
import sharedStyles from "@/styles/shared.module.css";

type BurgerProps = {
  onClick?: () => void;
  className?: string; 
};

function BurgerButton({ onClick ,className}: BurgerProps) {
  return (
    <span data-testid="btnBurger" arial-label="Burger button" className={`${classes.menu_btn} ${className ? className : ""}`} onClick={onClick}>
      <span className={classes.burger}>
        <span className={sharedStyles.line}></span>
        <span className={sharedStyles.line}></span>
        <span className={sharedStyles.line}></span>
      </span>
    </span>
  );
}

export default BurgerButton;
