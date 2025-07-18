import Link from "next/link";
import { IconButtonPropTypes } from "./types";

export const IconButton = ({
  icon,
  name,
  onClick,
  additionalClasses,
  disabled,
  href,
}: IconButtonPropTypes) => {
  return href ? (
    <Link
      className={`group grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-neutral-950/25 bg-slate-100 p-2 shadow-md disabled:opacity-50 ${additionalClasses ?? ""}`}
      href={href}
      onClick={onClick}
    >
      {icon}
    </Link>
  ) : (
    <button
      className={`group grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-neutral-950/25 bg-slate-100 p-2 shadow-md disabled:opacity-50 ${additionalClasses ?? ""}`}
      name={name}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </button>
  );
};
