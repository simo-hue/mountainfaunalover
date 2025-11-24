import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import styles from "./page.module.css";

const PARTNERS = [
    {
        id: "swarovski",
        name: "Swarovski Optik",
        description: "L'eccellenza nell'osservazione naturalistica. Utilizzo i loro binocoli e cannocchiali (NL Pure, ATX) per avvistare la fauna alpina con una nitidezza incredibile, anche in condizioni di luce difficile. La qualità delle lenti mi permette di cogliere dettagli invisibili a occhio nudo.",
        website: "https://www.swarovskioptik.com",
        logoText: "SWAROVSKI OPTIK"
    },
    {
        id: "ollin",
        name: "Ollin.co",
        description: "Il sistema di digiscoping definitivo. Grazie all'adattatore magnetico Ollin, posso collegare istantaneamente il mio smartphone al cannocchiale Swarovski per catturare video e foto a lunga distanza con una stabilità perfetta. È il segreto dietro molti dei miei avvistamenti più spettacolari.",
        website: "https://ollin.co",
        logoText: "OLLIN"
    },
    {
        id: "euromix",
        name: "Euromix Motors Trento",
        description: "Il partner per le mie avventure off-road. Con il Land Rover Defender 90 HSE fornito da Euromix Motors, posso raggiungere i luoghi più remoti e selvaggi della Val di Rabbi in sicurezza e comfort, portando con me tutta l'attrezzatura necessaria.",
        website: "https://www.euromixmotors.it",
        logoText: "EUROMIX MOTORS"
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

            <div className={styles.grid}>
                {PARTNERS.map((partner) => (
                    <article key={partner.id} className={styles.partnerCard}>
                        <div className={styles.logoContainer}>
                            <span className={styles.logoText}>{partner.logoText}</span>
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
