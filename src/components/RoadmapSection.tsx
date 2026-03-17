'use client';

import React from 'react';

export interface RoadmapStep {
  number: string;
  label: string;
  title: string;
  description: string;
}

interface RoadmapSectionProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  steps: RoadmapStep[];
}

export default function RoadmapSection({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  steps,
}: RoadmapSectionProps) {
  // Calculate dynamic transform values for decorative bars
  const barTransforms = [498, -145.25, -218, 277, -623];

  return (
    <section className="w-full bg-transparent flex flex-col items-center overflow-hidden" aria-label="Roadmap Section">
      <style>{`
        .roadmap-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          max-width: 1280px;
          width: 100%;
          background-color: rgba(0, 0, 0, 0);
          font-family: sans-serif;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: normal;
          gap: 20px;
          padding: 20px;
          padding-top: 96px;
          overflow-x: hidden;
          overflow-y: hidden;
          margin: 0 auto;
        }

        .roadmap-header {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .roadmap-title {
          font-family: Inter, sans-serif;
          font-size: 36px;
          font-weight: 600;
          letter-spacing: -0.5px;
          line-height: 54px;
          color: rgb(255, 255, 255);
          text-align: center;
          margin: 0;
        }

        .roadmap-description {
          font-family: Inter, sans-serif;
          font-size: 16px;
          line-height: 19.2px;
          color: rgba(255, 255, 255, 0.8);
          max-width: 700px;
          width: 100%;
          text-align: center;
          margin: 0;
        }

        .roadmap-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 10px;
          cursor: pointer;
          background: linear-gradient(0deg, rgb(255, 165, 69) 0%, rgb(255, 188, 71) 100%);
          box-shadow: rgba(201, 108, 8, 0.3) 0px 4px 50px 0px;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .roadmap-cta-button:hover {
          opacity: 0.9;
        }

        .roadmap-cta-text {
          color: rgb(19, 19, 19);
          font-family: Inter, sans-serif;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          line-height: 20.8px;
          margin: 0;
        }

        .roadmap-steps-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .roadmap-step {
          display: flex;
          align-content: flex-start;
          align-items: flex-start;
          gap: 48px;
          width: 100%;
          z-index: 1;
          overflow: hidden;
        }

        .roadmap-step-left-empty {
          display: flex;
          flex-basis: 0;
          flex-grow: 1;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
          max-width: 610px;
          min-height: 385px;
          padding-bottom: 128px;
          overflow: hidden;
          width: 1px;
          will-change: transform;
          transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.000833333, 0, 0, 0, 1);
        }

        .roadmap-step-left-content {
          display: flex;
          flex-basis: 0;
          flex-grow: 1;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 24px;
          max-width: 610px;
          overflow: hidden;
          padding-bottom: 128px;
          width: 1px;
          will-change: transform;
          transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.000833333, 0, 0, 0, 1);
        }

        .roadmap-step-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          width: 100px;
          align-self: stretch;
          flex-shrink: 0;
          overflow: hidden;
        }

        .roadmap-step-number-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          text-wrap: nowrap;
          white-space: pre;
          position: relative;
          will-change: transform;
          transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.000833333, 0, 0, 0, 1);
        }

        .roadmap-step-number {
          color: rgb(255, 255, 255);
          font-family: Inter, sans-serif;
          font-size: 64px;
          font-weight: 700;
          letter-spacing: -0.5px;
          line-height: 76.8px;
          text-wrap: nowrap;
          white-space: pre;
          margin: 0;
        }

        .roadmap-step-bar-container {
          background-color: rgba(255, 255, 255, 0.05);
          flex-basis: 0;
          flex-grow: 1;
          gap: 0;
          height: 1px;
          overflow: hidden;
          width: 3px;
          z-index: 0;
          position: relative;
        }

        .roadmap-step-bar {
          background-color: rgb(255, 165, 69);
          height: 476.5px;
          width: 100%;
          overflow: hidden;
          position: relative;
          will-change: transform;
        }

        .roadmap-step-bar-center {
          background-color: rgb(255, 165, 69);
          height: 476.5px;
          left: 0;
          right: 0;
          top: 0;
          overflow: hidden;
          position: absolute;
          will-change: transform;
        }

        .roadmap-step-content-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          width: 100%;
          height: min-content;
          overflow: hidden;
        }

        .roadmap-step-label {
          color: rgb(255, 165, 69);
          font-family: Inter, sans-serif;
          letter-spacing: 0.5px;
          line-height: 18px;
          overflow-wrap: break-word;
          text-transform: uppercase;
          white-space: pre-wrap;
          word-break: break-word;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          margin: 0;
        }

        .roadmap-step-title {
          color: rgb(255, 255, 255);
          font-family: Inter, sans-serif;
          font-size: 36px;
          font-weight: 600;
          letter-spacing: -0.5px;
          line-height: 54px;
          overflow-wrap: break-word;
          white-space: pre-wrap;
          word-break: break-word;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          margin: 0;
        }

        .roadmap-step-description {
          color: rgba(255, 255, 255, 0.8);
          font-family: Inter, sans-serif;
          font-size: 16px;
          line-height: 19.2px;
          overflow-wrap: break-word;
          white-space: pre-wrap;
          word-break: break-word;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .roadmap-container {
            padding: 20px;
            padding-top: 40px;
            gap: 20px;
          }

          .roadmap-step {
            flex-direction: column;
            gap: 20px;
          }

          .roadmap-step-center {
            display: none;
          }

          .roadmap-step-left-content,
          .roadmap-step-left-empty {
            width: 100%;
            max-width: 100%;
            flex-basis: auto;
            flex-grow: 0;
            min-height: auto;
            padding-bottom: 20px;
          }

          .roadmap-title {
            font-size: 28px;
            line-height: 36px;
          }

          .roadmap-description {
            font-size: 14px;
            line-height: 18px;
          }

          .roadmap-step-number {
            font-size: 48px;
            line-height: 57.6px;
          }

          .roadmap-step-title {
            font-size: 24px;
            line-height: 32px;
          }
        }
      `}</style>

      <div className="roadmap-container">
        {/* Header Section */}
        <div className="roadmap-header">
          <h2 className="roadmap-title">
            {title}
            <br />
            {subtitle}
          </h2>
          <p className="roadmap-description">{description}</p>
          <a href={ctaHref} className="roadmap-cta-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
              style={{ color: 'rgb(19, 19, 19)' }}
            >
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
            <p className="roadmap-cta-text">{ctaText}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
              style={{ color: 'rgb(19, 19, 19)' }}
            >
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg>
          </a>
        </div>

        {/* Steps Container */}
        <div className="roadmap-steps-container">
          {steps.map((step, index) => {
            const isLeftContent = index % 2 === 1;

            return (
              <div key={index} className="roadmap-step">
                {/* Left Column */}
                {isLeftContent ? (
                  <div className="roadmap-step-left-content">
                    <div className="roadmap-step-content-group">
                      <p className="roadmap-step-label">{step.label}</p>
                      <h3 className="roadmap-step-title">{step.title}</h3>
                    </div>
                    <p className="roadmap-step-description">{step.description}</p>
                  </div>
                ) : (
                  <div className="roadmap-step-left-empty" />
                )}

                {/* Center Column - Number and Bar */}
                <div className="roadmap-step-center">
                  <div className="roadmap-step-number-wrapper">
                    <p className="roadmap-step-number">{step.number}</p>
                  </div>
                  <div className="roadmap-step-bar-container">
                    <div
                      className="roadmap-step-bar-center"
                      style={{
                        transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.000833333, 0, ${barTransforms[index]}, 0, 1)`,
                      }}
                    />
                  </div>
                </div>

                {/* Right Column */}
                {!isLeftContent ? (
                  <div className="roadmap-step-left-content">
                    <div className="roadmap-step-content-group">
                      <p className="roadmap-step-label">{step.label}</p>
                      <h3 className="roadmap-step-title">{step.title}</h3>
                    </div>
                    <p className="roadmap-step-description">{step.description}</p>
                  </div>
                ) : (
                  <div className="roadmap-step-left-empty" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
