"use client";

import Link from "next/link";
import { useState } from "react";

export default function LandingHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="landing-header">
      <div className="header-row wrap">
        <Link href="/" className="logo" id="landing-logo">
          <span className="logo-mark" />
          Aremu
        </Link>

        <nav className={`landing-nav ${mobileOpen ? "open" : ""}`}>
          <div className="links">
            <Link href="/jobs" onClick={() => setMobileOpen(false)}>
              Search Jobs
            </Link>
            <Link href="/feed" onClick={() => setMobileOpen(false)}>
              Feed
            </Link>
            <Link href="/talent" onClick={() => setMobileOpen(false)}>
              Find Talent
            </Link>
            <Link href="/post-job" onClick={() => setMobileOpen(false)}>
              Post a Job
            </Link>
          </div>
          <Link href="/signIn" className="btn btn-signin" id="signin-btn">
            Sign in
          </Link>
        </nav>

        <button
          type="button"
          className="mobile-toggle"
          id="mobile-menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={`hamburger ${mobileOpen ? "active" : ""}`}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {mobileOpen && (
        <button
          type="button"
          className="mobile-nav-scrim"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}