import React, { useEffect, useRef, useState } from 'react';

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

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.unobserve(el); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function RotatingGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const dpr = window.devicePixelRatio || 1;
    const size = 300;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);
    const cx = size / 2;
    const cy = size / 2;
    const R = 120;

    // Distribute great circle normals evenly on a hemisphere
    // using Fibonacci / golden-angle spacing
    const circleCount = 10;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5)); // ~2.399 rad
    const circleNormals: [number, number, number][] = [];
    for (let i = 0; i < circleCount; i++) {
      // Spread polar angle across hemisphere (0 to π/2)
      const t = (i + 0.5) / circleCount;
      const phi = Math.acos(1 - t); // 0 → ~π/3
      const theta = goldenAngle * i;
      const nx = Math.sin(phi) * Math.cos(theta);
      const ny = Math.sin(phi) * Math.sin(theta);
      const nz = Math.cos(phi);
      circleNormals.push([nx, ny, nz]);
    }

    let rotation = 0;
    let frame: number;
    const startTime = performance.now();
    // 120 BPM = 2 beats/sec = beat period of 500ms
    const BPM = 120;
    const beatPeriod = 60000 / BPM; // 500ms

    function drawGlobe(rot: number, now: number) {
      ctx.clearRect(0, 0, size, size);

      // Beat phase: 0→1 over each beat cycle
      const beatPhase = ((now - startTime) % beatPeriod) / beatPeriod;
      // Smooth sinusoidal pulse: oscillates between 0 and 1 gently
      const beat = 0.5 + 0.5 * Math.cos(beatPhase * Math.PI * 2);
      // Map to subtle 50%→70% intensity range
      const intensity = 0.5 + 0.2 * beat; // 0.5 → 0.7

      // ── Subtle background glow (pulsing gently) ──
      const glowRadius = R * 1.35;
      const glowAlpha = 0.06 + 0.06 * beat;
      const innerGlow = ctx.createRadialGradient(cx, cy, R * 0.5, cx, cy, glowRadius);
      innerGlow.addColorStop(0, `rgba(162, 106, 235, ${glowAlpha})`);
      innerGlow.addColorStop(0.7, `rgba(162, 106, 235, ${glowAlpha * 0.3})`);
      innerGlow.addColorStop(1, 'rgba(162, 106, 235, 0)');
      ctx.fillStyle = innerGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, glowRadius, 0, Math.PI * 2);
      ctx.fill();

      // ── Light rays — club lights seen from outside ──
      // Rays start from the globe edge (not the center) and extend outward
      const rayCount = 14;
      const rayRotation = -rot * 0.3; // anticlockwise rotation
      for (let i = 0; i < rayCount; i++) {
        const baseAngle = (i / rayCount) * Math.PI * 2 + rayRotation;
        // Each ray has slightly different phase for organic feel
        const rayBeat = 0.5 + 0.5 * Math.cos(beatPhase * Math.PI * 2 + i * 0.45);
        const rayAlpha = intensity * (0.6 + 0.4 * rayBeat);
        const rayLen = R * 0.6 + R * 0.15 * rayBeat;
        const innerR = R * 0.75; // start rays from near the edge, no center blob
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(baseAngle);
        const rayGrad = ctx.createLinearGradient(innerR, 0, innerR + rayLen, 0);
        rayGrad.addColorStop(0, `rgba(162, 106, 235, ${0.35 * rayAlpha})`);
        rayGrad.addColorStop(0.3, `rgba(162, 106, 235, ${0.25 * rayAlpha})`);
        rayGrad.addColorStop(0.7, `rgba(162, 106, 235, ${0.08 * rayAlpha})`);
        rayGrad.addColorStop(1, 'rgba(162, 106, 235, 0)');
        ctx.fillStyle = rayGrad;
        ctx.filter = 'blur(4px)';
        const w = 5 + 3 * rayBeat;
        ctx.beginPath();
        ctx.moveTo(innerR, -w);
        ctx.lineTo(innerR + rayLen, -w * 0.3);
        ctx.lineTo(innerR + rayLen, w * 0.3);
        ctx.lineTo(innerR, w);
        ctx.closePath();
        ctx.fill();
        ctx.filter = 'none';
        ctx.restore();
      }

      // ── Draw great circles ──
      const steps = 120;
      for (const normal of circleNormals) {
        let [nx, ny, nz] = normal;
        // Apply global rotation around Y axis
        const cr = Math.cos(rot), sr = Math.sin(rot);
        const rnx = cr * nx + sr * nz;
        const rny = ny;
        const rnz = -sr * nx + cr * nz;

        // Build two tangent vectors perpendicular to the rotated normal
        // Pick an arbitrary vector not parallel to normal
        let ux: number, uy: number, uz: number;
        if (Math.abs(rnx) < 0.9) {
          ux = 0; uy = -rnz; uz = rny; // cross(normal, (1,0,0)) simplified
          const tmp = uy;
          ux = rny * 0 - rnz * 0;
          uy = rnz * 1 - rnx * 0;
          uz = rnx * 0 - rny * 1;
          // Actually: cross(n, (1,0,0))
          ux = 0;
          uy = rnz;
          uz = -rny;
        } else {
          // cross(n, (0,1,0))
          ux = -rnz;
          uy = 0;
          uz = rnx;
        }
        // Normalize u
        const uLen = Math.sqrt(ux * ux + uy * uy + uz * uz);
        ux /= uLen; uy /= uLen; uz /= uLen;
        // v = cross(n, u)
        const vx = rny * uz - rnz * uy;
        const vy = rnz * ux - rnx * uz;
        const vz = rnx * uy - rny * ux;

        ctx.strokeStyle = 'rgba(162, 106, 235, 0.55)';
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        for (let i = 0; i <= steps; i++) {
          const t = (i / steps) * Math.PI * 2;
          const cosT = Math.cos(t);
          const sinT = Math.sin(t);
          // Point on the great circle
          const px = (ux * cosT + vx * sinT);
          const py = (uy * cosT + vy * sinT);
          // Orthographic projection
          const sx = cx + px * R;
          const sy = cy - py * R;
          if (i === 0) ctx.moveTo(sx, sy);
          else ctx.lineTo(sx, sy);
        }
        ctx.closePath();
        ctx.stroke();
      }

      // ── Outer sphere outline (subtle pulse) ──
      const outlineAlpha = 0.5 + 0.15 * beat;
      const outlineWidth = 2.0 + 0.5 * beat;
      ctx.strokeStyle = `rgba(162, 106, 235, ${outlineAlpha})`;
      ctx.lineWidth = outlineWidth;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.stroke();

      // ── Soft outline glow ──
      ctx.strokeStyle = `rgba(162, 106, 235, ${0.06 + 0.06 * beat})`;
      ctx.lineWidth = 4;
      ctx.filter = 'blur(4px)';
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.stroke();
      ctx.filter = 'none';
    }

    function animate() {
      rotation += 0.004;
      const now = performance.now();
      drawGlobe(rotation, now);
      frame = requestAnimationFrame(animate);
    }
    animate();

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="globe-wrapper">
      <canvas
        ref={canvasRef}
        className="globe-canvas"
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
}

export default function App() {
  const [stats, setStats] = useState<{ djs: number; sessions: number } | null>(null);
  const heroRef = useFadeIn();
  const featuresRef = useFadeIn();
  const splitRef = useFadeIn();

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
      <section className="hero fade-in" ref={heroRef}>
        <div className="hero-glow" />
        <div className="hero-content">
          <RotatingGlobe />
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
      <section className="features fade-in" ref={featuresRef}>
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
      <section className="split fade-in" ref={splitRef}>
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
