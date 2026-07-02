import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/jobs" className="logo">
              <span className="logo-mark" />
              Aremu
            </Link>
            <p>
              AI-ranked jobs for Nigeria and remote. Set up your profile once
              — get matched free on the web, WhatsApp, or Telegram.
            </p>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <Link href="/jobs">Search Jobs</Link>
            <Link href="/feed">Feed</Link>
            <Link href="/start">Get started</Link>
            <Link href="/post-job">Post a Job</Link>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/data-deletion">Data Deletion</Link>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 Aremu. Built for Nigerian job seekers.
        </div>
      </div>
    </footer>
  );
}
