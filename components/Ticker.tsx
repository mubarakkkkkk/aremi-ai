const ITEMS = [
  "1,864 jobs open right now",
  "new postings every hour",
  "matched free on web, WhatsApp, and Telegram",
  "built for Nigerian job seekers",
];

export default function Ticker() {
  // duplicated once so the CSS animation (-50%) loops seamlessly
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="ticker-band">
      <div className="ticker-track">
        {loop.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
