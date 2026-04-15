import { useState } from 'react';
import './App.css';

const roadmapData = {
    1: [
      { title: "More Chains", desc: "QWallet will be expanded to support more chains" },
      { title: "Enhanced Resilience", desc: "Quantum Resilience enhancement for all protocols"},
    
    ],
    2: [
      
      {title:"Pre Funded",desc:"One Time Wallet encoded into QR/Link , receiver sweeps once"},
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
      <span className="gradient-title-two">QWALLET</span>
    </div>
    <div className="nav-status">
      <span className="status-dot"></span>
      <a href="" style={{color:"white",textDecoration:"none",fontFamily:"monospace",fontWeight:"bolder"}}>
        <h3>App</h3>
      </a><br/>
      <a href="https://github.com/Q-WALLET-APP" style={{textDecoration:"none"}}><h3>Github</h3></a>
      <a></a>
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
  
  <h3 className="hero-details">
    By utilizing iterative hash-chaining, WOTS transforms private keys into 
    secret seeds, which are then hashed <code className="mono-inline">2<sup>w</sup> - 1</code> times. 
    This creates a mathematical "one-way street" that ensures your assets remain 
    immutable, even in the era of quantum supremacy.
  </h3>


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
        Every transaction originates from a single-use account that is permanently retired after execution
        No key reuse. No persistent attack surface.
      </p>
      
      <h3 className="hero-details">
        Each account is deterministically derived, used once, and then cryptographically "burned". 
        Even if a public key is exposed on explorers, it becomes useless the moment the transaction is finalized. 
        This eliminates replay vectors, key correlation, and long-term exposure risks—transforming every interaction 
        into an isolated, ephemeral event in the system.
      </h3>
    </div>

  </div>
</section>





<section className="hero-feature-three">
    
  <div className="hero-feature-content">
    
    <h1 className="hero-title">
        Anonymous<br/>
        Signatures
    </h1>

    <div className="hero-paragraph-container">
     
      <h3 className="hero-details">
      Qwallet injects a familiar wallet interface (like window.ethereum or window.solana) but with a fundamentally different security model. Instead of relying on a single long-lived private key, it generates a fresh, ephemeral keypair for every signing request. Each transaction is signed using a one-time account, and the key is immediately discarded.
      No key reuse. No persistent secrets. No address tracking.
      This approach dramatically reduces the attack surface: even in the unlikely event of a compromise, there are no long-lived keys to steal—only isolated, single-use cryptographic sessions
      </h3>

      
    </div>

  </div>
</section>













<section className="cinematic-container" style={{backgroundColor:"darkslategray"}}>
  <div className="racing-header">
    <span className="live-tag">CORE SPECS</span>
    <div className="checkered-line"></div>
  </div>

  <div className="specs-grid">



   <div className="spec-card">
      <div className="card-accent accent-alt"></div>
      <div className="card-content">
        <div className="spec-meta">SPEC 1</div>
        <h3>ANONYMOUS  <br/><span> CREATION</span></h3>
        <p>Qwallet generates the  wallets  without requiring any personal information or sign ups </p>
        <div className="speed-bar">
          <div className="bar-fill" style={{width: '95%'}}></div>
        </div>
      </div>
    </div>



    {/* Layer 01: Signing */}
    <div className="spec-card">
      <div className="card-accent"></div>
      <div className="card-content">
        <div className="spec-meta">SPEC 2</div>
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
        <div className="spec-meta">SPEC 3</div>
        <h3>ONE TIME <br/><span>ACCOUNTS</span></h3>
        <p>Qwallet Accounts gets burned after each txn  use, eliminating public key exposure and maintaining a zero-trace profile.</p>
        <div className="speed-bar">
          <div className="bar-fill" style={{width: '95%'}}></div>
        </div>
      </div>
    </div>

     


      <div className="spec-card">
      <div className="card-accent accent-alt"></div>
      <div className="card-content">
        <div className="spec-meta">SPEC 4</div>
        <h3>ANONYMOUS <br/><span>SIGNING</span></h3>
        <p>Qwallet Accounts enable anonymous dapp signing via its custom injected provider</p>
        <div className="speed-bar">
          <div className="bar-fill" style={{width: '95%'}}></div>
        </div>
      </div>
    </div>


     {/* Layer 02: Accounts */}
    <div className="spec-card">
      <div className="card-accent accent-alt"></div>
      <div className="card-content">
        <div className="spec-meta">SPEC 5</div>
        <h3>MULTI CHAIN<br/><span>SUPPORT</span></h3>
        <p>Qwallet currently  supports Solana and Ethereum and Bnb Chains .</p>
        <div className="speed-bar">
          <div className="bar-fill" style={{width: '95%'}}></div>
        </div>
      </div>
    </div>

    

  </div>
</section>




      
      
      
    
<section className="roadmap-section">




        <header className="roadmap-header">
          
          <h2 style={{color:"whitesmoke"}}>Project Roadmap</h2>
          
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
              <h1>{item.title}</h1>
              <h3>{item.desc}</h3>
            </div>
          ))}
        </div>

</section>
      
      
      
      




      </main>
    </div>
  );
}