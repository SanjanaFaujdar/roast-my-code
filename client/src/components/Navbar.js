import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const navbarStyle = {
    backgroundColor: '#333',
    padding: '1rem',
    marginBottom: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const navLeftStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const navLinkStyle = {
    color: '#fff',
    textDecoration: 'none',
    marginRight: '2rem',
    fontSize: '1.1rem',
    fontWeight: 'bold',
  };

  const titleStyle = {
    color: '#fff',
    fontSize: '1.5rem',
    marginRight: '2rem',
  };

  const rightStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const userNameStyle = {
    color: '#fff',
    marginRight: '1rem',
    fontWeight: '600',
  };

  const buttonStyle = {
    background: 'transparent',
    border: '1px solid #fff',
    color: '#fff',
    padding: '0.4rem 0.8rem',
    cursor: 'pointer',
    borderRadius: '4px',
    fontWeight: '600',
  };

  const handleLogout = () => {
    if (logout) logout();
    navigate('/login');
  };

  return (
    <nav style={navbarStyle}>
      <div style={navLeftStyle}>
        <div style={titleStyle}>Roast My Code</div>
        <Link to="/" style={navLinkStyle}>
          Home
        </Link>
        <Link to="/wall" style={navLinkStyle}>
          Wall of Shame
        </Link>
      </div>

      <div style={rightStyle}>
        {user ? (
          <>
            <div style={userNameStyle}>{user.name || user.username || 'User'}</div>
            <button style={buttonStyle} onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={navLinkStyle}>
              Login
            </Link>
            <Link to="/register" style={navLinkStyle}>
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
