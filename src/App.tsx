import React, { useEffect, useState } from 'react';

const FAN_URL = 'https://crowdplay-app.github.io/fan/';
const DJ_URL = 'https://crowdplay-api-i1xh.onrender.com/login';
const DOCS_URL = 'https://crowdplay.mintlify.app/';
const STATUS_URL = 'https://stats.uptimerobot.com/Hv8y0rbFCn';
const HOME_URL = 'https://crowdplay-app.github.io/';
const GITHUB_URL = 'https://github.com/crowdplay-app';
const API_URL = 'https://crowdplay-api-i1xh.onrender.com/api';

/* ── Monochrome SVG Icons ─────────────── */
const Icon = {
  music: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
    </svg>
  ),
  headphones: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
    </svg>
  ),
  sliders: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>
    </svg>
  ),
  book: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  ),
  qrCode: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3z"/><path d="M20 14v3h-3"/><path d="M14 20h3"/><path d="M20 20h0"/>
    </svg>
  ),
  search: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  ),
  arrowUp: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>
    </svg>
  ),
  settings: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  ),
  arrowRight: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  activity: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
};

export default function App() {
  const [stats, setStats] = useState<{ djs: number; sessions: number } | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/stats`)
      .then(r => r.json())
      .then(data => setStats(data))
      .catch(() => {});
  }, []);
  return (
    <div className="page">
      {/* Nav */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <img src="logo.png" alt="" width="28" height="28" />
            <span>CrowdPlay</span>
          </a>
          <div className="nav-links">
            <a href={FAN_URL} className="nav-link">Fan</a>
            <a href={DOCS_URL} className="nav-link">Docs</a>
            <a href={DJ_URL} className="nav-link nav-link-accent">DJ Dashboard</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="badge">{Icon.music} Live DJ Queue</div>
          <h1>
            Let Your Crowd<br />
            <span className="gradient-text">Pick the Music</span>
          </h1>
          <p className="hero-sub">
            CrowdPlay connects DJs and their audience in real time.
            Fans request songs, upvote favorites, and watch
            the queue update live — no app download needed.
          </p>
          <div className="hero-actions">
            <a href={FAN_URL} className="btn btn-primary">
              {Icon.headphones} Request a Song
            </a>
            <a href={DJ_URL} className="btn btn-secondary">
              {Icon.sliders} DJ Dashboard
            </a>
            <a href={DOCS_URL} className="btn btn-secondary">
              {Icon.book} Docs
            </a>
          </div>
          {stats && (stats.djs > 0 || stats.sessions > 0) && (
            <div className="stats-row">
              <div className="stat">
                <span className="stat-num">{stats.djs}+</span>
                <span className="stat-label">DJs</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-num">{stats.sessions}+</span>
                <span className="stat-label">Sessions</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* How it works */}
      <section className="features">
        <h2 className="section-title">How It Works</h2>
        <div className="cards">
          <div className="card">
            <div className="card-icon">{Icon.qrCode}</div>
            <h3>Scan & Join</h3>
            <p>Fans scan a QR code or enter a short session code — no account needed.</p>
          </div>
          <div className="card">
            <div className="card-icon">{Icon.search}</div>
            <h3>Search & Request</h3>
            <p>Browse millions of tracks and add your pick to the live queue instantly.</p>
          </div>
          <div className="card">
            <div className="card-icon">{Icon.arrowUp}</div>
            <h3>Upvote & Rise</h3>
            <p>Duplicate requests become upvotes — the most wanted songs climb higher.</p>
          </div>
          <div className="card">
            <div className="card-icon">{Icon.settings}</div>
            <h3>DJ Controls</h3>
            <p>DJs manage the queue with full control — play, skip, reorder, or end the session.</p>
          </div>
        </div>
      </section>

      {/* For DJs / For Fans */}
      <section className="split">
        <div className="split-block">
          <h2>For <span className="gradient-text">DJs</span></h2>
          <ul>
            <li>Create up to 20 sessions with shareable QR codes</li>
            <li>Reorder, skip, or remove songs in real time</li>
            <li>End a session and come back later — your queue stays</li>
            <li>See who requested what and how many votes it got</li>
          </ul>
          <a href={DJ_URL} className="btn btn-primary" style={{ marginTop: 16 }}>
            Open Dashboard {Icon.arrowRight}
          </a>
        </div>
        <div className="split-block">
          <h2>For <span className="gradient-text">Fans</span></h2>
          <ul>
            <li>Join instantly — no sign up, no download</li>
            <li>Search the entire Deezer catalog for free</li>
            <li>See what's playing right now in real time</li>
            <li>Upvote songs others already requested</li>
          </ul>
          <a href={FAN_URL} className="btn btn-primary" style={{ marginTop: 16 }}>
            Join a Session {Icon.arrowRight}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-col">
            <div className="footer-brand">
              <img src="logo.png" alt="" width="24" height="24" />
              <span>CrowdPlay</span>
            </div>
            <p className="footer-tagline">Real-time song requests for DJs and their crowd.</p>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <a href={HOME_URL}>Homepage</a>
            <a href={FAN_URL}>Fan Client</a>
            <a href={DJ_URL}>DJ Dashboard</a>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <a href={DOCS_URL}>Documentation</a>
            <a href={GITHUB_URL}>GitHub</a>
          </div>
          <div className="footer-col">
            <h4>Status</h4>
            <a href={STATUS_URL} className="footer-status-link">
              {Icon.activity} System Status
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>CrowdPlay &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
