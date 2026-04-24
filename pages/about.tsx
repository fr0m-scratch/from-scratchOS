import Head from "next/head";
import Link from "next/link";

const About = (): React.ReactElement => (
  <div className="fs-page">
    <Head>
      <title>About | Frontier Signal</title>
      <meta
        name="description"
        content="About Frontier Signal, an AI tech publication focused on research, product, infrastructure, and the economics of applied AI."
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
        <Link href="/">Home</Link>
        <Link href="/advertise">Advertise</Link>
      </nav>
    </header>

    <main className="fs-page-block">
      <div className="fs-kicker">About</div>
      <div className="fs-two-col">
        <div>
          <h1>Frontier Signal covers the part of AI that operators can actually use.</h1>
          <p className="fs-body">
            The site focuses on applied AI, product strategy, infrastructure
            choices, and the economics that shape which tools and companies last.
          </p>
          <p className="fs-body">
            The editorial goal is simple: publish useful analysis for founders,
            product leaders, developers, and buyers who need signal instead of
            recycled launch-week noise.
          </p>
          <h2>Editorial pillars</h2>
          <ul>
            <li>Models, agents, and workflow orchestration</li>
            <li>Open-source versus hosted stack decisions</li>
            <li>AI product and monetization strategy</li>
            <li>Tool buying guidance for builders and teams</li>
          </ul>
        </div>
        <aside className="fs-list">
          <p className="fs-label">What comes next</p>
          <p className="fs-body">
            The site is set up to grow into a newsletter-led media business with
            sponsorships, affiliate guides, premium research, and later advisory
            work.
          </p>
          <Link href="/advertise">View sponsor options</Link>
        </aside>
      </div>
    </main>

    <footer className="fs-footer">
      <div>
        <strong>Frontier Signal</strong>
        <p className="fs-body">Independent AI tech publication.</p>
      </div>
      <div className="fs-footer-links">
        <Link href="/">Home</Link>
        <Link href="/advertise">Advertise</Link>
      </div>
    </footer>
  </div>
);

export default About;
