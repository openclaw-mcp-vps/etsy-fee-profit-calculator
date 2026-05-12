export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Etsy Sellers
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Calculate Real Profit After{" "}
          <span className="text-[#58a6ff]">All Etsy Fees</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop guessing your margins. Instantly see true profit after transaction, payment processing, offsite ads, listing, and shipping fees — all in one place.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $9/mo
        </a>
        <p className="mt-3 text-xs text-[#8b949e]">Cancel anytime. No hidden fees.</p>

        {/* Preview card */}
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left shadow-xl">
          <p className="text-xs text-[#8b949e] uppercase tracking-widest mb-4">Sample Calculation</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              ["Sale Price", "$35.00"],
              ["Material Cost", "−$8.00"],
              ["Listing Fee", "−$0.20"],
              ["Transaction Fee (6.5%)", "−$2.28"],
              ["Payment Processing (3%+$0.25)", "−$1.30"],
              ["Offsite Ads (15%)", "−$5.25"],
            ].map(([label, val]) => (
              <div key={label} className="contents">
                <span className="text-[#8b949e]">{label}</span>
                <span className="text-right font-mono text-[#c9d1d9]">{val}</span>
              </div>
            ))}
            <div className="col-span-2 border-t border-[#30363d] mt-2 pt-3 flex justify-between font-bold">
              <span className="text-white">Net Profit</span>
              <span className="text-[#3fb950] font-mono text-lg">$17.97</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-xl p-8 text-center shadow-2xl">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-sm text-left space-y-2 mb-8">
            {[
              "Full fee breakdown calculator",
              "Unlimited saved calculations",
              "Bulk product analysis",
              "Offsite Ads & shipping support",
              "Export results to CSV",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            {
              q: "Which Etsy fees does the calculator include?",
              a: "It covers listing fees ($0.20), transaction fees (6.5%), payment processing (3% + $0.25), offsite advertising (12–15%), and optional shipping label costs.",
            },
            {
              q: "Can I save my calculations?",
              a: "Yes. Pro subscribers can save unlimited calculations to local storage and export them as CSV for bookkeeping or pricing reviews.",
            },
            {
              q: "How do I cancel my subscription?",
              a: "You can cancel anytime from your Lemon Squeezy customer portal. You keep access until the end of your billing period.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} Etsy Fee Calculator. Not affiliated with Etsy, Inc.
      </footer>
    </main>
  );
}
