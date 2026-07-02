export default function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: "Tell Aremu what you want",
      desc: "Your role, skills, pay, location — in chat or a quick form. Or just upload your CV.",
    },
    {
      num: 2,
      title: "AI ranks every opening",
      desc: "We score thousands of jobs by how well they fit you and surface the best matches first.",
    },
    {
      num: 3,
      title: "Apply in one tap",
      desc: "Apply with your Aremu profile, or jump to the original posting. Track it all in one place.",
    },
  ];

  return (
    <section className="how-section" id="how-it-works">
      <div className="wrap">
        <h2 className="section-title">How it works</h2>

        <div className="how-grid">
          {steps.map((step) => (
            <div className="how-card" key={step.num}>
              <div className="how-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
