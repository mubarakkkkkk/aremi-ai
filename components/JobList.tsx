import JobCard from "./JobCard";
import type { Job } from "@/data/jobs";

export default function JobList({ jobs }: { jobs: Job[] }) {
  return (
    <section>
      <div className="list-head">
        <h2>Today&rsquo;s matches</h2>
        <span className="sub">sorted by fit ↓</span>
      </div>

      {jobs.map((job) => (
        <JobCard job={job} key={job.id} />
      ))}

      <div className="pager">
        <button type="button">← Prev</button>
        <span className="page-num">Page 1 of 187</span>
        <button type="button">Next →</button>
      </div>
    </section>
  );
}
