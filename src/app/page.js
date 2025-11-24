import HeroSection from "@/components/HeroSection";
import SocialHub from "@/components/SocialHub";
import PartnersSection from "@/components/PartnersSection";
import StorySection from "@/components/StorySection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <StorySection />
      <section id="social-hub">
        <SocialHub />
      </section>
      <PartnersSection />
      {/* Other sections will go here */}
    </main>
  );
}
