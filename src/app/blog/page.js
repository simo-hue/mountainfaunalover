"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { posts } from "@/data/posts";
import styles from "./page.module.css";

const CATEGORIES = ["Tutti", "Fauna", "Trekking", "Tech & Gear", "Offroad"];

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("Tutti");

    const filteredPosts = activeCategory === "Tutti"
        ? posts
        : posts.filter(post => post.category === activeCategory);

    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Il Diario dell'Esploratore</h1>
                <p className={styles.subtitle}>Racconti, guide e momenti indimenticabili dalla natura selvaggia.</p>
            </header>

            <div className={styles.filterBar}>
                {CATEGORIES.map((category) => (
                    <button
                        key={category}
                        className={`${styles.filterButton} ${activeCategory === category ? styles.active : ""}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <motion.div
                layout
                className={styles.grid}
            >
                <AnimatePresence mode="popLayout">
                    {filteredPosts.map((post) => (
                        <motion.div
                            layout
                            key={post.slug}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link href={`/blog/${post.slug}`} className={styles.card}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className={styles.image}
                                    />
                                </div>
                                <div className={styles.content}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                        <span className={styles.date}>{post.date}</span>
                                        <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>{post.category}</span>
                                    </div>
                                    <h2 className={styles.cardTitle}>{post.title}</h2>
                                    <p className={styles.excerpt}>{post.excerpt}</p>
                                    <span className={styles.readMore}>
                                        Leggi l'articolo <ArrowRight size={16} />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </main>
    );
}
