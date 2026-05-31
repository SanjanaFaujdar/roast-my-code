import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function WallPage() {
  const [snippets, setSnippets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/wall');
        setSnippets(response.data);
      } catch (err) {
        setError('Failed to load snippets');
      } finally {
        setLoading(false);
      }
    };

    fetchSnippets();
  }, []);

  const pageStyle = {
    backgroundColor: '#0d1117',
    minHeight: '100vh',
    fontFamily: 'Inter, -apple-system, sans-serif',
    color: '#e6edf3',
    paddingBottom: '4rem',
  };

  const heroStyle = {
    textAlign: 'center',
    paddingTop: '3rem',
    paddingBottom: '2rem',
    borderBottom: '1px solid #30363d',
    marginBottom: '3rem',
  };

  const titleStyle = {
    fontSize: '3.5rem',
    fontWeight: '800',
    marginBottom: '0.5rem',
    backgroundImage: 'linear-gradient(135deg, #ff6b6b, #ff8c42)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '-0.5px',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem',
    marginTop: '2rem',
  };

  const cardStyle = {
    backgroundColor: '#161b22',
    border: '1px solid #30363d',
    borderRadius: '12px',
    padding: '1.5rem',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
  };

  const cardHoverStyle = {
    ...cardStyle,
    borderColor: '#ff8c42',
    boxShadow: '0 0 20px rgba(255, 140, 66, 0.1)',
  };

  const languageBadgeStyle = {
    display: 'inline-block',
    backgroundColor: '#ff6b6b',
    color: '#fff',
    padding: '0.4rem 0.8rem',
    borderRadius: '6px',
    fontSize: '0.85rem',
    fontWeight: '600',
    marginBottom: '1rem',
    width: 'fit-content',
  };

  const codeBlockStyle = {
    backgroundColor: '#0d1117',
    border: '1px solid #30363d',
    borderRadius: '8px',
    padding: '1rem',
    overflowX: 'auto',
    fontFamily: 'monospace',
    fontSize: '0.85rem',
    marginBottom: '1rem',
    color: '#79c0ff',
    lineHeight: '1.5',
  };

  const roastTextStyle = {
    color: '#8b949e',
    fontSize: '0.95rem',
    marginBottom: '1.5rem',
    flex: 1,
  };

  const buttonStyle = {
    display: 'inline-block',
    backgroundColor: '#ff6b6b',
    color: '#fff',
    padding: '0.6rem 1.2rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.9rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#ff8c42',
    transform: 'translateY(-2px)',
  };

  const emptyStateStyle = {
    textAlign: 'center',
    padding: '4rem 2rem',
    color: '#8b949e',
  };

  const emptyStateIconStyle = {
    fontSize: '3rem',
    marginBottom: '1rem',
  };

  const spinnerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '400px',
  };

  const spinnerInnerStyle = {
    border: '4px solid #30363d',
    borderTop: '4px solid #ff6b6b',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 1s linear infinite',
  };

  // Extract first 5 lines of code
  const getFirst5Lines = (code) => {
    return code.split('\n').slice(0, 5).join('\n');
  };

  const [hoveredId, setHoveredId] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  // Add keyframe animation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  if (loading) {
    return (
      <div style={pageStyle}>
        <div style={heroStyle}>
          <div style={containerStyle}>
            <h1 style={titleStyle}>🔥 Wall of Shame</h1>
          </div>
        </div>
        <div style={containerStyle}>
          <div style={spinnerStyle}>
            <div style={spinnerInnerStyle}></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={pageStyle}>
        <div style={heroStyle}>
          <div style={containerStyle}>
            <h1 style={titleStyle}>🔥 Wall of Shame</h1>
          </div>
        </div>
        <div style={containerStyle}>
          <div style={emptyStateStyle}>
            <p style={{ color: '#f85149' }}>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <div style={heroStyle}>
        <div style={containerStyle}>
          <h1 style={titleStyle}>🔥 Wall of Shame</h1>
          <p style={{ color: '#8b949e', fontSize: '1.1rem' }}>
            Public roasts from our community
          </p>
        </div>
      </div>

      <div style={containerStyle}>
        {snippets.length === 0 ? (
          <div style={emptyStateStyle}>
            <div style={emptyStateIconStyle}>📭</div>
            <h2>No public roasts yet</h2>
            <p style={{ marginTop: '0.5rem' }}>
              Be the first to share your code for a roast!
            </p>
          </div>
        ) : (
          <div style={gridStyle}>
            {snippets.map((snippet) => (
              <div
                key={snippet._id}
                style={hoveredId === snippet._id ? cardHoverStyle : cardStyle}
                onMouseEnter={() => setHoveredId(snippet._id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div style={languageBadgeStyle}>{snippet.language.toUpperCase()}</div>

                <div style={codeBlockStyle}>
                  <pre style={{ margin: 0 }}>
                    {getFirst5Lines(snippet.code)}
                    {snippet.code.split('\n').length > 5 && '\n...'}
                  </pre>
                </div>

                <div style={roastTextStyle}>{snippet.roast}</div>

                <Link
                  to={`/snippet/${snippet.slug}`}
                  style={hoveredButton === snippet._id ? buttonHoverStyle : buttonStyle}
                  onMouseEnter={() => setHoveredButton(snippet._id)}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  View Full Roast →
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default WallPage;
