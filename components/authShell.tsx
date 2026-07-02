import Link from "next/link";
import type { ReactNode } from "react";
import { Hand } from "lucide-react";

type AuthShellProps = {
  children: ReactNode;
};

export default function AuthShell({ children }: AuthShellProps) {
  return (
    <div className="auth-shell">
      <aside className="auth-brand">
        <Link href="/" className="logo auth-logo">
          <span className="logo-mark" />
          Aremu
        </Link>

        <div className="auth-brand-body">
          <div className="auth-chat">
            <div className="lc-header">
              <div className="lc-avatar">A</div>
              <div>
                <div className="lc-name">Aremu</div>
                <div className="lc-status">
                  <span className="lc-status-dot" />
                  matching live
                </div>
              </div>
            </div>
            <div className="lc-bubble bot">
              Welcome back{" "}
              <Hand className="inline-icon" size={18} aria-hidden="true" /> Sign
              in and I&rsquo;ll pick up right where your matches left off.
            </div>
          </div>

          <div className="auth-meters">
            <div
              className="meter auth-meter"
              style={{
                width: 72,
                height: 72,
                background: "conic-gradient(var(--teal) 0 92%, var(--line) 0)",
              }}
            >
              <div className="pct" style={{ fontSize: 16 }}>
                92<small>%</small>
              </div>
            </div>
            <div
              className="meter auth-meter"
              style={{
                width: 72,
                height: 72,
                background: "conic-gradient(var(--amber) 0 67%, var(--line) 0)",
              }}
            >
              <div className="pct" style={{ fontSize: 16 }}>
                67<small>%</small>
              </div>
            </div>
            <div
              className="meter auth-meter"
              style={{
                width: 72,
                height: 72,
                background: "conic-gradient(var(--teal) 0 81%, var(--line) 0)",
              }}
            >
              <div className="pct" style={{ fontSize: 16 }}>
                81<small>%</small>
              </div>
            </div>
          </div>

          <p className="auth-brand-copy">
            1,864 roles ranked by fit — not by who posted last.
          </p>
        </div>
      </aside>

      <main className="auth-main">
        <div className="auth-card">{children}</div>
      </main>
    </div>
  );
}
