import Link from "next/link";
import SkaiIcon from "./SkaiIcon";

const SkaiButton = ({ href = "/contact", variant = "primary", arrow = false, children, className = "" }) => (
  <Link href={href} className={`skai-btn skai-btn--${variant}${className ? ` ${className}` : ""}`}>
    <span>{children}</span>
    {arrow && <SkaiIcon name="arrow" size={20} className="skai-btn__arrow" />}
  </Link>
);

export default SkaiButton;
