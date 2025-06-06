import HeroSection from "@/components/HeroSection";
import ChatBotInterface from "@/components/OurLatestAchievement";
import AiOffers from "@/components/AiOffers";
import GenAIWorkshop from "@/components/GenAIWorkshop";
import AiProjectSection from "@/components/AiProjectSection";
import Testimonial from "@/components/Testimonial";
import ContactForm from "@/components/ContactForm";
import HomeFooterSection from "@/components/HomeFooterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
        <HeroSection />
        <ChatBotInterface />
        <AiOffers />
        <GenAIWorkshop/>
        <AiProjectSection/>
        <Testimonial/>
        <ContactForm/>
        <HomeFooterSection/>
    </main>
  );
}
