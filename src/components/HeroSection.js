"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <Image
                    src="/images/home/background.jpg"
                    alt="Mountain landscape at sunset"
                    fill
                    priority
                    quality={100}
                />
            </div>
            <div className={styles.overlay} />

            <div className={styles.content}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Mountain & Fauna Lover
                </motion.h1>

                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    Montagna a 360° | Fauna Alpina | Avventure Outdoor
                </motion.p>

                <motion.a
                    href="#social-hub"
                    className={styles.ctaButton}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Inizia l'Avventura
                </motion.a>
            </div>
        </section>
    );
}
