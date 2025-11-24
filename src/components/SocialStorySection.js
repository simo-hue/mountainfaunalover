"use client";

import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import styles from "./SocialStorySection.module.css";

export default function SocialStorySection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Smartphone size={40} className={styles.icon} />

                    <h2 className={styles.title}>Il Paradosso Digitale</h2>

                    <div className={styles.content}>
                        <p>
                            Sembra un paradosso, lo so. <span className={styles.highlight}>Odio i social media</span>.
                            Odio la frenesia, la superficialità, il dover essere sempre connessi.
                        </p>
                        <p>
                            Eppure, sono qui. Perché? Perché ho capito che questi strumenti, se usati con consapevolezza,
                            possono diventare un <span className={styles.highlight}>diario digitale</span> delle mie esperienze più belle.
                        </p>
                        <p>
                            Non lo faccio per i like o per i numeri. Lo faccio per condividere la mia passione,
                            per ispirare qualcuno a uscire di casa e immergersi nella natura, e per avere un archivio
                            indelebile delle emozioni che la montagna mi regala ogni giorno.
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
