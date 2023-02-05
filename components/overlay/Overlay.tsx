import { MouseEventHandler } from "react";
import classes from "./overlay.module.css";

type OverlayProps = {
  onClick: MouseEventHandler<HTMLDivElement>;
  showOverlay: boolean;
}

function Overlay({onClick, showOverlay} : OverlayProps) {
  return <div
  onClick={onClick}
  className={` ${classes.overlay}   ${showOverlay ? classes.active : ""}`}
/>
}

export default Overlay;