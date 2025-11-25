"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "@/data/faq";
import styles from "./page.module.css";

export default function FAQPage() {
    // State to track which question is open in each category
    // Using an object where key is category index and value is open question index
    const [openItems, setOpenItems] = useState({});

    const toggleItem = (categoryIndex, questionIndex) => {
        setOpenItems(prev => {
            const currentOpen = prev[categoryIndex];
            // If clicking the already open item, close it. Otherwise open the new one.
            const newOpen = currentOpen === questionIndex ? null : questionIndex;
            return { ...prev, [categoryIndex]: newOpen };
        });
    };

    // Generate FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.flatMap(category =>
            category.questions.map(q => ({
                "@type": "Question",
                "name": q.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": q.answer
                }
            }))
        )
    };

    return (
        <main className={styles.container}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <header className={styles.header}>
                <h1 className={styles.title}>Domande Frequenti</h1>
                <p className={styles.subtitle}>Tutto quello che vuoi sapere su di me, l'attrezzatura e il territorio.</p>
            </header>

            <div className={styles.content}>
                {faqData.map((category, catIndex) => (
                    <section key={catIndex} className={styles.categorySection}>
                        <h2 className={styles.categoryTitle}>{category.category}</h2>
                        <div className={styles.faqList}>
                            {category.questions.map((item, qIndex) => {
                                const isOpen = openItems[catIndex] === qIndex;

                                return (
                                    <div key={qIndex} className={styles.faqItem}>
                                        <button
                                            className={styles.questionButton}
                                            onClick={() => toggleItem(catIndex, qIndex)}
                                            aria-expanded={isOpen}
                                        >
                                            <span>{item.question}</span>
                                            <ChevronDown
                                                className={`${styles.icon} ${isOpen ? styles.iconRotated : ''}`}
                                            />
                                        </button>

                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className={styles.answerContainer}
                                                >
                                                    <div className={styles.answer}>
                                                        {item.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
}
