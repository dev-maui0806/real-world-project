'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';

const NAV_ITEMS = [
  { label: 'Features', href: '/#features-timeline' },
  { label: 'Interviews', href: '/#interviews' },
  { label: 'Student Wins', href: '/#student-wins' },
  { label: 'Copywriting', href: 'https://therealworld.net/#copywriting' },
  { label: 'Freelancing', href: 'https://therealworld.net/#freelancing' },
  { label: 'Ecommerce', href: 'https://therealworld.net/#ecommerce' },
  { label: 'Stocks', href: 'https://therealworld.net/#stocks' },
  { label: 'Contact Us', href: 'https://therealworld.net/#contact' },
  { label: 'Business & Finance', href: 'https://therealworld.net/#business' },
  { label: 'Content Creation + AI', href: 'https://therealworld.net/#ai' },
  { label: 'Courses', href: 'https://therealworld.net/#courses' },

  { label: 'About Andrew', href: '/about-andrew' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const desktopItems = useMemo(() => NAV_ITEMS.slice(0, 3), []);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setIsCoursesOpen(false);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsCoursesOpen(false);
  };

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#050e15]/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 lg:h-24 lg:px-6">
        <Link href="https://therealworld.net/" className="flex items-center gap-3 text-white">
          <span className="text-lg font-semibold tracking-wide">The Real World</span>
          <img
            src="https://framerusercontent.com/images/lVFqGPfJm0f8Q6XqNcyZnWvQUe8.webp?width=256&height=256"
            alt="The Real World Logo"
            className="h-8 w-8 rounded-full object-cover"
            loading="lazy"
            width={32}
            height={32}
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-6 text-sm text-white lg:flex">
          {desktopItems.map((item) => {
            const isInternalLink = item.href.startsWith('/') || item.href.startsWith('#') || item.href.startsWith('/#');
            return (
              <a
                key={item.label}
                href={item.href}
                className="font-semibold tracking-wide transition hover:text-white"
                {...(!isInternalLink && { target: '_blank', rel: 'noreferrer' })}
              >
                {item.label}
              </a>
            );
          })}

          <div className="relative">
            <button
              onClick={() => setIsCoursesOpen((prev) => !prev)}
              className="flex items-center gap-2 font-semibold text-white"
            >
              Courses
              <svg
                className={`h-4 w-4 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            {isCoursesOpen && (
              <div
                style={{
                  position: 'absolute',
                  right: '-300px',
                  marginTop: '10px',
                  backgroundColor: 'rgb(5, 14, 21)',
                  borderRadius: '16px',
                  boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 8px 0px',
                  padding: '12px',
                  minWidth: '650px',
                  zIndex: 50,
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '12px',
                  }}
                >
                  <Link
                    href="/copywriting"
                    style={{
                      backgroundColor: 'rgb(5, 14, 21)',
                      borderRadius: '8px',
                      padding: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      textDecoration: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <p
                      style={{
                        color: 'rgb(255, 255, 255)',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        fontWeight: 500,
                        margin: 0,
                      }}
                    >
                      Copywriting
                    </p>
                  </Link>

                  <Link
                    href="/stock"
                    style={{
                      backgroundColor: 'rgb(5, 14, 21)',
                      borderRadius: '8px',
                      padding: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      textDecoration: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <p
                      style={{
                        color: 'rgb(255, 255, 255)',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        fontWeight: 500,
                        margin: 0,
                      }}
                    >
                      Stocks
                    </p>
                  </Link>

                  <Link
                    href="/freelancing"
                    style={{
                      backgroundColor: 'rgb(5, 14, 21)',
                      borderRadius: '8px',
                      padding: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      textDecoration: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <p
                      style={{
                        color: 'rgb(255, 255, 255)',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        fontWeight: 500,
                        margin: 0,
                      }}
                    >
                      Freelancing
                    </p>
                  </Link>

                  <Link
                    href="/finance"
                    style={{
                      backgroundColor: 'rgb(5, 14, 21)',
                      borderRadius: '8px',
                      padding: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      textDecoration: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <p
                      style={{
                        color: 'rgb(255, 255, 255)',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        fontWeight: 500,
                        margin: 0,
                      }}
                    >
                      Business & Finance
                    </p>
                  </Link>

                  <Link
                    href="/ecommerce"
                    style={{
                      backgroundColor: 'rgb(5, 14, 21)',
                      borderRadius: '8px',
                      padding: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      textDecoration: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <p
                      style={{
                        color: 'rgb(255, 255, 255)',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        fontWeight: 500,
                        margin: 0,
                      }}
                    >
                      E-commerce
                    </p>
                  </Link>

                  <Link
                    href="/content-creation"
                    style={{
                      backgroundColor: 'rgb(5, 14, 21)',
                      borderRadius: '8px',
                      padding: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      textDecoration: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <p
                      style={{
                        color: 'rgb(255, 255, 255)',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        fontWeight: 500,
                        margin: 0,
                      }}
                    >
                      Content Creation + AI
                    </p>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about-andrew"
            className="tracking-wide text-white font-semibold transition hover:text-white/80"
          >
            About Andrew
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className="rounded-lg border border-[#ffa545] px-4 py-2 text-sm font-semibold text-[#ffa545] transition hover:bg-[#ffa545]/10"
          >
            Log in
          </Link>
          <Link
            href="/checkout"
            className="rounded-lg bg-[#ffa545] px-4 py-2 text-sm font-semibold text-[#050e15] transition hover:bg-[#ff9b38]"
          >
            Join Now
          </Link>
        </div>

        <div className="relative lg:hidden" ref={mobileMenuRef}>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white"
            onClick={handleToggleMenu}
            aria-label="Open menu"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
            </div>
          </button>

          {isMobileMenuOpen && (
            <div className="absolute right-0 top-14 z-50 w-64 rounded-2xl border border-white/10 bg-[#050e15] p-5 text-white shadow-2xl">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-base px-2 font-semibold">Menu</span>
                <button
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="rounded-full bg-white/10 p-1.5"
                >
                  ✕
                </button>
              </div>
              <div className="flex flex-col gap-3">
                {NAV_ITEMS.map((item) => {
                  const isInternalLink = item.href.startsWith('/') || item.href.startsWith('#') || item.href.startsWith('/#');
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-sm px-2 py-2 font-medium text-white/80 transition hover:text-white"
                      {...(!isInternalLink && { target: '_blank', rel: 'noreferrer' })}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/login"
                  className="rounded-lg border border-[#ffa545] px-4 py-2 text-center text-sm font-semibold text-[#ffa545]"
                  onClick={closeMenu}
                >
                  Log in
                </Link>
                <Link
                  href="/checkout"
                  className="rounded-lg bg-[#ffa545] px-4 py-2 text-center text-sm font-semibold text-[#050e15]"
                  onClick={closeMenu}
                >
                  Join Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
