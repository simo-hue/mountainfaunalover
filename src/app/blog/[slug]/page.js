import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { posts } from "@/data/posts";
import styles from "./page.module.css";

export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPost({ params }) {
    const post = posts.find((p) => p.slug === params.slug);

    if (!post) {
        return (
            <div className={styles.container}>
                <h1>Articolo non trovato</h1>
                <Link href="/blog" className={styles.backLink}>Torna al Blog</Link>
            </div>
        );
    }

    return (
        <article className={styles.container}>
            <Link href="/blog" className={styles.backLink}>
                <ArrowLeft size={20} /> Torna al Blog
            </Link>

            <header className={styles.header}>
                <span className={styles.date}>{post.date}</span>
                <h1 className={styles.title}>{post.title}</h1>
            </header>

            <div className={styles.imageContainer}>
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className={styles.image}
                    priority
                />
            </div>

            <div className={styles.content}>
                <p>{post.content}</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </article>
    );
}
