import Link from "next/link";
import MatchMeter from "./MatchMeter";
import type { Job } from "@/data/jobs";

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="job-card">
      <MatchMeter pct={job.matchPct} size={64} className="job-meter" />

      <div className="job-body">
        <div className="top-line">
          <span className="job-title">{job.title}</span>
          <span className="badge type">{job.type}</span>
          {job.level && <span className="badge level">{job.level}</span>}
        </div>
        <div className="job-meta">
          {job.company} · <b>{job.location}</b>
        </div>
        <div className="tags">
          {job.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="job-foot">
          <span className="salary">{job.salary}</span>
          <span>·</span>
          <span>{job.postedAgo}</span>
        </div>
      </div>

      <div className="job-action">
        <Link href={`/jobs/${job.id}`} className="apply-btn">
          View &amp; apply
        </Link>
      </div>
    </div>
  );
}
