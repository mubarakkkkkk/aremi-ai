import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import FilterSidebar from "@/components/FilterSidebar";
import JobList from "@/components/JobList";
import Footer from "@/components/Footer";
import { jobs } from "@/data/jobs";

const TOTAL_JOBS = 1864; // full dataset size; `jobs` here only holds the page's worth

export default function JobsPage() {
  return (
    <>
      <Header />
      <Hero />
      <Ticker />

      <main className="main">
        <div className="wrap main-grid">
          <FilterSidebar totalCount={TOTAL_JOBS} />
          <JobList jobs={jobs} />
        </div>
      </main>

      <Footer />
    </>
  );
}
