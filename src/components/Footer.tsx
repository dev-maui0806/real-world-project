'use client';

import { CSSProperties } from 'react';

export default function Footer() {
  const footerLinkStyle = {
    color: 'rgba(255, 255, 255, 0.77)',
    fontFamily: 'Inter, sans-serif',
    fontSize: '18px',
    lineHeight: '18px',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  const sectionTitleStyle = {
    color: 'rgb(255, 255, 255)',
    fontFamily: 'Inter, sans-serif',
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '28.8px',
    margin: 0,
    whiteSpace: 'pre',
  };

  const legalLinkStyle = {
    color: 'rgb(255, 255, 255)',
    fontFamily: 'Inter, sans-serif',
    fontSize: '18px',
    lineHeight: '18px',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  const supportTextStyle = {
    color: 'rgba(255, 255, 255, 0.77)',
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '16px',
    margin: 0,
    whiteSpace: 'pre',
  };

  const disclaimerStyle: CSSProperties = {
    color: 'rgb(119, 119, 119)',
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    lineHeight: '20px',
    textAlign: 'center',
    margin: 0,
  };

  return (
    <footer
      style={{
        backgroundColor: 'rgb(6, 14, 21)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '48px',
          width: '100%',
          paddingBottom: '64px',
          position: 'relative',
        }}
      >
        {/* Logo Section */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
            width: '100%',
            opacity: 0.6,
            position: 'relative',
          }}
        >
          <div style={{ position: 'relative', width: '123px', aspectRatio: '1/1' }}>
            <img
              decoding="auto"
              loading="lazy"
              width="123"
              height="123"
              alt=""
              src="https://framerusercontent.com/images/Tttp7tCHSlFL4GgIF783y9wn7vQ.webp?width=123&height=123"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Links Section */}
        <div
          style={{
            display: 'flex',
            gap: '64px',
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: '100%',
            position: 'relative',
            flexWrap: 'wrap',
            paddingLeft: '16px',
            paddingRight: '16px',
          }}
        >
          {/* Courses Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'flex-start' }}>
            <p style={sectionTitleStyle}>Courses</p>
            <div style={{ display: 'flex', gap: '32px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <p style={{ ...footerLinkStyle, margin: 0 }}>
                  <a href="https://therealworld.net/the-real-world-copywriting" style={footerLinkStyle}>
                    Copywriting
                  </a>
                </p>
                <p style={{ ...footerLinkStyle, margin: 0 }}>
                  <a href="https://therealworld.net/the-real-world-freelancing" style={footerLinkStyle}>
                    Freelancing
                  </a>
                </p>
                <p style={{ ...footerLinkStyle, margin: 0 }}>
                  <a href="https://therealworld.net/the-real-world-ecommerce" style={footerLinkStyle}>
                    E-commerce
                  </a>
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <p style={{ ...footerLinkStyle, margin: 0 }}>
                  <a href="https://therealworld.net/the-real-world-stocks" style={footerLinkStyle}>
                    Stocks
                  </a>
                </p>
                <p style={{ ...footerLinkStyle, margin: 0 }}>
                  <a href="https://therealworld.net/the-real-world-finance" style={footerLinkStyle}>
                    Business & Finance
                  </a>
                </p>
                <p style={{ ...footerLinkStyle, margin: 0 }}>
                  <a href="https://therealworld.net/the-real-world-content-creation" style={footerLinkStyle}>
                    Content Creation & AI
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* The Real World Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'flex-start' }}>
            <p style={sectionTitleStyle}>The Real World</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <p style={{ ...footerLinkStyle, margin: 0 }}>
                <a href="https://therealworld.net/newsletter" style={footerLinkStyle}>
                  Newsletter
                </a>
              </p>
              <p style={{ ...footerLinkStyle, margin: 0 }}>
                <a href="https://therealworld.net/contact-us" style={footerLinkStyle}>
                  Contact Us
                </a>
              </p>
              <p style={{ ...footerLinkStyle, margin: 0 }}>
                <a href="https://therealworld.net/about-andrew-tate" style={footerLinkStyle}>
                  About Andrew Tate
                </a>
              </p>
              <p style={{ ...footerLinkStyle, margin: 0 }}>
                <a href="https://therealworld.net/about-tristan-tate" style={footerLinkStyle}>
                  About Tristan Tate
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Legal and Support Links */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <p style={{ ...legalLinkStyle, margin: 0 }}>
              <a href="https://therealworld.net/login" style={legalLinkStyle}>
                Log In
              </a>
            </p>
            <p style={{ ...legalLinkStyle, margin: 0 }}>
              <a href="https://therealworld.net/terms-and-conditions" style={legalLinkStyle}>
                Terms & Conditions
              </a>
            </p>
            <p style={{ ...legalLinkStyle, margin: 0 }}>
              <a href="https://therealworld.net/privacy-policy" style={legalLinkStyle}>
                Privacy Policy
              </a>
            </p>
            <p style={{ ...legalLinkStyle, margin: 0 }}>
              <a href="https://therealworld.net/contact-us" style={legalLinkStyle}>
                Contact Us
              </a>
            </p>
            <p style={supportTextStyle}>Support: support@therealworld.net</p>
          </div>

          {/* Telegram Link */}
          <a
            target="_blank"
            rel="noopener"
            href="https://t.me/TheRealWorldAG"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              height: '48px',
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            <div style={{ position: 'relative', width: '32px', height: '32px' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                viewBox="0 0 24 24"
                style={{
                  fill: 'rgb(255, 255, 255)',
                  width: '100%',
                  height: '100%',
                  display: 'inline-block',
                  cursor: 'pointer',
                }}
              >
                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
              </svg>
            </div>
          </a>
        </div>

        {/* Disclaimer Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', alignItems: 'center', maxWidth: '725px', paddingLeft: '16px', paddingRight: '16px' }}>
          <p style={disclaimerStyle}>
            Everything taught within The Real World is for education purposes only. It is up to each student to implement and do the work.
          </p>
          <br />
          <p style={disclaimerStyle}>
            The Real World team doesn't guarantee any profits or financial success.
          </p>
        </div>
      </div>
    </footer>
  );
}
