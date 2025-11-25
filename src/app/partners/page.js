import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import PartnersStorySection from "@/components/PartnersStorySection";
import styles from "./page.module.css";

const PARTNERS = [
    // ... existing partners array
    {
        id: "swarovski",
        name: "Swarovski Optik",
        description: "Tutto l'equipaggiamento che utilizzo è stato regolarmente acquistato. La collaborazione mi offre l'opportunità unica di testare in anteprima prodotti rivoluzionari come il binocolo intelligente AX-Visio o i nuovi NL Pure, portando la mia esperienza di osservazione a un livello superiore.",
        website: "https://www.swarovskioptik.com",
        logo: "/images/partners/Swarovski-Optik.jpg"
    },
    {
        id: "ollin",
        name: "Ollin.co",
        description: "Il sistema di digiscoping definitivo. Grazie all'adattatore magnetico Ollin, posso collegare istantaneamente il mio smartphone al cannocchiale Swarovski per catturare video e foto a lunga distanza con una stabilità perfetta. È il segreto dietro molti dei miei avvistamenti più spettacolari.",
        website: "https://ollin.co",
        logo: "/images/partners/ollin.webp"
    },
    {
        id: "euromix",
        name: "Euromix Motors Trento",
        description: "Sono cliente Euromix Motors, dove ho acquistato il mio Defender 90. Questa relazione mi permette di partecipare e raccontarvi eventi privati esclusivi e raduni riservati, vivendo appieno lo spirito Land Rover insieme a una community di appassionati.",
        website: "https://www.euromixmotors.it",
        logo: "/images/partners/euromix.jpg"
    }
];

export const metadata = {
    title: "Partners & Collaborazioni | Mountain & Fauna Lover",
    description: "Scopri le aziende che supportano le mie avventure: Swarovski Optik, Ollin.co ed Euromix Motors.",
};

export default function PartnersPage() {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>I Miei Partner</h1>
                <p className={styles.subtitle}>
                    Collaboro solo con aziende di cui condivido i valori e di cui utilizzo i prodotti quotidianamente nelle mie avventure.
                </p>
            </header>

            <PartnersStorySection />

            <div className={styles.grid}>
                {PARTNERS.map((partner) => (
                    <article key={partner.id} className={styles.partnerCard}>
                        <div className={styles.logoContainer}>
                            <Image
                                src={partner.logo}
                                alt={`${partner.name} Logo`}
                                fill
                                className={partner.id === 'ollin' ? styles.logo : styles.logoFull}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className={styles.content}>
                            <h2 className={styles.partnerName}>{partner.name}</h2>
                            <p className={styles.description}>{partner.description}</p>
                            <a
                                href={partner.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                Visita il sito <ExternalLink size={16} />
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    );
}
