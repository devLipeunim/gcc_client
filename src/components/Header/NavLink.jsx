"use client";

import { usePathname } from "next/navigation";

// import { useRouter } from "next/router";
import Link from "next/link";
import "../../styles/header.css"

export const NavLink = ({ href, exact, children, ...props }) => {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  if (isActive) {
    props.className += "active__menu";
  }
  return (
    <Link href={href} {...props}>
      {children}
      {/* <a {...props}>{children}</a> */}
    </Link>
  );
};
