type MatchMeterProps = {
  pct: number;
  size?: number;
  showPercentSign?: boolean;
  className?: string;
};

function colorForPct(pct: number): string {
  if (pct >= 80) return "var(--teal)";
  if (pct >= 50) return "var(--amber)";
  return "var(--berry)";
}

export default function MatchMeter({
  pct,
  size = 64,
  showPercentSign = true,
  className = "",
}: MatchMeterProps) {
  const color = colorForPct(pct);

  return (
    <div
      className={`meter ${className}`.trim()}
      style={{
        width: size,
        height: size,
        background: `conic-gradient(${color} 0 ${pct}%, var(--line) 0)`,
      }}
      role="img"
      aria-label={`${pct} percent match`}
    >
      <div className="pct" style={{ fontSize: size * 0.22 }}>
        {pct}
        {showPercentSign && <small>%</small>}
      </div>
    </div>
  );
}
