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
          gap: 'clamp(32px, 8vw, 48px)',
          width: '100%',
          paddingBottom: 'clamp(48px, 10vw, 64px)',
          paddingTop: 'clamp(32px, 8vw, 48px)',
          position: 'relative',
        }}
      >
        {/* Logo Section */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(20px, 6vw, 32px)',
            width: '100%',
            opacity: 0.6,
            position: 'relative',
          }}
        >
          <div style={{ position: 'relative', width: 'clamp(80px, 20vw, 123px)', aspectRatio: '1/1' }}>
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
            gap: 'clamp(32px, 8vw, 64px)',
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: '100%',
            position: 'relative',
            flexWrap: 'wrap',
            paddingLeft: 'clamp(16px, 4vw, 32px)',
            paddingRight: 'clamp(16px, 4vw, 32px)',
          }}
        >
          {/* Courses Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(24px, 6vw, 40px)', alignItems: 'flex-start' }}>
            <p style={{ ...sectionTitleStyle, fontSize: 'clamp(18px, 4vw, 24px)' }}>Courses</p>
            <div style={{ display: 'flex', gap: 'clamp(20px, 4vw, 32px)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 4vw, 24px)' }}>
                <p style={{ ...footerLinkStyle, margin: 0, fontSize: 'clamp(14px, 3vw, 18px)' }}>
                  <a href="https://therealworld.net/the-real-world-copywriting" style={{ ...footerLinkStyle, fontSize: 'clamp(14px, 3vw, 18px)' }}>
                    Copywriting
                  </a>
                </p>
                <p style={{ ...footerLinkStyle, margin: 0, fontSize: 'clamp(14px, 3vw, 18px)' }}>
                  <a href="https://therealworld.net/the-real-world-freelancing" style={{ ...footerLinkStyle, fontSize: 'clamp(14px, 3vw, 18px)' }}>
                    Freelancing
                  </a>
                </p>
                <p style={{ ...footerLinkStyle, margin: 0, fontSize: 'clamp(14px, 3vw, 18px)' }}>
                  <a href="https://therealworld.net/the-real-world-ecommerce" style={{ ...footerLinkStyle, fontSize: 'clamp(14px, 3vw, 18px)' }}>
                    E-commerce
                  </a>
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 4vw, 24px)' }}>
                <p style={{ ...footerLinkStyle, margin: 0, fontSize: 'clamp(14px, 3vw, 18px)' }}>
                  <a href="https://therealworld.net/the-real-world-stocks" style={{ ...footerLinkStyle, fontSize: 'clamp(14px, 3vw, 18px)' }}>
                    Stocks
                  </a>
                </p>
                <p style={{ ...footerLinkStyle, margin: 0, fontSize: 'clamp(14px, 3vw, 18px)' }}>
                  <a href="https://therealworld.net/the-real-world-finance" style={{ ...footerLinkStyle, fontSize: 'clamp(14px, 3vw, 18px)' }}>
                    Business & Finance
                  </a>
                </p>
                <p style={{ ...footerLinkStyle, margin: 0, fontSize: 'clamp(14px, 3vw, 18px)' }}>
                  <a href="https://therealworld.net/the-real-world-content-creation" style={{ ...footerLinkStyle, fontSize: 'clamp(14px, 3vw, 18px)' }}>
                    Content Creation & AI
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* The Real World Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(20px, 5vw, 32px)', alignItems: 'flex-start' }}>
            <p style={{ ...sectionTitleStyle, fontSize: 'clamp(18px, 4vw, 24px)' }}>The Real World</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 4vw, 24px)' }}>
              <p style={{ ...footerLinkStyle, margin: 0, fontSize: 'clamp(14px, 3vw, 18px)' }}>
                <a href="https://therealworld.net/newsletter" style={{ ...footerLinkStyle, fontSize: 'clamp(14px, 3vw, 18px)' }}>
                  Newsletter
                </a>
              </p>
              <p style={{ ...footerLinkStyle, margin: 0, fontSize: 'clamp(14px, 3vw, 18px)' }}>
                <a href="https://therealworld.net/contact-us" style={{ ...footerLinkStyle, fontSize: 'clamp(14px, 3vw, 18px)' }}>
                  Contact Us
                </a>
              </p>
              <p style={{ ...footerLinkStyle, margin: 0, fontSize: 'clamp(14px, 3vw, 18px)' }}>
                <a href="https://therealworld.net/about-andrew-tate" style={{ ...footerLinkStyle, fontSize: 'clamp(14px, 3vw, 18px)' }}>
                  About Andrew Tate
                </a>
              </p>
              <p style={{ ...footerLinkStyle, margin: 0, fontSize: 'clamp(14px, 3vw, 18px)' }}>
                <a href="https://therealworld.net/about-tristan-tate" style={{ ...footerLinkStyle, fontSize: 'clamp(14px, 3vw, 18px)' }}>
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
            gap: 'clamp(16px, 4vw, 24px)',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', gap: 'clamp(12px, 3vw, 24px)', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <p style={{ ...legalLinkStyle, margin: 0, fontSize: 'clamp(13px, 2.5vw, 18px)' }}>
              <a href="https://therealworld.net/login" style={{ ...legalLinkStyle, fontSize: 'clamp(13px, 2.5vw, 18px)' }}>
                Log In
              </a>
            </p>
            <p style={{ ...legalLinkStyle, margin: 0, fontSize: 'clamp(13px, 2.5vw, 18px)' }}>
              <a href="https://therealworld.net/terms-and-conditions" style={{ ...legalLinkStyle, fontSize: 'clamp(13px, 2.5vw, 18px)' }}>
                Terms & Conditions
              </a>
            </p>
            <p style={{ ...legalLinkStyle, margin: 0, fontSize: 'clamp(13px, 2.5vw, 18px)' }}>
              <a href="https://therealworld.net/privacy-policy" style={{ ...legalLinkStyle, fontSize: 'clamp(13px, 2.5vw, 18px)' }}>
                Privacy Policy
              </a>
            </p>
            <p style={{ ...legalLinkStyle, margin: 0, fontSize: 'clamp(13px, 2.5vw, 18px)' }}>
              <a href="https://therealworld.net/contact-us" style={{ ...legalLinkStyle, fontSize: 'clamp(13px, 2.5vw, 18px)' }}>
                Contact Us
              </a>
            </p>
            <p style={{ ...supportTextStyle, fontSize: 'clamp(13px, 2.5vw, 16px)' }}>Support: support@therealworld.net</p>
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
              height: 'clamp(40px, 8vw, 48px)',
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            <div style={{ position: 'relative', width: 'clamp(24px, 5vw, 32px)', height: 'clamp(24px, 5vw, 32px)' }}>
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', alignItems: 'center', maxWidth: '725px', paddingLeft: 'clamp(16px, 4vw, 32px)', paddingRight: 'clamp(16px, 4vw, 32px)' }}>
          <p style={{ ...disclaimerStyle, fontSize: 'clamp(13px, 2.5vw, 16px)' }}>
            Everything taught within The Real World is for education purposes only. It is up to each student to implement and do the work.
          </p>
          <br />
          <p style={{ ...disclaimerStyle, fontSize: 'clamp(13px, 2.5vw, 16px)' }}>
            The Real World team doesn't guarantee any profits or financial success.
          </p>
        </div>
      </div>
    </footer>
  );
}
