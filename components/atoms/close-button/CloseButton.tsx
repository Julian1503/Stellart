import classes from "./closebutton.module.css";
import lineStyle from "@/styles/shared.module.css";
type CloseButtonProps = {
  onClick?: () => void;
  className?: string
};

function CloseButton({className, onClick }: CloseButtonProps) {
  return (
    <span data-testid="btnClose" className={`${classes.btn_close} ${className ? className : ""}`} onClick={onClick}>
      <span className={lineStyle.line}></span>
      <span className={lineStyle.line}></span>
    </span>
  );
}

export default CloseButton;
