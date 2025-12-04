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
        gap: '64px',
        paddingTop: '96px',
        paddingBottom: '64px',
        width: '100%',
        position: 'relative',
      }}
    >
      {/* Heading */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          overflowWrap: 'break-word',
        }}
      >
        <h2
          style={{
            fontFamily: '"General Sans", sans-serif',
            fontSize: '36px',
            lineHeight: '43.2px',
            color: 'rgb(255, 255, 255)',
            textAlign: 'center',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
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
          gap: '10px',
          maxWidth: '1000px',
          width: '100%',
          paddingLeft: '20px',
          paddingRight: '20px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* FAQ Items */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
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
                  style={{
                    backgroundColor: 'rgb(5, 14, 21)',
                    borderRadius: '10px',
                    padding: '20px 40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: '24px',
                    width: '100%',
                    cursor: 'pointer',
                    userSelect: 'none',
                    border: 'none',
                    minHeight: '60px',
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
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        fontWeight: 600,
                        lineHeight: '24px',
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
          gap: '10px',
          position: 'relative',
        }}
      >
        {/* Main Button */}
        <a
          rel="noopener"
          href="/checkout"
          style={{
            backgroundImage: 'linear-gradient(95deg, rgb(255, 169, 48) 0%, rgb(255, 171, 35) 51.2387%, rgb(213, 170, 18) 113.52%)',
            borderRadius: '10px',
            padding: '20px 34px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            willChange: 'transform',
            zIndex: 1,
          }}
          className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <p
            style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: '24px',
              fontWeight: 700,
              letterSpacing: '1.2px',
              lineHeight: '24px',
              textAlign: 'center',
              textTransform: 'uppercase',
              whiteSpace: 'pre',
              margin: 0,
            }}
            className="text-black"
          >
            JOIN THE REAL WORLD
          </p>
        </a>

        {/* Social Proof Section */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            height: '32px',
            position: 'relative',
          }}
        >
          {/* User Avatars */}
          <div
            style={{
              position: 'relative',
              width: '100px',
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
            style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: '18px',
              lineHeight: '20px',
              color: 'rgba(255, 255, 255, 0.6)',
              whiteSpace: 'pre',
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
