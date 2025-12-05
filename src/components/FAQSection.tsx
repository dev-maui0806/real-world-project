'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  id: string;
}

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const faqItems: FAQItem[] = [
    { question: 'Is the program suitable for women?', id: 'women' },
    { question: 'How quickly will I make my money back?', id: 'money-back' },
    { question: 'Do I need money once I\'m inside TRW?', id: 'money-needed' },
    { question: 'Does my age really not matter?', id: 'age' },
    { question: 'I know nothing about the skills you teach. Is it a problem?', id: 'no-skills' },
    { question: 'I live in X country. Is it a problem?', id: 'country' },
    { question: 'I don\'t have a lot of time available, can I still apply?', id: 'time' },
    { question: 'Still have questions?', id: 'more-questions' },
  ];

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      style={{
        backgroundColor: 'rgb(6, 14, 21)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        position: 'relative',
        paddingTop: 'clamp(2rem, 8vw, 6rem)',
        paddingBottom: 'clamp(2rem, 6vw, 4rem)',
        gap: 'clamp(2rem, 8vw, 4rem)',
      }}
    >
      <style>{`
        @media (max-width: 640px) {
          .faq-heading {
            font-size: 1.75rem;
            line-height: 2.1rem;
          }
          .faq-button {
            padding: 1rem 1rem;
            gap: 1rem;
            min-height: 50px;
          }
          .faq-question {
            font-size: 0.9375rem;
            line-height: 1.4rem;
          }
          .faq-cta-button {
            padding: 1rem 1.5rem;
            font-size: 1rem;
            letter-spacing: 0.4px;
          }
          .faq-social-proof {
            flex-direction: column;
            gap: 0.75rem;
            height: auto;
          }
          .faq-social-text {
            font-size: 0.875rem;
            line-height: 1.125rem;
          }
          .faq-avatar-container {
            width: 80px;
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .faq-heading {
            font-size: 2rem;
            line-height: 2.4rem;
          }
          .faq-button {
            padding: 1.25rem 1.75rem;
            gap: 1.25rem;
            min-height: 55px;
          }
          .faq-question {
            font-size: 1rem;
            line-height: 1.5rem;
          }
          .faq-cta-button {
            padding: 1.25rem 2rem;
            font-size: 1.125rem;
            letter-spacing: 0.6px;
          }
          .faq-social-proof {
            gap: 0.75rem;
          }
          .faq-social-text {
            font-size: 1rem;
            line-height: 1.125rem;
          }
          .faq-avatar-container {
            width: 85px;
          }
        }
        @media (min-width: 1025px) {
          .faq-heading {
            font-size: 2.25rem;
            line-height: 2.7rem;
          }
          .faq-button {
            padding: 1.25rem 2.5rem;
            gap: 1.5rem;
            min-height: 60px;
          }
          .faq-question {
            font-size: 1rem;
            line-height: 1.5rem;
          }
          .faq-cta-button {
            padding: 1.25rem 2.125rem;
            font-size: 1.5rem;
            letter-spacing: 0.75px;
          }
          .faq-social-proof {
            gap: 0.5rem;
          }
          .faq-social-text {
            font-size: 1.125rem;
            line-height: 1.25rem;
          }
          .faq-avatar-container {
            width: 100px;
          }
        }
      `}</style>

      {/* Heading */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          overflowWrap: 'break-word',
          paddingLeft: 'clamp(1rem, 5vw, 2rem)',
          paddingRight: 'clamp(1rem, 5vw, 2rem)',
        }}
      >
        <h2
          className="faq-heading"
          style={{
            fontFamily: '"General Sans", sans-serif',
            color: 'rgb(255, 255, 255)',
            textAlign: 'center',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
            margin: 0,
            fontWeight: 400,
          }}
        >
          FREQUENTLY ASKED{'\n'}
          <span style={{ fontWeight: 600 }}>QUESTIONS</span>
        </h2>
      </div>

      {/* FAQ Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.625rem',
          maxWidth: '1000px',
          width: '100%',
          paddingLeft: 'clamp(1rem, 5vw, 2rem)',
          paddingRight: 'clamp(1rem, 5vw, 2rem)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* FAQ Items */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {faqItems.map((item) => (
            <div
              key={item.id}
              style={{
                position: 'relative',
                width: '100%',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0,
                  width: '100%',
                }}
              >
                {/* Accordion Button */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="faq-button"
                  style={{
                    backgroundColor: 'rgb(5, 14, 21)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '100%',
                    cursor: 'pointer',
                    userSelect: 'none',
                    border: 'none',
                    transition: 'background-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgb(8, 18, 28)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgb(5, 14, 21)';
                  }}
                >
                  {/* Question Text */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      overflowWrap: 'break-word',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                      flex: 1,
                      cursor: 'pointer',
                    }}
                  >
                    <p
                      className="faq-question"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        color: 'rgb(255, 255, 255)',
                        margin: 0,
                        textAlign: 'left',
                        cursor: 'pointer',
                      }}
                    >
                      {item.question}
                    </p>
                  </div>

                  {/* Toggle Icon */}
                  <div
                    style={{
                      position: 'relative',
                      width: '16px',
                      height: '16px',
                      flexShrink: 0,
                      zIndex: 1,
                      cursor: 'pointer',
                    }}
                  >
                    {/* Horizontal Bar */}
                    <div
                      style={{
                        backgroundColor: 'rgb(255, 255, 255)',
                        borderRadius: '10px',
                        height: '2px',
                        width: '16px',
                        position: 'absolute',
                        top: 'calc(50% - 1px)',
                        left: 'calc(50% - 8px)',
                        cursor: 'pointer',
                        transition: 'opacity 0.2s',
                        opacity: expandedId === item.id ? 0 : 1,
                      }}
                    />

                    {/* Vertical Bar */}
                    <div
                      style={{
                        backgroundColor: 'rgb(255, 255, 255)',
                        borderRadius: '10px',
                        height: '16px',
                        width: '2px',
                        position: 'absolute',
                        top: 'calc(50% - 8px)',
                        left: 'calc(50% - 1px)',
                        cursor: 'pointer',
                        transition: 'opacity 0.2s',
                        opacity: expandedId === item.id ? 0 : 1,
                      }}
                    />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.625rem',
          position: 'relative',
          paddingLeft: 'clamp(1rem, 5vw, 2rem)',
          paddingRight: 'clamp(1rem, 5vw, 2rem)',
          width: '100%',
        }}
      >
        {/* Main Button */}
        <a
          rel="noopener"
          href="/checkout"
          style={{
            backgroundImage: 'linear-gradient(95deg, rgb(255, 169, 48) 0%, rgb(255, 171, 35) 51.2387%, rgb(213, 170, 18) 113.52%)',
            borderRadius: '10px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            willChange: 'transform',
            zIndex: 1,
          }}
          className="faq-cta-button hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <p
            style={{
              fontFamily: '"General Sans", sans-serif',
              fontWeight: 700,
              lineHeight: '1.5rem',
              textAlign: 'center',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              margin: 0,
            }}
            className="text-black"
          >
            JOIN THE REAL WORLD
          </p>
        </a>

        {/* Social Proof Section */}
        <div
          className="faq-social-proof"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* User Avatars */}
          <div
            className="faq-avatar-container"
            style={{
              position: 'relative',
              aspectRatio: '3.17143 / 1',
            }}
          >
            <img
              decoding="auto"
              loading="lazy"
              width="111"
              height="35"
              alt="Student avatars"
              src="https://framerusercontent.com/images/VTr2kDuZjyrrr32wNrJaUIadk.webp"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Text */}
          <p
            className="faq-social-text"
            style={{
              fontFamily: '"General Sans", sans-serif',
              color: 'rgba(255, 255, 255, 0.6)',
              whiteSpace: 'pre-wrap',
              margin: 0,
            }}
          >
            Join 113,000+ like-minded students
          </p>
        </div>
      </div>
    </section>
  );
}
