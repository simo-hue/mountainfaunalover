"use client";

import { Mountain, Camera, Tent, Bike } from "lucide-react";
import styles from "./PartnersSection.module.css";

const PARTNERS = [
    { id: 1, name: "Alpine Gear", icon: <Mountain size={32} /> },
    { id: 2, name: "Optics Pro", icon: <Camera size={32} /> },
    { id: 3, name: "Wild Camp", icon: <Tent size={32} /> },
    { id: 4, name: "E-Bike Trentino", icon: <Bike size={32} /> },
];

export default function PartnersSection() {
    return (
        <section id="partners" className={styles.section}>
            <div className={styles.container}>
                <h3 className={styles.title}>Collaborazioni & Partner</h3>
                <div className={styles.grid}>
                    {PARTNERS.map((partner) => (
                        <div key={partner.id} className={styles.partner} title={partner.name}>
                            {partner.icon}
                            <span>{partner.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
