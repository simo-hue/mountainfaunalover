"use client";

import { Facebook, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";
import styles from "./ShareButtons.module.css";

export default function ShareButtons({ title, slug }) {
    const shareUrl = `https://mountainfaunalover.com/blog/${slug}`;
    const shareText = encodeURIComponent(title);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shareUrl);
        alert('Link copiato!');
    };

    return (
        <div className={styles.shareSection}>
            <h3 className={styles.shareTitle}>Condividi questo articolo</h3>
            <div className={styles.shareButtons}>
                <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.shareButton}
                    aria-label="Condividi su Facebook"
                >
                    <Facebook size={20} />
                    <span>Facebook</span>
                </a>
                <a
                    href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.shareButton}
                    aria-label="Condividi su Twitter"
                >
                    <Twitter size={20} />
                    <span>Twitter</span>
                </a>
                <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.shareButton}
                    aria-label="Condividi su LinkedIn"
                >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                </a>
                <button
                    onClick={copyToClipboard}
                    className={styles.shareButton}
                    aria-label="Copia link"
                >
                    <LinkIcon size={20} />
                    <span>Copia Link</span>
                </button>
            </div>
        </div>
    );
}
