import React from 'react';

const FAN_URL = 'https://crowdplay-app.github.io/fan/';
const DJ_URL = 'https://crowdplay-api-i1xh.onrender.com/login';

export default function App() {
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
            <a href={DJ_URL} className="nav-link nav-link-accent">DJ</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="badge">🎵 Live DJ Queue</div>
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
              <span>🎧</span> Request a Song
            </a>
            <a href={DJ_URL} className="btn btn-secondary">
              <span>🎛️</span> DJ Dashboard
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="features">
        <h2 className="section-title">How It Works</h2>
        <div className="cards">
          <div className="card">
            <div className="card-icon">📱</div>
            <h3>Scan & Join</h3>
            <p>Fans scan a QR code or enter a short session code — no account needed.</p>
          </div>
          <div className="card">
            <div className="card-icon">🔍</div>
            <h3>Search & Request</h3>
            <p>Browse millions of tracks and add your pick to the live queue instantly.</p>
          </div>
          <div className="card">
            <div className="card-icon">🔥</div>
            <h3>Upvote & Rise</h3>
            <p>Duplicate requests become upvotes — the most wanted songs climb higher.</p>
          </div>
          <div className="card">
            <div className="card-icon">🎛️</div>
            <h3>DJ Controls</h3>
            <p>DJs manage the queue with full control — play, skip, reorder, or end the set.</p>
          </div>
        </div>
      </section>

      {/* For DJs / For Fans */}
      <section className="split">
        <div className="split-block">
          <h2>For <span className="gradient-text">DJs</span></h2>
          <ul>
            <li>Create unlimited sessions with shareable QR codes</li>
            <li>Reorder, skip, or remove songs in real time</li>
            <li>End a set and come back later — your queue stays</li>
            <li>See who requested what and how many votes it got</li>
          </ul>
          <a href={DJ_URL} className="btn btn-primary" style={{ marginTop: 16 }}>
            Open Dashboard →
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
            Join a Session →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>CrowdPlay &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
