export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Product &amp; Customer Success Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Customer Impact from{' '}
          <span className="text-[#58a6ff]">Changelog Entries</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Paste a changelog entry and instantly know which customer segments are affected, what to say to each, and who to contact first — powered by AI.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $35/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No contracts.</p>

        {/* Feature highlights */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6 text-left">
          {[
            { title: 'AI Impact Analysis', desc: 'Automatically classify changes as breaking, behavioral, or cosmetic and score customer risk.' },
            { title: 'Segment Detection', desc: 'Match changelog entries to customer segments based on feature usage and plan tier.' },
            { title: 'Draft Comms Instantly', desc: 'Generate personalized email drafts for each affected segment in one click.' }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$35</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              'Unlimited changelog analyses',
              'AI-powered customer segmentation',
              'Auto-generated communication drafts',
              'CSV export of affected customer lists',
              'Slack &amp; email delivery integration',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the AI determine which customers are affected?',
              a: 'You connect your customer data (CSV or CRM export) and feature usage logs. The AI cross-references changelog keywords with the features each customer actively uses to build a precise impact list.'
            },
            {
              q: 'What kind of changelog formats are supported?',
              a: 'Plain text, Markdown, and structured formats like Keep a Changelog are all supported. You can paste directly or connect a GitHub releases webhook.'
            },
            {
              q: 'Can I customize the generated communication templates?',
              a: 'Yes. Every draft is fully editable before sending. You can also save custom tone and brand voice settings so future drafts match your style automatically.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} Changelog Impact Calculator. All rights reserved.
      </footer>
    </main>
  )
}
