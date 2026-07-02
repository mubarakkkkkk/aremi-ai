import Link from "next/link";
import { Hand, MessageCircle, Paperclip, Send } from "lucide-react";

export default function LandingHero() {
  return (
    <section className="landing-hero" id="landing-hero">
      <div className="wrap landing-hero-inner">
        <div className="hero-badge">
          <span className="badge-dot" />
          AI JOB MATCHING · WHATSAPP · TELEGRAM · WEB
        </div>

        <h1 className="landing-headline">
          Stop scrolling
          <br />
          job boards.
          <br />
          <em>Get matched.</em>
        </h1>

        <p className="landing-sub">
          Tell Aremu what you do — your skills, pay, location — and we rank
          every opening across Nigeria and remote by how well it fits you. Not
          by who posted last.
        </p>

        <div className="landing-chat" id="landing-chat-mockup">
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
          <div className="lc-body">
            <div className="lc-bubble bot">
              Hi <Hand className="inline-icon" size={18} aria-hidden="true" />{" "}
              What role, skills, and pay range are you looking for? The more
              detail, the sharper the matches.
            </div>
            <div className="lc-input-row">
              <input
                type="text"
                className="lc-input"
                placeholder="e.g. Frontend dev in Lagos, 3 yrs React, ₦600k+…"
                readOnly
              />
            </div>
          </div>
          <div className="lc-actions">
            <button type="button" className="lc-attach" aria-label="Attach CV">
              <Paperclip className="inline-icon" size={16} aria-hidden="true" />{" "}
              Attach your CV
            </button>
            <button type="button" className="btn btn-primary lc-continue">
              Continue →
            </button>
          </div>
        </div>

        <p className="hiring-cta">
          Hiring instead?{" "}
          <Link href="/talent" className="hiring-link">
            Find talent →
          </Link>
        </p>

        <div className="channel-row">
          <Link
            href="https://wa.me/2347070026605?text=Hi%20Aremu%2C%20I'm%20looking%20for%20a%20job"
            className="btn btn-channel whatsapp"
            target="_blank"
            id="whatsapp-cta"
          >
            <MessageCircle
              className="inline-icon"
              size={16}
              aria-hidden="true"
            />{" "}
            Start on WhatsApp
          </Link>
          <Link
            href="https://t.me/aremu_aibot"
            className="btn btn-channel telegram"
            target="_blank"
            id="telegram-cta"
          >
            <Send className="inline-icon" size={16} aria-hidden="true" /> Get
            jobs on Telegram
          </Link>
        </div>
      </div>
    </section>
  );
}
