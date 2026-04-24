import Head from "next/head";
import Link from "next/link";

const stories = [
  {
    href: "/posts/ai-stack-2026",
    label: "Cover story",
    title: "The AI Stack In 2026: Where The Real Margins Move",
    summary:
      "Why the winning layer is no longer raw model access, and where founders should look for durable leverage instead.",
  },
  {
    href: "/posts/open-source-ai-stack",
    label: "Infrastructure",
    title: "Open-Source AI Is Winning The Edge",
    summary:
      "Hybrid stacks are becoming the default for teams that care about cost control, deployment flexibility, and product fit.",
  },
  {
    href: "/posts/ai-agents-at-work",
    label: "Workflows",
    title: "AI Agents After The Hype Cycle",
    summary:
      "The durable agent products are narrow, measurable, tool-connected, and built around clean human handoff.",
  },
];

const pipeline = [
  "How to structure AI sponsorship packages readers trust",
  "The tool stack that actually earns a weekly workflow spot",
  "Why infrastructure stories often beat trend roundups",
  "What AI product teams should do after launch-week chaos",
];

const Home = (): React.ReactElement => (
  <div className="fs-page">
    <Head>
      <title>Frontier Signal | AI Research, Product, And Infrastructure</title>
      <meta
        name="description"
        content="A modern AI tech blog for founders, operators, and builders."
      />
    </Head>

    <header className="fs-header">
      <Link className="fs-brand" href="/">
        <span className="fs-brand-mark">FS</span>
        <span className="fs-brand-copy">
          <strong>Frontier Signal</strong>
          <span>AI research, product, and infrastructure</span>
        </span>
      </Link>
      <nav className="fs-nav" aria-label="Primary">
        <a href="#stories">Stories</a>
        <a href="#briefing">Briefing</a>
        <Link href="/advertise">Advertise</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>

    <main className="fs-main">
      <section className="fs-grid">
        <div className="fs-hero-copy">
          <p className="fs-eyebrow">Independent AI publication</p>
          <h1>AI coverage for people actually building with it.</h1>
          <p className="fs-body">
            Frontier Signal tracks what matters across research, products,
            infrastructure, and the economics of applied AI. Clean analysis,
            useful takeaways, and a publication built to compound trust.
          </p>
          <div className="fs-actions">
            <a className="fs-button fs-button-primary" href="#briefing">
              Join The Briefing
            </a>
            <a className="fs-button fs-button-ghost" href="#stories">
              Read Latest Stories
            </a>
          </div>
        </div>

        <div className="fs-visual">
          <div className="fs-card">
            <p className="fs-label">This week</p>
            <h2>The AI stack is reorganizing around workflow control.</h2>
            <p className="fs-body">
              Durable value is shifting toward products that own the interface,
              feedback loops, and business context around model output.
            </p>
            <Link href="/posts/ai-stack-2026">Read the cover story</Link>
          </div>
        </div>
      </section>
    </main>

    <section className="fs-strip">
      <div className="fs-strip-row">
        <span>Research shifts</span>
        <span>Agent workflows</span>
        <span>Open-source stacks</span>
        <span>AI monetization</span>
        <span>Operator briefings</span>
        <span>Tool buying signals</span>
      </div>
    </section>

    <section className="fs-page-block">
      <div className="fs-kicker">Why this site can win</div>
      <div className="fs-two-col">
        <h2 className="fs-section-title">Less hype. More useful point of view.</h2>
        <div>
          <p className="fs-body">
            This site is designed around a high-value AI audience: founders,
            product leaders, developers, and buyers trying to make smart
            decisions in a noisy market.
          </p>
          <p className="fs-body">
            The growth model is simple and durable: publish high-trust analysis,
            grow a newsletter, sell aligned sponsorships, add affiliate tool
            guides, and later introduce premium reports.
          </p>
        </div>
      </div>
    </section>

    <section className="fs-page-block" id="stories">
      <div className="fs-section-head">
        <div>
          <div className="fs-kicker">Latest stories</div>
          <h2 className="fs-section-title">Built for an OpenAI-era audience</h2>
        </div>
        <a href="#briefing">Get the weekly memo</a>
      </div>

      <div className="fs-feature">
        <div>
          <p className="fs-label">Cover story</p>
          <h2 className="fs-section-title">{stories[0]?.title}</h2>
          <p className="fs-body">{stories[0]?.summary}</p>
          <Link href={stories[0]?.href || "/posts/ai-stack-2026"}>Read article</Link>
        </div>
        <div className="fs-list">
          <p className="fs-label">Why it matters</p>
          <ul>
            <li>Explains where durable AI margins are moving.</li>
            <li>Gives founders a sharper framework than launch-week hype.</li>
            <li>Fits exactly the audience sponsors want to reach.</li>
          </ul>
        </div>
      </div>

      <div className="fs-story-grid">
        {stories.slice(1).map(({ href, label, title, summary }) => (
          <Link className="fs-story" href={href} key={href}>
            <div className="fs-story-visual" />
            <div className="fs-story-copy">
              <p className="fs-label">{label}</p>
              <h3>{title}</h3>
              <p className="fs-body">{summary}</p>
            </div>
          </Link>
        ))}

        <div className="fs-list">
          <p className="fs-label">Editorial pipeline</p>
          <ul>
            {pipeline.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="fs-page-block">
      <div className="fs-section-head">
        <div>
          <div className="fs-kicker">Revenue framework</div>
          <h2 className="fs-section-title">
            How this blog makes money without turning into junk.
          </h2>
        </div>
      </div>
      <div className="fs-framework">
        <article>
          <p className="fs-label">01</p>
          <h3>Sponsorships</h3>
          <p className="fs-body">
            Sell newsletter and site placements to AI products, infra vendors,
            and dev tools that fit the readership.
          </p>
        </article>
        <article>
          <p className="fs-label">02</p>
          <h3>Affiliate guides</h3>
          <p className="fs-body">
            Publish high-intent tool breakdowns around hosting, observability,
            vector databases, model APIs, and workflow tooling.
          </p>
        </article>
        <article>
          <p className="fs-label">03</p>
          <h3>Premium briefings</h3>
          <p className="fs-body">
            Package the strongest recurring themes into operator memos, market
            maps, and paid reports.
          </p>
        </article>
        <article>
          <p className="fs-label">04</p>
          <h3>Advisory work</h3>
          <p className="fs-body">
            Turn audience trust into workshops, private briefings, and strategy
            retainers for teams adopting AI.
          </p>
        </article>
      </div>
    </section>

    <section className="fs-band">
      <div>
        <p className="fs-label">For sponsors</p>
        <h2 className="fs-section-title">
          Reach AI builders while the market is still forming habits.
        </h2>
      </div>
      <Link className="fs-button fs-button-primary" href="/advertise">
        See sponsor options
      </Link>
    </section>

    <section className="fs-briefing" id="briefing">
      <div>
        <p className="fs-label">Weekly briefing</p>
        <h2 className="fs-section-title">One practical AI memo each week.</h2>
        <p className="fs-body">
          A clean, operator-focused summary of what changed, what matters, and
          what to do next.
        </p>
      </div>
      <div>
        <form className="fs-form">
          <input type="email" placeholder="Email address" aria-label="Email address" />
          <button className="fs-button fs-button-primary" type="submit">
            Join Free
          </button>
        </form>
        <p className="fs-note">
          Launch preview mode: connect Beehiiv, ConvertKit, or Mailchimp before
          production.
        </p>
      </div>
    </section>

    <footer className="fs-footer">
      <div>
        <strong>Frontier Signal</strong>
        <p className="fs-body">
          AI research, product, infrastructure, and the economics around them.
        </p>
      </div>
      <div className="fs-footer-links">
        <Link href="/about">About</Link>
        <Link href="/advertise">Advertise</Link>
        <Link href="/posts/ai-stack-2026">Cover Story</Link>
      </div>
    </footer>
  </div>
);

export default Home;
