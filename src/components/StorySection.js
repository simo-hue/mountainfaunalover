"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import styles from "./StorySection.module.css";

export default function StorySection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Heart size={40} className={styles.icon} />

                    <h2 className={styles.title}>Una Finestra sulla Natura</h2>

                    <div className={styles.content}>
                        <p>
                            Tutto nasce da una passione tramandata da mio padre, una scintilla che ho coltivato con cura fino a farla diventare parte di me.
                            È quello stupore, quella <span className={styles.highlight}>meraviglia pura</span> che provo ogni volta che mi trovo immerso
                            nel silenzio della montagna, che mi spinge a creare.
                        </p>
                        <p>
                            Voglio condividere queste emozioni con chi, purtroppo, non ha la possibilità di viverle in prima persona.
                            Attraverso i miei racconti e i miei video, il mio obiettivo è portarvi con me nella <span className={styles.highlight}>Val di Rabbi</span>,
                            il luogo del cuore dove vivo le mie esperienze più intense.
                        </p>
                        <p>
                            Mettetevi comodi: voglio che possiate godervi lo spettacolo della natura selvaggia, i suoi suoni e i suoi colori,
                            direttamente dal vostro divano.
                        </p>
                    </div>

                    <div className={styles.signature}>
                        - Simone
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
