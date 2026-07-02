import LandingHeader from "@/components/LandingHeader";
import LandingHero from "@/components/LandingHero";
import Ticker from "@/components/Ticker";
import FreshJobs from "@/components/FreshJobs";
import HowItWorks from "@/components/HowItWorks";
import LandingCTA from "@/components/LandingCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <LandingHeader />
      <LandingHero />
      <Ticker />
      <FreshJobs />
      <HowItWorks />
      <LandingCTA />
      <Footer />
    </>
  );
}
