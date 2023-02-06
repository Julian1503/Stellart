import { MouseEventHandler } from "react";
import classes from "./overlay.module.css";

type OverlayProps = {
  onClick?: MouseEventHandler<HTMLDivElement>;
  showOverlay?: boolean;
}

function Overlay({onClick, showOverlay = false} : OverlayProps) {
  return <div data-testid="overlay"
  onClick={onClick}
  className={` ${classes.overlay}   ${showOverlay ? classes.active : ""}`}
/>
}

export default Overlay;