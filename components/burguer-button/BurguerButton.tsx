import classes from "./burguer.module.css";
import sharedStyles from "../../styles/shared.module.css";

type BurguerProps = {
  onClick?: () => void;
  className?: string; 
};

function BurguerButton({ onClick ,className}: BurguerProps) {
  return (
    <span className={`${classes.menu_btn} ${className ? className : ""}`} onClick={onClick}>
      <span className={classes.burger}>
        <span className={sharedStyles.line}></span>
        <span className={sharedStyles.line}></span>
        <span className={sharedStyles.line}></span>
      </span>
    </span>
  );
}

export default BurguerButton;
