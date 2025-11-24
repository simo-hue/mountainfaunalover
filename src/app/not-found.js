import Link from "next/link";
import { Home, Search, Mountain } from "lucide-react";
import styles from "./not-found.module.css";

export const metadata = {
    title: "404 - Pagina Non Trovata | Mountain & Fauna Lover",
    description: "La pagina che stai cercando non esiste. Torna alla homepage o esplora i nostri contenuti.",
};

export default function NotFound() {
    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <Mountain size={80} className={styles.icon} />
                <h1 className={styles.title}>404</h1>
                <h2 className={styles.subtitle}>Sentiero Non Trovato</h2>
                <p className={styles.description}>
                    Ops! Sembra che tu abbia preso il sentiero sbagliato.
                    La pagina che cerchi non esiste o è stata spostata.
                </p>

                <div className={styles.actions}>
                    <Link href="/" className={styles.button}>
                        <Home size={20} />
                        Torna alla Home
                    </Link>
                    <Link href="/blog" className={styles.button}>
                        <Search size={20} />
                        Esplora il Blog
                    </Link>
                </div>
            </div>
        </main>
    );
}
