import { useState } from 'react';
import './App.css';

const roadmapData = {
    1: [
      { title: "More Chains Added", desc: "QWallet will be expanded to support more chains" },
      { title: "Enhanced Quantum Resilience", desc: "Quantum Resilience enhancement for all protocols"},
    
    ],
    2: [
      
      {title:"Pre funded Sharable links",desc:"One Time Wallet encoded into QR/Link , receiver sweeps once"},
      {title:"Batch Generation",desc:"pre generate multiple One Time Wallets and use them sequentially"}
    ],
     3:[
      {title:"Extensions",desc:"Added support for  advanced use cases "},
      
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






<section className="hero-feature-two">
    
  <div className="hero-feature-content">
    
    <h1 className="hero-title">
      One-Time <br /> 
      <span>Accounts.</span>
    </h1>

    <div className="hero-paragraph-container">
      <p className="hero-lead">
        Every transaction originates from a <span>single-use account</span> that is permanently retired after execution. <br />
        No key reuse. No persistent attack surface.
      </p>
      
      <p className="hero-details">
        Each account is deterministically derived, used once, and then cryptographically "burned". 
        Even if a public key is exposed on explorers, it becomes useless the moment the transaction is finalized. 
        This eliminates replay vectors, key correlation, and long-term exposure risks—transforming every interaction 
        into an isolated, ephemeral event in the system.
      </p>

      <p className="hero-details">
        By enforcing one-time validity at the account level, QWallet ensures that even in adversarial or 
        post-quantum environments, compromised data has zero future utility. What is revealed cannot be reused.
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
        <div className="spec-meta">SPEC 1</div>
        <h3>SIGNING & <br/><span>TRANSACTIONS</span></h3>
        <p>All signing and crypto transfers are secured by  WOTS, ensuring military-grade post-quantum security.</p>
        <div className="speed-bar">
          <div className="bar-fill" style={{width: '85%'}}></div>
        </div>
      </div>
    </div>

    {/* Layer 02: Accounts */}
    <div className="spec-card">
      <div className="card-accent accent-alt"></div>
      <div className="card-content">
        <div className="spec-meta">SPEC 2</div>
        <h3>ONE TIME <br/><span>ACCOUNTS</span></h3>
        <p>Qwallet Accounts gets burned after each txn  use, eliminating public key exposure and maintaining a zero-trace profile.</p>
        <div className="speed-bar">
          <div className="bar-fill" style={{width: '95%'}}></div>
        </div>
      </div>
    </div>

     {/* Layer 02: Accounts */}
    <div className="spec-card">
      <div className="card-accent accent-alt"></div>
      <div className="card-content">
        <div className="spec-meta">SPEC 3</div>
        <h3>MULTI CHAIN<br/><span>SUPPORT</span></h3>
        <p>Qwallet currently  supports Solana and Ethereum Chains .</p>
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
            {[1, 2, 3].map((tab) => (
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