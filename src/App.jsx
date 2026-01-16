import React from 'react';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <header style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: 'linear-gradient(to bottom, #FDFBF7, #f0e6d2)',
        position: 'relative',
        overflow: 'hidden'
      }}>

        <div style={{ zIndex: 5, position: 'relative' }}>
          <h1 style={{ fontSize: '5rem', marginBottom: '1rem', color: 'var(--saffron)' }}>SHUBHAM'S ART</h1>
          <p style={{ fontSize: '1.5rem', maxWidth: '600px', fontStyle: 'italic', color: 'var(--indigo)', margin: '0 auto' }}>
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
