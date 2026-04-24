/* eslint-disable react/jsx-sort-props */
import { type AppProps } from "next/app";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <>
    <Head>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="#f5f7f4" name="theme-color" />
    </Head>
    <Component {...pageProps} />
    <style jsx global>{`
      :root {
        --bg: #f5f7f4;
        --bg-soft: #edf1ec;
        --surface: rgba(255, 255, 255, 0.78);
        --text: #111714;
        --muted: #5d685f;
        --line: rgba(17, 23, 20, 0.1);
        --accent: #173b2b;
        --accent-soft: #2f5d49;
        --accent-pale: #d8e8dd;
        --shadow: 0 24px 60px rgba(20, 35, 28, 0.08);
      }

      * {
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        margin: 0;
        background:
          radial-gradient(circle at top left, rgba(216, 232, 221, 0.85), transparent 30%),
          linear-gradient(180deg, #f7f8f5 0%, #f2f5f1 60%, #edf1ec 100%);
        color: var(--text);
        font-family: "Avenir Next", "Segoe UI", sans-serif;
        overflow-x: hidden;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      img {
        display: block;
        max-width: 100%;
      }

      .fs-page {
        min-height: 100vh;
      }

      .fs-header,
      .fs-main,
      .fs-footer,
      .fs-article,
      .fs-page-block {
        padding-left: clamp(1.2rem, 3vw, 3rem);
        padding-right: clamp(1.2rem, 3vw, 3rem);
      }

      .fs-header {
        position: sticky;
        top: 0;
        z-index: 20;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        background: rgba(245, 247, 244, 0.78);
        backdrop-filter: blur(16px);
        border-bottom: 1px solid rgba(17, 23, 20, 0.06);
      }

      .fs-brand {
        display: inline-flex;
        align-items: center;
        gap: 0.85rem;
      }

      .fs-brand-mark {
        display: inline-grid;
        place-items: center;
        width: 2.55rem;
        aspect-ratio: 1;
        border-radius: 0.6rem;
        background: var(--accent);
        color: white;
        font-size: 0.9rem;
      }

      .fs-brand-copy {
        display: grid;
        gap: 0.08rem;
      }

      .fs-nav,
      .fs-eyebrow,
      .fs-label,
      .fs-kicker,
      .fs-brand-copy strong,
      .fs-button {
        font-family: "Avenir Next Condensed", "Arial Narrow", sans-serif;
        text-transform: uppercase;
      }

      .fs-brand-copy span,
      .fs-body,
      .fs-muted,
      .fs-list li,
      .fs-article p,
      .fs-article li {
        color: var(--muted);
      }

      .fs-brand-copy span {
        font-size: 0.85rem;
      }

      .fs-nav {
        display: flex;
        flex-wrap: wrap;
        gap: 1.2rem;
        font-size: 0.92rem;
        color: var(--accent-soft);
      }

      .fs-main,
      .fs-page-block,
      .fs-article {
        padding-top: clamp(3.5rem, 8vw, 6rem);
        padding-bottom: clamp(3.5rem, 8vw, 6rem);
      }

      .fs-grid,
      .fs-story-grid,
      .fs-framework,
      .fs-two-col,
      .fs-article-layout {
        display: grid;
        gap: 1.5rem;
      }

      .fs-grid,
      .fs-two-col,
      .fs-article-layout {
        grid-template-columns: 1.05fr 0.95fr;
      }

      .fs-hero-copy h1,
      .fs-section-title,
      .fs-card h2,
      .fs-story-copy h3,
      .fs-article h1,
      .fs-article h2,
      .fs-page-block h1,
      .fs-page-block h2 {
        margin: 0;
        font-family: "Iowan Old Style", "Palatino Linotype", serif;
        font-weight: 600;
        letter-spacing: 0;
      }

      .fs-hero-copy h1 {
        max-width: 10ch;
        margin-top: 0.35rem;
        font-size: clamp(3.4rem, 8.5vw, 6.4rem);
        line-height: 0.94;
      }

      .fs-kicker,
      .fs-eyebrow,
      .fs-label {
        color: var(--accent-soft);
        font-size: 0.92rem;
      }

      .fs-body,
      .fs-article p,
      .fs-article li,
      .fs-page-block p,
      .fs-page-block li {
        font-size: 1.04rem;
        line-height: 1.78;
      }

      .fs-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.85rem;
        margin-top: 2rem;
      }

      .fs-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 3rem;
        padding: 0.82rem 1.2rem;
        border-radius: 999px;
        border: 1px solid transparent;
        font-size: 0.94rem;
      }

      .fs-button-primary {
        background: var(--accent);
        color: #f8fbf8;
      }

      .fs-button-ghost {
        background: rgba(255, 255, 255, 0.55);
        border-color: rgba(17, 23, 20, 0.1);
      }

      .fs-visual {
        position: relative;
        min-height: 36rem;
        overflow: hidden;
        border-radius: 1.4rem;
        background:
          radial-gradient(circle at top left, rgba(216, 232, 221, 1), transparent 38%),
          linear-gradient(135deg, #ffffff 0%, #f0f5f0 48%, #dfe9e2 100%);
        box-shadow: var(--shadow);
      }

      .fs-visual::before,
      .fs-visual::after {
        content: "";
        position: absolute;
        inset: auto;
        border-radius: 999px;
        background: rgba(23, 59, 43, 0.08);
      }

      .fs-visual::before {
        width: 18rem;
        height: 18rem;
        right: -4rem;
        top: 3rem;
      }

      .fs-visual::after {
        width: 12rem;
        height: 12rem;
        left: 3rem;
        bottom: 4rem;
      }

      .fs-card {
        position: absolute;
        left: 1.3rem;
        right: 1.3rem;
        bottom: 1.3rem;
        padding: 1.25rem;
        border-radius: 1.2rem;
        background: rgba(250, 252, 249, 0.84);
        backdrop-filter: blur(18px);
        box-shadow: 0 18px 50px rgba(14, 20, 16, 0.08);
      }

      .fs-card h2,
      .fs-section-title,
      .fs-page-block h1,
      .fs-page-block h2,
      .fs-article h1,
      .fs-article h2 {
        line-height: 1.02;
      }

      .fs-card h2 {
        margin-top: 0.3rem;
        font-size: clamp(1.5rem, 3vw, 2.25rem);
      }

      .fs-strip {
        overflow: hidden;
        border-top: 1px solid var(--line);
        border-bottom: 1px solid var(--line);
      }

      .fs-strip-row {
        display: flex;
        gap: 2.2rem;
        width: max-content;
        padding: 1rem 0;
        animation: fsTicker 28s linear infinite;
        color: var(--accent-soft);
      }

      .fs-strip-row span::after {
        content: "·";
        margin-left: 2.2rem;
        color: rgba(47, 93, 73, 0.3);
      }

      .fs-section-title,
      .fs-page-block h1,
      .fs-page-block h2,
      .fs-article h1,
      .fs-article h2 {
        font-size: clamp(2rem, 5vw, 3.7rem);
      }

      .fs-section-head {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: end;
        gap: 1rem;
        margin-bottom: 2rem;
      }

      .fs-feature {
        display: grid;
        grid-template-columns: 1.15fr 0.85fr;
        gap: 2rem;
        padding: 1.5rem 0 2rem;
        border-top: 1px solid var(--line);
        border-bottom: 1px solid var(--line);
      }

      .fs-story-grid {
        grid-template-columns: 1fr 1fr 0.9fr;
        margin-top: 1.6rem;
      }

      .fs-story {
        overflow: hidden;
        border-radius: 1.25rem;
        background: rgba(255, 255, 255, 0.58);
        border: 1px solid rgba(17, 23, 20, 0.06);
        box-shadow: var(--shadow);
      }

      .fs-story-visual {
        aspect-ratio: 1;
        background:
          linear-gradient(135deg, #f7faf7 0%, #dfe9e2 48%, #cadccf 100%);
      }

      .fs-story-copy {
        padding: 1.1rem 1.1rem 1.25rem;
      }

      .fs-story-copy h3 {
        margin-top: 0.3rem;
        font-size: 1.6rem;
        line-height: 1.08;
      }

      .fs-list {
        padding-left: 1rem;
        border-left: 1px solid var(--line);
      }

      .fs-list ul,
      .fs-article ul,
      .fs-page-block ul {
        margin: 1rem 0 0;
        padding-left: 1.1rem;
      }

      .fs-framework {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      .fs-framework article {
        padding: 1.2rem;
        border-radius: 1.1rem;
        background: rgba(255, 255, 255, 0.56);
        border: 1px solid rgba(17, 23, 20, 0.06);
      }

      .fs-band {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.4rem;
        padding: 2rem clamp(1.2rem, 3vw, 3rem);
        margin: 0 clamp(1.2rem, 3vw, 3rem);
        border-top: 1px solid var(--line);
        border-bottom: 1px solid var(--line);
      }

      .fs-briefing {
        display: grid;
        grid-template-columns: 1.1fr 0.9fr;
        gap: 2rem;
        align-items: center;
        padding: clamp(3.5rem, 8vw, 6rem) clamp(1.2rem, 3vw, 3rem);
        background: linear-gradient(135deg, rgba(216, 232, 221, 0.55), rgba(255, 255, 255, 0.25));
      }

      .fs-form {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 0.8rem;
      }

      .fs-form input {
        width: 100%;
        min-height: 3.2rem;
        padding: 0 1rem;
        border-radius: 999px;
        border: 1px solid rgba(17, 23, 20, 0.12);
        background: rgba(255, 255, 255, 0.66);
        color: var(--text);
        font: inherit;
      }

      .fs-note {
        grid-column: 2;
        margin: 0;
        font-size: 0.92rem;
        color: var(--muted);
      }

      .fs-footer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1rem;
        padding-top: 2rem;
        padding-bottom: 2.5rem;
        border-top: 1px solid var(--line);
      }

      .fs-footer-links {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        color: var(--accent-soft);
      }

      .fs-article-layout {
        align-items: start;
      }

      .fs-sidebar {
        position: sticky;
        top: 5rem;
      }

      .fs-sidebar section {
        padding-top: 1rem;
        margin-bottom: 1.6rem;
        border-top: 1px solid var(--line);
      }

      .fs-sidebar h3 {
        margin: 0 0 0.7rem;
        font-size: 0.95rem;
        color: var(--accent-soft);
        text-transform: uppercase;
      }

      .fs-sidebar ul {
        margin: 0;
        padding-left: 1.1rem;
      }

      @keyframes fsTicker {
        from {
          transform: translateX(0);
        }

        to {
          transform: translateX(-50%);
        }
      }

      @media (max-width: 980px) {
        .fs-grid,
        .fs-two-col,
        .fs-feature,
        .fs-story-grid,
        .fs-framework,
        .fs-briefing,
        .fs-article-layout {
          grid-template-columns: 1fr;
        }

        .fs-section-head {
          grid-template-columns: 1fr;
        }

        .fs-sidebar {
          position: static;
        }

        .fs-note {
          grid-column: auto;
        }
      }

      @media (max-width: 720px) {
        .fs-header,
        .fs-band {
          flex-direction: column;
          align-items: flex-start;
        }

        .fs-nav,
        .fs-form {
          width: 100%;
          grid-template-columns: 1fr;
        }

        .fs-visual {
          min-height: 25rem;
        }

        .fs-card {
          position: static;
          margin-top: 1rem;
        }
      }
    `}</style>
  </>
);

export default App;
