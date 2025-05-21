import HeroSection from "@/components/HeroSection";
import ChatBotInterface from "@/components/OurLatestAchievement";
import AiOffers from "@/components/AiOffers";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
        <HeroSection />
        <ChatBotInterface />
        <AiOffers />
    </main>
  );
}
