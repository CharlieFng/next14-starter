"use client";

import styles from "./navLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({item}) => {

    const pathname = usePathname();

    return (
        <Link href={item.href} className={`${styles.container} ${pathname === item.href && styles.active}`}>
            {item.label}
        </Link>
    );
};

export default NavLink;