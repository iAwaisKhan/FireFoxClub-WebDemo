import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import TeamGalleryPreview from "@/components/home/TeamGalleryPreview";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <UpcomingEvents />
      <TeamGalleryPreview />
      <CTASection />
    </div>
  );
}
