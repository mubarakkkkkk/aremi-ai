import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="header-row wrap">
        <Link href="/jobs" className="logo">
          <span className="logo-mark" />
          Aremu
        </Link>
        <nav>
          <div className="links">
            <Link href="/jobs" className="active">
              Search Jobs
            </Link>
            <Link href="/feed">Feed</Link>
            <Link href="/talent">Find Talent</Link>
          </div>
          <Link href="/post-job" className="btn btn-primary">
            Post a job
          </Link>
        </nav>
      </div>
    </header>
  );
}
