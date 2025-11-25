import Image from "next/image";
import { Github, Linkedin, Globe, Code, Heart, Mountain } from "lucide-react";
import FounderStorySection from "@/components/FounderStorySection";
import styles from "./page.module.css";

export const metadata = {
    title: "Il Founder | Mountain & Fauna Lover",
    description: "Conosci Simone Mattioli, il creatore di Mountain & Fauna Lover. Studente di informatica, appassionato di AI e amante della natura.",
};

export default function FounderPage() {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <div className={styles.profileImageContainer}>
                    <Image
                        src="/images/founder/simone-profile.jpg"
                        alt="Simone Mattioli"
                        fill
                        className={styles.profileImage}
                    />
                </div>
                <h1 className={styles.title}>Simone Mattioli</h1>
                <p className={styles.subtitle}>Tech Enthusiast & Nature Lover</p>
                <div className={styles.bio}>
                    Se sei curioso sui dietro alle quinte di Mountain & Fauna Lover, beh...Leggi qui sotto!
                </div>
            </header>

            <FounderStorySection />

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Il Mio Mondo</h2>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <Code size={40} className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Tech & AI</h3>
                        <p className={styles.cardText}>
                            Sviluppo software e studio modelli di AI. Ho lavorato su progetti di traduzione automatica e analisi dati HPC.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <Mountain size={40} className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Avventura</h3>
                        <p className={styles.cardText}>
                            Trekking, E-Bike, Sci e Off-road. La montagna è il mio habitat naturale e la mia fonte di ispirazione.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <Heart size={40} className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Volontariato</h3>
                        <p className={styles.cardText}>
                            Credo nel restituire. Ho partecipato a progetti educativi in Brasile, un'esperienza che mi ha cambiato la vita.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Connettiti con Me</h2>
                <div className={styles.grid}>
                    <a href="https://www.linkedin.com/in/simonemattioli2003/" target="_blank" rel="noopener noreferrer" className={styles.card}>
                        <Linkedin size={32} className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>LinkedIn</h3>
                        <p className={styles.cardText}>Il mio percorso professionale</p>
                    </a>
                    <a href="https://github.com/simo-hue" target="_blank" rel="noopener noreferrer" className={styles.card}>
                        <Github size={32} className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>GitHub</h3>
                        <p className={styles.cardText}>I miei progetti open source</p>
                    </a>
                    <a href="http://simo-hue.github.io" target="_blank" rel="noopener noreferrer" className={styles.card}>
                        <Globe size={32} className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Sito Personale</h3>
                        <p className={styles.cardText}>Il mio diario digitale</p>
                    </a>
                </div>
            </section>
        </main>
    );
}
