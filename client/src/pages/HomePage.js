import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import axios from 'axios';

function HomePage() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);
  const [isPublic, setIsPublic] = useState(false);

  useEffect(() => {
    // Import Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const handleSubmit = async () => {
    if (!code.trim()) {
      setError('Please enter some code');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await axios.post('http://localhost:5000/api/roast', {
        code,
        language,
        isPublic,
      });

      console.log(response.data);
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to submit code');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    const shareLink = `http://localhost:3000/snippet/${result.slug}`;
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

  const subtitleStyle = {
    fontSize: '1.2rem',
    color: '#8b949e',
    fontWeight: '400',
    marginBottom: '0.5rem',
  };

  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '0 2rem',
  };

  const sectionStyle = {
    backgroundColor: '#161b22',
    borderRadius: '12px',
    padding: '2rem',
    border: '1px solid #30363d',
    marginBottom: '2rem',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.75rem',
    fontSize: '0.95rem',
    fontWeight: '600',
    color: '#c9d1d9',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  const selectStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#0d1117',
    color: '#e6edf3',
    border: '1px solid #30363d',
    borderRadius: '8px',
    fontFamily: 'Inter, monospace',
    cursor: 'pointer',
    transition: 'border-color 0.3s ease',
    marginBottom: '2rem',
  };

  const buttonStyle = {
    width: '100%',
    padding: '1rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '2rem',
    backgroundImage: 'linear-gradient(135deg, #ff6b6b 0%, #ff8c42 100%)',
    boxShadow: '0 8px 24px rgba(255, 107, 107, 0.3)',
    transition: 'all 0.3s ease',
    fontFamily: 'Inter, sans-serif',
    disabled: 'opacity 0.5 cursor-not-allowed',
  };

  const checkboxContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginTop: '1.25rem',
    marginBottom: '0.25rem',
  };

  const checkboxLabelStyle = {
    color: '#c9d1d9',
    fontWeight: '600',
    fontSize: '0.95rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  const checkboxInputStyle = {
    width: '18px',
    height: '18px',
    backgroundColor: '#0d1117',
    border: '1px solid #30363d',
    borderRadius: '4px',
    cursor: 'pointer',
    accentColor: '#ff6b6b',
  };

  const errorStyle = {
    backgroundColor: '#3d2626',
    border: '1px solid #da3633',
    borderRadius: '8px',
    padding: '1rem',
    marginTop: '1.5rem',
    color: '#f85149',
    fontWeight: '500',
  };

  const resultStyle = {
    backgroundColor: '#0d2818',
    border: '1px solid #238636',
    borderRadius: '12px',
    padding: '2rem',
    marginTop: '2rem',
  };

  const resultTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#3fb950',
    marginBottom: '1.5rem',
  };

  const resultMetaStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    marginBottom: '1.5rem',
  };

  const metaCardStyle = {
    backgroundColor: '#161b22',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #30363d',
  };

  const metaLabelStyle = {
    fontSize: '0.85rem',
    color: '#8b949e',
    marginBottom: '0.5rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    fontWeight: '600',
  };

  const metaValueStyle = {
    fontSize: '1.1rem',
    color: '#e6edf3',
    fontWeight: '600',
    fontFamily: 'monospace',
  };

  const shareSectionStyle = {
    marginTop: '2rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid #30363d',
  };

  const roastCardStyle = {
    backgroundColor: '#111827',
    borderRadius: '12px',
    padding: '1.75rem',
    border: '1px solid #374151',
    marginTop: '1.75rem',
  };

  const roastTitleStyle = {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '0.75rem',
  };

  const roastTextStyle = {
    color: '#f8fafc',
    lineHeight: '1.7',
    whiteSpace: 'pre-wrap',
    fontSize: '1rem',
  };

  const shareTitleStyle = {
    fontSize: '1rem',
    fontWeight: '700',
    color: '#c9d1d9',
    marginBottom: '1rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  const linkContainerStyle = {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  };

  const linkInputStyle = {
    flex: 1,
    padding: '0.75rem 1rem',
    backgroundColor: '#0d1117',
    border: '1px solid #30363d',
    borderRadius: '8px',
    color: '#79c0ff',
    fontFamily: 'monospace',
    fontSize: '0.9rem',
    wordBreak: 'break-all',
  };

  const copyButtonStyle = {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#238636',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.95rem',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
    fontFamily: 'Inter, sans-serif',
  };

  const loadingStyle = {
    textAlign: 'center',
    color: '#8b949e',
    fontSize: '1.1rem',
    fontWeight: '500',
  };

  return (
    <div style={pageStyle}>
      <div style={heroStyle}>
        <div style={containerStyle}>
          <h1 style={titleStyle}>🔥 Roast My Code</h1>
          <p style={subtitleStyle}>Paste your code. Get brutally honest AI feedback.</p>
        </div>
      </div>

      <div style={containerStyle}>
        <div style={sectionStyle}>
          <label style={labelStyle}>Programming Language</label>
          <select value={language} onChange={(e) => setLanguage(e.target.value)} style={selectStyle}>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
            <option value="csharp">C#</option>
            <option value="typescript">TypeScript</option>
            <option value="rust">Rust</option>
            <option value="go">Go</option>
          </select>

          <label style={labelStyle}>Your Code</label>
          <div style={{ border: '1px solid #30363d', borderRadius: '8px', overflow: 'hidden' }}>
            <Editor
              height="450px"
              language={language}
              value={code}
              onChange={(value) => setCode(value || '')}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                fontFamily: 'Fira Code, monospace',
                lineHeight: 24,
              }}
            />
          </div>

          <div style={checkboxContainerStyle}>
            <label style={checkboxLabelStyle}>
              <input
                type="checkbox"
                checked={isPublic}
                onChange={(e) => setIsPublic(e.target.checked)}
                style={checkboxInputStyle}
              />
              Add to Wall of Shame (make public)
            </label>
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={loading ? { ...buttonStyle, opacity: 0.6, cursor: 'not-allowed' } : buttonStyle}
            onMouseEnter={(e) => {
              if (!loading) e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
            }}
          >
            {loading ? '⚡ Roasting your code...' : '🔥 Get Roasted!'}
          </button>

          {error && <div style={errorStyle}>{error}</div>}
        </div>

        {result && (
          <div style={resultStyle}>
            <h2 style={resultTitleStyle}>✨ Your code has been roasted!</h2>

            <div style={resultMetaStyle}>
              <div style={metaCardStyle}>
                <div style={metaLabelStyle}>Slug</div>
                <div style={metaValueStyle}>{result.slug}</div>
              </div>
              <div style={metaCardStyle}>
                <div style={metaLabelStyle}>Language</div>
                <div style={metaValueStyle}>{result.language.toUpperCase()}</div>
              </div>
            </div>

            <div style={roastCardStyle}>
              <div style={roastTitleStyle}>🔥 The Roast:</div>
              <div style={roastTextStyle}>{result.roast || result.feedback || result.message}</div>
            </div>

            <div style={shareSectionStyle}>
              <div style={shareTitleStyle}>📤 Share Your Roast</div>
              <div style={linkContainerStyle}>
                <input
                  type="text"
                  readOnly
                  value={`http://localhost:3000/snippet/${result.slug}`}
                  style={linkInputStyle}
                />
                <button
                  onClick={copyToClipboard}
                  style={copyButtonStyle}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#2ea043';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#238636';
                  }}
                >
                  {copied ? '✓ Copied' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
