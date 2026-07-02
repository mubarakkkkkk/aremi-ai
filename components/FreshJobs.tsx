import Link from "next/link";
import MatchMeter from "./MatchMeter";
import { jobs } from "@/data/jobs";
import { MapPin } from "lucide-react";

export default function FreshJobs() {
  // Show only the top 4 jobs on the landing page
  const featured = jobs.slice(0, 4);

  return (
    <section className="fresh-section" id="fresh-jobs">
      <div className="wrap">
        <div className="fresh-head">
          <h2>Fresh on Aremu</h2>
          <Link href="/jobs" className="see-all-link">
            See all jobs →
          </Link>
        </div>

        <div className="fresh-grid">
          {featured.map((job) => (
            <div className="fresh-card" key={job.id}>
              <div className="fc-top">
                <div
                  className="fc-logo"
                  style={{
                    background:
                      job.matchPct >= 80
                        ? "var(--teal)"
                        : job.matchPct >= 50
                          ? "var(--amber)"
                          : "var(--berry)",
                  }}
                >
                  {job.company.charAt(0)}
                </div>
                <div className="fc-info">
                  <h3 className="fc-title">{job.title}</h3>
                  <span className="fc-company">{job.company}</span>
                </div>
              </div>

              <div className="fc-location">
                <MapPin className="inline-icon" size={16} aria-hidden="true" />{" "}
                {job.location}
              </div>

              <div className="fc-badges">
                <span className="badge type">{job.type}</span>
                {job.level && <span className="badge level">{job.level}</span>}
              </div>

              <div className="fc-tags">
                {job.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="fc-footer">
                <span className="fc-salary mono">{job.salary}</span>
                <Link
                  href={`/jobs/${job.id}`}
                  className="btn btn-primary fc-apply"
                >
                  View &amp; Apply
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
