
import { useState } from 'react';
import './App.css';



const roadmapData = {
    1: [
      { title: "MultiChain", desc: "QWallet will be expanded to support multichains" }
    ],
    2: [
      { title: "Swaping and Buying Crypto ", desc: "QWallet will support swaping and buying crypto assets" },
    ],
    3: [
      { title: "Enhanced Quantum Resilience", desc: "Quantum Resilience enhancement for all protocols" },
    ],
     4:[
      {title:"Transfer Hooks [ solana extensions]",desc:"An on-chain 'gatekeeper' program that automatically intercepts every token transfer to enforce custom rules—like requiring a secret hash—before the move is finalized"}
     ]
  };



export default function App() {


  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="apple-terminal">
      {/* Minimalist Nav */}
     
    <nav className="island-navbar">
  <div className="navbar-glass">
    <div className="nav-logo">
      <span className="logo-icon">▲</span> 
      <span className="logo-text">QWALLET</span>
    </div>
    <div className="nav-status">
      <span className="status-dot"></span>
      <a href="" style={{color:"orchid",textDecoration:"none",fontFamily:"monospace",fontWeight:"bolder"}}>App</a>
    </div>
  </div>
</nav>

<main className="view-container">
        {/* Apple Style Hero */}
  <section className="hero">
          <h1 className="gradient-title">Absolute Security. <br/> Zero Compromise.</h1>
          <p className="hero-sub">
            Quantum Resilient  Wallet Architecture
          </p><br/>
  </section>

 <section className="hero-feature">
    
  <div className="hero-feature-content">
    
    <h1 className="hero-title">
      Post-Quantum <br /> 
      <span>Architecture.</span>
    </h1>

  <div className="hero-paragraph-container">
  <p className="hero-lead">
    Traditional ECDSA collapses under Shor’s algorithm. <br />
    Our terminal implements the <span>Winternitz One-Time Signature (WOTS)</span> scheme.
  </p>
  
  <p className="hero-details">
    By utilizing iterative hash-chaining, WOTS transforms private keys into 
    secret seeds, which are then hashed <code className="mono-inline">2<sup>w</sup> - 1</code> times. 
    This creates a mathematical "one-way street" that ensures your assets remain 
    immutable, even in the era of quantum supremacy.
  </p>
</div>

  </div>
</section>







<section className="cinematic-container">
  <div className="racing-header">
    <span className="live-tag">CORE SPECS</span>
    <div className="checkered-line"></div>
  </div>

  <div className="specs-grid">
    {/* Layer 01: Signing */}
    <div className="spec-card">
      <div className="card-accent"></div>
      <div className="card-content">
        <div className="spec-meta">SYSTEM_01</div>
        <h3>SIGNING & <br/><span>TRANSACTIONS</span></h3>
        <p>All signing and crypto transfers are secured by per-txn WOTS, ensuring military-grade post-quantum security.</p>
        <div className="speed-bar">
          <div className="bar-fill" style={{width: '85%'}}></div>
        </div>
      </div>
    </div>

    {/* Layer 02: Accounts */}
    <div className="spec-card">
      <div className="card-accent accent-alt"></div>
      <div className="card-content">
        <div className="spec-meta">SYSTEM_02</div>
        <h3>ONE TIME <br/><span>ACCOUNTS</span></h3>
        <p>Accounts can be burned after each use, eliminating public key exposure and maintaining a zero-trace profile.</p>
        <div className="speed-bar">
          <div className="bar-fill" style={{width: '95%'}}></div>
        </div>
      </div>
    </div>
  </div>
</section>




      
      
      
      
      
      
      
      
      
      

















<section className="roadmap-section">
        <header className="roadmap-header">
          
          <h2>Project Roadmap</h2>
          
          {/* Segmented Control Tabs */}
          <div className="tab-container">
            {[1, 2, 3,4].map((tab) => (
              <button 
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                Phase 0{tab}
              </button>
            ))}
          </div>
        </header>

        <div className="roadmap-grid">
          {roadmapData[activeTab].map((item, index) => (
            <div key={index} className="white-card roadmap-card">
              <span className="phase-tag">Q{activeTab}.{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>



      </main>
    </div>
  );
}