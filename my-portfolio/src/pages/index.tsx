import React, { useState } from "react";
import SeoHead from "../components/SeoHead";

export default function CrtTerminalPortfolio() {
  const [activeTab, setActiveTab] = useState<
    "home" | "skills" | "projects" | "contact"
  >("home");

  return (
    <>
      <SeoHead />

      <div className="crt-wrap">
        <div className="scanlines"></div>
        <div className="phosphor-glow"></div>
        <div className="vignette"></div>

        <div className="crt-inner">
          <header className="crt-header">
            <div className="crt-header-title">WEB DEVELOPER</div>
            {/* <div className="crt-header-right">ILYES@ESI-SBA ~ ALGERIA</div> */}
          </header>

          <nav className="crt-nav">
            <button
              className={activeTab === "home" ? "active" : ""}
              onClick={() => setActiveTab("home")}
            >
              HOME
            </button>
            <button
              className={activeTab === "skills" ? "active" : ""}
              onClick={() => setActiveTab("skills")}
            >
              SKILLS
            </button>
            <button
              className={activeTab === "projects" ? "active" : ""}
              onClick={() => setActiveTab("projects")}
            >
              TRACK_RECORD
            </button>
            <button
              className={activeTab === "contact" ? "active" : ""}
              onClick={() => setActiveTab("contact")}
            >
              CONTACT
            </button>
          </nav>

          {/* Tab: HOME */}
          {activeTab === "home" && (
            <div>
              <div className="prompt-line">
                <span className="prompt-sym">$</span>
                <span className="prompt-cmd">./whoami.sh</span>
              </div>
              <div className="prompt-out">
                Loading engineering profiles... OK
              </div>

              <h1 className="crt-title">
                ILYES
                <br />
                MEKHALFA
              </h1>
              <div className="crt-subtitle">
                // FULL-STACK DEVELOPER · BACKEND ARCHITECT · AI SYSTEMS
              </div>

              <p className="crt-desc">
                COMPUTER SCIENCE ENGINEERING STUDENT AT ESI SBA, SIDI BEL ABBÈS,
                ALGERIA.
                <br />
                BUILDING SCALABLE WEB APPS WITH REACT.JS, NODE.JS, NEST.JS &
                MONGO_DB.
                <br />
                SPECIALIZED IN HIGH-THROUGHPUT BACKENDS, APPLIED CYBERSECURITY,
                AND PIPELINES.
              </p>

              <div className="crt-badge-row">
                <span className="crt-badge on">⬤ OPEN TO WORK</span>
                <span className="crt-badge">REACT · NEST.JS</span>
                <span className="crt-badge">SOCKET.IO · REDIS</span>
                <span className="crt-badge">PRISMA · MONGODB</span>
              </div>

              <div className="crt-btn-row">
                <button
                  className="crt-btn primary"
                  onClick={() => setActiveTab("projects")}
                >
                  $ VIEW_LOGS
                </button>
                <button
                  className="crt-btn"
                  onClick={() => setActiveTab("contact")}
                >
                  $ GET_IN_TOUCH
                </button>
              </div>

              <hr className="divider" style={{ marginTop: "20px" }} />
              <div className="prompt-line" style={{ marginTop: "8px" }}>
                <span className="prompt-sym">$</span>
                <div className="crt-cursor"></div>
              </div>
            </div>
          )}

          {/* Tab: SKILLS */}
          {activeTab === "skills" && (
            <div>
              <div className="prompt-line">
                <span className="prompt-sym">$</span>
                <span className="prompt-cmd">cat skills.json</span>
              </div>
              <div className="prompt-out">Parsing JSON manifest... OK</div>

              <div className="skill-grid">
                <div className="skill-box">
                  <div className="skill-label">
                    <span>//</span> LANGUAGES
                  </div>
                  <div className="tag-row">
                    <span className="tag">JavaScript</span>
                    <span className="tag">TypeScript</span>
                  </div>
                </div>
                <div className="skill-box">
                  <div className="skill-label">
                    <span>//</span> FRONTEND
                  </div>
                  <div className="tag-row">
                    <span className="tag">React.js</span>
                    <span className="tag">Angular.js</span>
                    <span className="tag">CSS3</span>
                    <span className="tag">Responsive UI</span>
                  </div>
                </div>
                <div className="skill-box">
                  <div className="skill-label">
                    <span>//</span> BACKEND
                  </div>
                  <div className="tag-row">
                    <span className="tag">Node.js</span>
                    <span className="tag">Nest.js</span>
                    <span className="tag">Express</span>
                    <span className="tag">REST API</span>
                    <span className="tag">Socket.io</span>
                    <span className="tag">Cron Jobs</span>
                  </div>
                </div>
                <div className="skill-box">
                  <div className="skill-label">
                    <span>//</span> DATABASE
                  </div>
                  <div className="tag-row">
                    <span className="tag">MongoDB</span>
                    <span className="tag">PostgreSQL</span>
                    <span className="tag">Redis</span>
                    <span className="tag">Prisma ORM</span>
                  </div>
                </div>
              </div>
              <div className="skill-box" style={{ marginTop: "10px" }}>
                <div className="skill-label">
                  <span>//</span> DEVOPS & INFRASTRUCTURE
                </div>
                <div className="tag-row">
                  <span className="tag">Docker</span>
                  <span className="tag">Git</span>
                  <span className="tag">GitHub</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab: PROJECTS & EXPERIENCE */}
          {activeTab === "projects" && (
            <div>
              <div className="prompt-line">
                <span className="prompt-sym">$</span>
                <span className="prompt-cmd">
                  ls --classified ./track_record/
                </span>
              </div>
              <div className="prompt-out">
                Consolidating project matrices and execution logs... SUCCESS
              </div>

              {/* Project 1 */}
              <div className="proj-card live">
                <div className="proj-name-row">
                  <div className="proj-name">
                    ⬡ Wastoo — Waste Trade Platform
                  </div>
                  <a
                    href="./ilyes_crt_portfolio_preview.html"
                    className="preview-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    [PREVIEW_BUILD]
                  </a>
                </div>
                <div className="proj-meta">
                  WEB DEVELOPER · JUN 2026 – PRESENT{" "}
                  <span className="exp-badge">⬤ LIVE</span>
                </div>
                <ul className="proj-points">
                  <li>Developed clean, high-speed interfaces with React.js.</li>
                  <li>
                    Architected decoupled systems utilizing Nest.js pipelines
                    and structural Prisma layers.
                  </li>
                  <li>
                    Constructed low-latency synchronization with Socket.io,
                    memory caching loops over Redis, and cron tasks.
                  </li>
                </ul>
                <div className="proj-stack">
                  <span className="stack-tag">React.js</span>
                  <span className="stack-tag">Nest.js</span>
                  <span className="stack-tag">Prisma ORM</span>
                  <span className="stack-tag">Socket.io</span>
                  <span className="stack-tag">Redis</span>
                  <span className="stack-tag">Cron Jobs</span>
                </div>
              </div>

              {/* Project 2 */}
              <div className="proj-card">
                <div className="proj-name-row">
                  <div className="proj-name">⬡ FitTech Platform</div>
                  <a
                    href="https://github.com/Ilyes-Mekhalfa/Project-1CS"
                    className="preview-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    [VIEW_REPOSITORY]
                  </a>
                </div>
                <div className="proj-meta">
                  WEB DEVELOPER · FEB–MAY 2026{" "}
                  <span className="exp-badge school">SCHOOL PROJECT</span>
                </div>
                <ul className="proj-points">
                  <li>
                    Engineered a highly responsive administrative dashboard
                    panel layout.
                  </li>
                  <li>
                    Constructed structured multi-entity relational schemas
                    handled over Prisma ORM engines.
                  </li>
                  <li>
                    Deployed real-time alert event listeners via custom
                    streaming layers on top of Redis keyspaces.
                  </li>
                </ul>
                <div className="proj-stack">
                  <span className="stack-tag">React.js</span>
                  <span className="stack-tag">Nest.js</span>
                  <span className="stack-tag">Prisma ORM</span>
                  <span className="stack-tag">Socket.io</span>
                  <span className="stack-tag">Redis</span>
                </div>
              </div>

              {/* Project 3 */}
              <div className="proj-card hack">
                <div className="proj-name-row">
                  <div className="proj-name">⬡ Farming Market</div>
                  <a
                    href="https://github.com/Ilyes-Mekhalfa/ALGERIA2.0"
                    className="preview-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    [VIEW_REPOSITORY]
                  </a>
                </div>
                <div className="proj-meta">
                  BACKEND DEVELOPER · NOV 2025{" "}
                  <span className="exp-badge hack">
                    🏆 ALGERIA 2.0 HACKATHON
                  </span>
                </div>
                <ul className="proj-points">
                  <li>
                    Built high-throughput Express application routing modules
                    connected directly via cluster pools.
                  </li>
                  <li>
                    Offloaded mathematical optimization rules securely using
                    native execution child processes safely.
                  </li>
                  <li>
                    Designed intelligent event workers triggers processing
                    historical weather patterns for agriculture markets.
                  </li>
                </ul>
                <div className="proj-stack">
                  <span className="stack-tag">Express</span>
                  <span className="stack-tag">MongoDB</span>
                  <span className="stack-tag">Child Processes</span>
                  <span className="stack-tag">Rec. System</span>
                </div>
              </div>

              <div className="proj-card live">
                <div className="proj-name-row">
                  <div className="proj-name">
                    ⬡ Yassir Recommendation System
                  </div>
                  <a
                    href="https://github.com/Ilyes-Mekhalfa/yassir_recomendation_system"
                    className="preview-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    [VIEW_REPOSITORY]
                  </a>
                </div>
                <div className="proj-meta">
                  MACHINE LEARNING ENG · SYSTEM INFERENCE{" "}
                  <span className="exp-badge">⬤ [ML_PIPELINE]</span>
                </div>
                <ul className="proj-points">
                  <li>
                    Engineered a highly optimized recommendation loop optimized
                    for driver-passenger dispatch patterns.
                  </li>
                  <li>
                    Implemented feature engineering, structured metrics
                    evaluation, and data processing arrays.
                  </li>
                  <li>
                    Built explicit inference paths to maximize matching accuracy
                    and pipeline throughput.
                  </li>
                </ul>
                <div className="proj-stack">
                  <span className="stack-tag">Python</span>
                  <span className="stack-tag">LightGBM</span>
                  <span className="stack-tag">Jupyter</span>
                  <span className="stack-tag">Pandas</span>
                  <span className="stack-tag">Data Pipeline</span>
                </div>
              </div>

              {/*  Project 5 */}
              <div className="proj-card">
                <div className="proj-name-row">
                  <div className="proj-name">
                    ⬡ MJ — Enterprise Application Workspace
                  </div>
                  <a
                    href="https://github.com/Aymen-Guerrouf/MJ"
                    className="preview-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    [VIEW_REPOSITORY]
                  </a>
                </div>
                <div className="proj-meta">
                  CONTRIBUTING ENGINEER · FULL-STACK DEPLOYMENT{" "}
                  <span className="exp-badge hack">
                    🏆 YOUTH MINISTRY HACKATHON WINNER
                  </span>
                </div>
                <ul className="proj-points">
                  <li>
                    Co-architected full-stack workflows alongside core
                    collaborative system contributors.
                  </li>
                  <li>
                    Designed robust backend schemas and route parameters to
                    ensure reliable service layers.
                  </li>
                  <li>
                    Integrated modular structural layouts maximizing
                    responsiveness and operational maintainability.
                  </li>
                </ul>
                <div className="proj-stack">
                  <span className="stack-tag">TypeScript</span>
                  <span className="stack-tag">Node.js</span>
                  <span className="stack-tag">Nest.js</span>
                  <span className="stack-tag">React.js</span>
                  <span className="stack-tag">Team Repository</span>
                </div>
              </div>

              {/* Project 6 */}
              {/* <div className="proj-card">
                <div className="proj-name-row">
                  <div className="proj-name">
                    ⬡ Quizzo — Medical Quiz Platform
                  </div>
                  <a
                    href="./ilyes_crt_portfolio_preview.html"
                    className="preview-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    [PREVIEW_BUILD]
                  </a>
                </div>
                <div className="proj-meta">WEB DEVELOPER · JUN–OCT 2025</div>
                <ul className="proj-points">
                  <li>
                    Engineered a full-stack medical validation architecture
                    running synchronized application cycles.
                  </li>
                  <li>
                    Integrated instant client scoring sync processes natively
                    scaling on top of persistent Socket instances.
                  </li>
                </ul>
                <div className="proj-stack">
                  <span className="stack-tag">React.js</span>
                  <span className="stack-tag">Node.js</span>
                  <span className="stack-tag">Socket.io</span>
                  <span className="stack-tag">MongoDB</span>
                </div>
              </div> */}

              {/* Unified Education Segment */}
              <div className="edu-box">
                <div
                  style={{
                    fontSize: "11px",
                    color: "#39d353",
                    textShadow: "0 0 4px #39d353",
                    marginBottom: "4px",
                  }}
                >
                  🎓 SYSTEM DECREE — ACADEMIC TRACK
                </div>
                <div style={{ fontSize: "13px", color: "#ffcc00" }}>
                  Engineering & Master's Degree in Computer Science
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#7a5500",
                    marginTop: "4px",
                  }}
                >
                  Higher School of Computer Science, 08 May 1945 (ESI SBA) —
                  Sidi Bel Abbès, Algeria · 2023 – 2028
                </div>
              </div>
            </div>
          )}

          {/* Tab: CONTACT */}
          {activeTab === "contact" && (
            <div>
              <div className="prompt-line">
                <span className="prompt-sym">$</span>
                <span className="prompt-cmd">./contact.sh --open-all</span>
              </div>
              <div className="prompt-out">
                Establishing duplex connection nodes...
              </div>

              <div className="contact-grid">
                <a
                  className="contact-item"
                  href="mailto:ilyesmekalfa@gmail.com"
                >
                  <div>
                    <div className="ci-label">EMAIL</div>
                    <div className="ci-val">ilyesmekalfa@gmail.com</div>
                  </div>
                </a>
                <a
                  className="contact-item"
                  href="https://www.linkedin.com/in/ilyes-mekhalfa-6477b61b6"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <div className="ci-label">LINKEDIN</div>
                    <div className="ci-val">ilyes-mekhalfa</div>
                  </div>
                </a>
                <a
                  className="contact-item"
                  href="https://github.com/Ilyes-Mekhalfa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <div className="ci-label">GITHUB</div>
                    <div className="ci-val">Ilyes-Mekhalfa</div>
                  </div>
                </a>
                <a className="contact-item" href="tel:+213665582005">
                  <div>
                    <div className="ci-label">PHONE</div>
                    <div className="ci-val">+213 66 558 2005</div>
                  </div>
                </a>
                <a
                  className="contact-item"
                  href="/ilyes.pdf"
                  download
                  style={{ gridColumn: "span 2" }}
                >
                  <div>
                    <div className="ci-label">DOWNLOAD DATA SHEET</div>
                    <div className="ci-val">ilyes_mekhalfa_resume.pdf</div>
                  </div>
                </a>
              </div>
              <div
                style={{
                  fontSize: "10px",
                  color: "#3a2400",
                  textAlign: "center",
                  marginTop: "14px",
                  letterSpacing: "1px",
                }}
              >
                // LOCATION: GUELMA, ALGERIA · FREQUENCY: 24H_MAX_POLL
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
