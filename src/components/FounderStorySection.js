"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import styles from "./FounderStorySection.module.css";

export default function FounderStorySection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Sparkles size={40} className={styles.icon} />

                    <h2 className={styles.title}>Dal Codice alla Cima</h2>

                    <div className={styles.content}>
                        <p>
                            Ciao! Sono Simone, <span className={styles.highlight}>laureato in Informatica all'Università di Verona</span> con una doppia anima:
                            da una parte la passione per il codice, l'Intelligenza Artificiale e dall'altra un amore sconfinato per la montagna.
                        </p>
                        <p>
                            Di giorno programmo algoritmi di e con <span className={styles.highlight}>Intelligenza Artificiale</span>,
                            ottimizzando GPU per elaborazioni che fanno girare la testa. Di sera inseguo cervi con il binocolo,
                            scalando le montagne della Val di Rabbi fino al tramonto.
                        </p>
                        <p>
                            Sembra un paradosso, ma non lo è. In realtà, <span className={styles.highlight}>sono lo stesso viaggio</span>.
                        </p>
                        <p>
                            Che tu stia debuggando codice o osservando il bramito di un cervo maschio, stai cercando pattern,
                            bellezza nascosta, connessioni invisibili.
                            <br />
                            In entrambi i mondi serve <strong>pazienza</strong>,
                            <strong>curiosità</strong> e la capacità di meravigliarsi.
                        </p>
                        <p>
                            Ho imparato più sull'<span className={styles.highlight}>umiltà</span> nelle favelas del Brasile
                            che in qualsiasi altra situazione abbia mai vissuto. Ho capito più sulla <span className={styles.highlight}>resilienza </span>
                            affrontando imprevisti in montagna che studiando algoritmi.
                        </p>
                        <p>
                            <strong>Mountain & Fauna Lover</strong> nasce da qui: dall'idea folle che la tecnologia
                            possa amplificare l'emozione della natura, non sostituirla. Che un video girato con il mio iPhone,
                            montato con cura e condiviso online, possa far <span className={styles.highlight}>battere il cuore</span> a
                            chi non ha mai visto un cervo dal vivo.
                        </p>
                        <p className={styles.quote}>
                            "Vision without action is just a dream, action without vision is just activity."
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
