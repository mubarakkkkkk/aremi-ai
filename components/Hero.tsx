import Link from "next/link";
import MatchMeter from "./MatchMeter";
import { Hand, Paperclip } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">
            <span className="dot" />
            1,864 open roles, ranked just for you
          </div>
          <h1>
            Find work that
            <br />
            actually <em>fits</em> you.
          </h1>
          <p>
            Tell Aremu what you do, where you want to work, and what
            you&rsquo;re after. It ranks every opening across Nigeria and remote
            by fit — not by who posted last.
          </p>
          <div className="hero-cta">
            <Link href="/start" className="btn btn-primary">
              Start matching →
            </Link>
            <span className="hero-note">
              <Paperclip className="inline-icon" size={16} aria-hidden="true" />{" "}
              Attach a CV — you&rsquo;re 2× more likely to get a reply
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <MatchMeter pct={92} className="float-meter fm1" />
          <MatchMeter pct={67} className="float-meter fm2" />
          <MatchMeter
            pct={81}
            showPercentSign={false}
            className="float-meter fm3"
          />

          <div className="chat-card">
            <div className="chat-head">
              <div className="chat-avatar">A</div>
              <div>
                <div className="name">Aremu</div>
                <div className="status">ranking live</div>
              </div>
            </div>
            <div className="bubble bot">
              Hi <Hand className="inline-icon" size={18} aria-hidden="true" />{" "}
              Tell me what you do, your skills, and the pay you&rsquo;re after —
              the more you share, the sharper the match.
            </div>
            <div className="bubble user">
              Frontend dev in Lagos, 3 yrs React, want remote, ₦600k+
            </div>
            <div className="bubble bot result">
              Got it. Ranking 1,864 jobs against your profile now…
            </div>
            <div className="typing">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
