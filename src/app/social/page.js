import Image from "next/image";
import { Youtube, Instagram, Video, Eye } from "lucide-react";
import { getSocialStats } from "@/lib/social-stats";
import styles from "./page.module.css";

const CONTENT_FEED = [
    {
        id: 1,
        platform: "youtube",
        title: "Il BRAMITO potente del cervo maschio - Documentario Completo",
        image: "/hero-bg.png",
        views: "15k visualizzazioni",
        link: "https://youtube.com",
        type: "landscape"
    },
    {
        id: 2,
        platform: "tiktok",
        title: "Dietro le quinte: Appostamento all'alba",
        image: "/hero-bg.png",
        views: "50k views",
        link: "https://tiktok.com",
        type: "portrait"
    },
    {
        id: 3,
        platform: "instagram",
        title: "La magia della prima neve",
        image: "/hero-bg.png",
        views: "2.5k likes",
        link: "https://instagram.com",
        type: "portrait"
    },
    {
        id: 4,
        platform: "youtube",
        title: "Test Attrezzatura: Swarovski NL Pure",
        image: "/hero-bg.png",
        views: "8k visualizzazioni",
        link: "https://youtube.com",
        type: "landscape"
    },
    {
        id: 5,
        platform: "tiktok",
        title: "Incontro ravvicinato con una volpe",
        image: "/hero-bg.png",
        views: "120k views",
        link: "https://tiktok.com",
        type: "portrait"
    }
];

export const metadata = {
    title: "Social Media Hub | Mountain & Fauna Lover",
    description: "Segui le mie avventure su YouTube, Instagram e TikTok. Video esclusivi, foto e dietro le quinte.",
};

export default async function SocialPage() {
    const stats = await getSocialStats();

    const SOCIAL_STATS = [
        { label: "YouTube Subscribers", value: stats.youtube.subscribers, icon: <Youtube size={24} /> },
        { label: "YouTube Views", value: stats.youtube.views, icon: <Eye size={24} /> },
        { label: "Instagram Followers", value: stats.instagram.followers, icon: <Instagram size={24} /> },
        { label: "TikTok Followers", value: stats.tiktok.followers, icon: <Video size={24} /> },
    ];

    const getIcon = (platform) => {
        switch (platform) {
            case "youtube": return <Youtube size={20} />;
            case "instagram": return <Instagram size={20} />;
            case "tiktok": return <Video size={20} />;
            default: return null;
        }
    };

    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Social Media Hub</h1>
                <p className={styles.subtitle}>
                    Unisciti alla community! Qui trovi tutti i miei contenuti più recenti, dai video lunghi su YouTube agli short adrenalinici.
                </p>

                <div className={styles.stats}>
                    {SOCIAL_STATS.map((stat, index) => (
                        <div key={index} className={styles.statItem}>
                            <span className={styles.statValue}>{stat.value}</span>
                            <span className={styles.statLabel} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                {stat.icon} {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </header>

            <div className={styles.grid}>
                {CONTENT_FEED.map((item) => (
                    <a
                        key={item.id}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.card} ${item.type === 'landscape' ? styles.landscape : ''}`}
                    >
                        <div className={styles.platformIcon}>
                            {getIcon(item.platform)}
                        </div>
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className={styles.image}
                        />
                        <div className={styles.overlay}>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <span className={styles.cardMeta}>{item.views}</span>
                        </div>
                    </a>
                ))}
            </div>
        </main>
    );
}
