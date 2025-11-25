"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import styles from "./ReadingProgress.module.css";

export default function ReadingProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className={styles.progressBar}
            style={{ scaleX }}
        />
    );
}
