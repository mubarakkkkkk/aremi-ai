import Link from "next/link";
import { MessageCircle, Send } from "lucide-react";

export default function LandingCTA() {
  return (
    <section className="cta-section" id="landing-cta">
      <div className="wrap">
        <div className="cta-card">
          <h2>
            Your next job is already posted.
            <br />
            <span>Let Aremu find it for you.</span>
          </h2>
          <p>Free, delivered straight to WhatsApp or Telegram.</p>

          <div className="cta-buttons">
            <Link href="/jobs" className="btn btn-cta-dark" id="cta-browse">
              Browse jobs →
            </Link>
            <Link
              href="https://wa.me/2347070026605?text=Hi%20Aremu%2C%20I'm%20looking%20for%20a%20job"
              className="btn btn-cta-light"
              target="_blank"
              id="cta-whatsapp"
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
              className="btn btn-cta-light"
              target="_blank"
              id="cta-telegram"
            >
              <Send className="inline-icon" size={16} aria-hidden="true" /> Get
              jobs on Telegram
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
