"use client";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { useState } from "react";
const links = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Contact",
        href: "/contact",
    },
    {
        label: "Blog",
        href: "/blog",
    },
];

const Links = () => {

    const [open, setOpen] = useState(false);

    // Temporary
    const session = true;
    const isAdmin = true;

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.label}/>
                ))}
                {
                    session ? (
                        <>
                            {isAdmin && <NavLink item={{label: "Admin", href: "/admin"}} key="admin"/>}
                            <button className={styles.logout}>Logout</button>
                        </>
                    ) : (
                        <NavLink item={{label: "Login", href: "/login"}} />
                    )
                }
            </div>
            <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.label}/>
                    ))}
                </div>
            )}
        </div>
  );
};

export default Links;
