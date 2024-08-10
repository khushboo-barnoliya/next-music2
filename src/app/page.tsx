import ChooseUs from "@/components/ChooseUs";
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";


export default function Home() {
  return (
    <main className="min-h-screen antialiased bg-black/[0.96] bg-grid-white-[0.02]">
      <HeroSection />
      <FeaturedSection />
      <ChooseUs />
      <TestimonialCards />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
