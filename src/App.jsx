import React from 'react';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <header className="hero-header">
        <div style={{ zIndex: 5, position: 'relative' }}>
          <h1 className="hero-title">SHUBHAM'S ART</h1>
          <p className="hero-subtitle">
            "Art enables us to find ourselves and lose ourselves at the same time."
          </p>
          <div style={{ marginTop: '2rem' }}>
            <p style={{ fontSize: '0.9rem', letterSpacing: '2px' }}>MY JOURNEY THROUGH ART</p>
          </div>
        </div>
      </header>

      <Gallery />

      <footer style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        background: 'var(--indigo)',
        color: '#fff'
      }}>
        <p>© 2026 Shubham's Art Gallery.</p>
      </footer>
    </div>
  );
}

export default App;
