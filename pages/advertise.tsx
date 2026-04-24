/* eslint-disable react/jsx-sort-props */
import Head from "next/head";
import Link from "next/link";

const Advertise = (): React.ReactElement => (
  <div className="fs-page">
    <Head>
      <title>Advertise | Frontier Signal</title>
      <meta
        content="Sponsor Frontier Signal and reach founders, operators, developers, and AI tool buyers."
        name="description"
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
      <nav aria-label="Primary" className="fs-nav">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>

    <main className="fs-page-block">
      <div className="fs-kicker">Advertise</div>
      <div className="fs-two-col">
        <div>
          <h1>Reach an audience that is actively buying into the AI stack.</h1>
          <p className="fs-body">
            Frontier Signal is designed for founders, product managers,
            developers, and operators evaluating models, infrastructure,
            workflow tooling, and AI products.
          </p>
          <h2>Sponsor options</h2>
          <ul>
            <li>Weekly briefing lead sponsor</li>
            <li>Homepage feature slot</li>
            <li>Editorially aligned tool guide sponsorship</li>
            <li>Premium report or briefing partner package</li>
          </ul>
          <h2>Good fit</h2>
          <p className="fs-body">
            AI products, developer tools, infrastructure vendors, workflow
            software, analytics, observability, hosting, and B2B software with a
            genuine fit for an AI-native audience.
          </p>
        </div>
        <aside className="fs-list">
          <p className="fs-label">Contact</p>
          <p className="fs-body">
            For sponsor inquiries, use
            <br />
            <a href="mailto:sponsors@frontiersignal.ai">sponsors@frontiersignal.ai</a>
          </p>
          <p className="fs-body">
            This is a launch-stage sponsor page, which means you can start
            taking interest immediately and refine the media kit as traffic
            grows.
          </p>
        </aside>
      </div>
    </main>

    <footer className="fs-footer">
      <div>
        <strong>Frontier Signal</strong>
        <p className="fs-body">Sponsorship and partnership information.</p>
      </div>
      <div className="fs-footer-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </footer>
  </div>
);

export default Advertise;
