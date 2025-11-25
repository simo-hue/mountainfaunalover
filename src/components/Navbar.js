"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Mountain } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoImageContainer}>
                        <Image
                            src="/images/branding/logo.jpg"
                            alt="Mountain & Fauna Lover Logo"
                            width={50}
                            height={50}
                            className={styles.logoImage}
                        />
                    </div>
                    <span className={styles.logoText}>Mountain & Fauna Lover</span>
                </Link>

                <ul className={styles.navLinks}>
                    <li><Link href="/" className={styles.navLink}>Home</Link></li>
                    <li><Link href="/social" className={styles.navLink}>Social</Link></li>
                    <li><Link href="/partners" className={styles.navLink}>Partners</Link></li>
                    <li><Link href="/blog" className={styles.navLink}>Blog</Link></li>
                    <li><Link href="/faq" className={styles.navLink}>FAQ</Link></li>
                    <li><Link href="/founder" className={styles.navLink}>Founder</Link></li>
                </ul>

                <button className={styles.mobileToggle} onClick={toggleMenu}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ""}`}>
                    <button className={styles.mobileToggle} onClick={toggleMenu} style={{ position: 'absolute', top: '2rem', right: '2rem' }}>
                        <X size={24} />
                    </button>
                    <Link href="/" className={styles.navLink} onClick={toggleMenu}>Home</Link>
                    <Link href="/social" className={styles.navLink} onClick={toggleMenu}>Social</Link>
                    <Link href="/partners" className={styles.navLink} onClick={toggleMenu}>Partners</Link>
                    <Link href="/blog" className={styles.navLink} onClick={toggleMenu}>Blog</Link>
                    <Link href="/faq" className={styles.navLink} onClick={toggleMenu}>FAQ</Link>
                    <Link href="/founder" className={styles.navLink} onClick={toggleMenu}>Founder</Link>
                </div>
            </div>
        </nav>
    );
}
