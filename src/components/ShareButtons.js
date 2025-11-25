"use client";

import { Facebook, Twitter, Link as LinkIcon, MessageCircle, Instagram } from "lucide-react";
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
                    href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.shareButton}
                    aria-label="Condividi su WhatsApp"
                >
                    <MessageCircle size={20} />
                    <span>WhatsApp</span>
                </a>
                <button
                    onClick={copyToClipboard}
                    className={styles.shareButton}
                    aria-label="Condividi su Instagram"
                >
                    <Instagram size={20} />
                    <span>Instagram</span>
                </button>

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
