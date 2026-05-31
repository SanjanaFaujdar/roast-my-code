import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SnippetPage() {
  const { slug } = useParams();
  const [snippet, setSnippet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSnippet = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/snippet/${slug}`);
        setSnippet(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Snippet not found');
      } finally {
        setLoading(false);
      }
    };

    fetchSnippet();
  }, [slug]);

  const containerStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '2rem',
  };

  const titleStyle = {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#333',
  };

  const codeBlockStyle = {
    backgroundColor: '#282c34',
    color: '#abb2bf',
    padding: '1.5rem',
    borderRadius: '8px',
    overflowX: 'auto',
    fontFamily: 'monospace',
    fontSize: '1rem',
    lineHeight: '1.5',
    marginBottom: '2rem',
  };

  const roastStyle = {
    backgroundColor: '#fff3cd',
    border: '1px solid #ffc107',
    borderRadius: '4px',
    padding: '1.5rem',
    marginTop: '2rem',
  };

  const metaStyle = {
    color: '#666',
    fontSize: '0.9rem',
    marginBottom: '1rem',
  };

  if (loading) return <div style={containerStyle}>Loading...</div>;
  if (error) return <div style={{ ...containerStyle, color: 'red' }}>{error}</div>;
  if (!snippet) return <div style={containerStyle}>Snippet not found</div>;

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>{snippet.language} - {snippet.slug}</h1>
      <div style={metaStyle}>
        Created: {new Date(snippet.createdAt).toLocaleString()} | Public: {snippet.isPublic ? 'Yes' : 'No'}
      </div>

      <h2 style={{ marginTop: '1.5rem' }}>Code:</h2>
      <pre style={codeBlockStyle}>{snippet.code}</pre>

      {snippet.roast && (
        <div style={roastStyle}>
          <h2>Roast:</h2>
          <p>{snippet.roast}</p>
        </div>
      )}
    </div>
  );
}

export default SnippetPage;
