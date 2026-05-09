'use client';
import React, { useEffect, useRef } from 'react';

interface AboutProps {
  onScrollTo: (id: string) => void;
}

export default function About({ onScrollTo }: AboutProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll('.reveal, .reveal-left');
            reveals.forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: '◎',
      title: 'Results-Driven Approach',
      desc: 'Every project is built with your business goals in mind, ensuring measurable results and maximum ROI.',
    },
    {
      icon: '⚡',
      title: 'Lightning-Fast Delivery',
      desc: 'Quick turnaround times without compromising on quality. Your project launches when you need it.',
    },
    {
      icon: '◈',
      title: 'Client-First Philosophy',
      desc: 'Your satisfaction is my priority. Direct communication, transparent process, and unlimited revisions.',
    },
    {
      icon: '◉',
      title: '6+ Years of Excellence',
      desc: 'Proven track record with 70+ successful projects and 60+ happy clients across diverse industries.',
    },
    {
      icon: '◐',
      title: 'Post-Launch Support',
      desc: 'Continuous support after launch including regular updates, bug fixes, and feature enhancements.',
    },
    {
      icon: '◑',
      title: 'Security & Updates',
      desc: 'Regular security patches, WordPress core updates, and plugin maintenance to keep your site secure.',
    },
    {
      icon: '◒',
      title: '24/7 Availability',
      desc: 'Round-the-clock support to ensure your website runs smoothly and issues are resolved immediately.',
    },
    {
      icon: '◓',
      title: 'Lifetime Maintenance',
      desc: 'Ongoing maintenance packages to ensure your website stays current, secure, and performing optimally.',
    },
  ];

  return (
    <section
      id="why"
      ref={sectionRef}
      className="relative py-32 px-8 md:px-20 overflow-hidden"
      style={{ background: '#ffffff' }}
    >
      {/* Background accent */}
      <div
        className="absolute"
        style={{
          top: '10%',
          right: '-200px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'rgba(255, 130, 0, 0.04)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 reveal">
          <div className="section-label">Why Choose Me</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className="display-heading"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', maxWidth: '600px' }}
            >
              Made with Intention.
              <br />
              <span style={{ color: '#8a8f8d' }}>Meant to Be Felt.</span>
            </h2>
            <p
              className="body-text"
              style={{ fontSize: '1rem', maxWidth: '360px', lineHeight: 1.7 }}
            >
              Not just development — a complete partnership. From launch to growth, I&apos;m with you every step of the way.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="service-card reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                style={{
                  background: 'rgba(255, 130, 0, 0.08)',
                  border: '1px solid rgba(255, 130, 0, 0.15)',
                }}
              >
                <span style={{ fontSize: '1.1rem', color: '#FF8200' }}>{feature.icon}</span>
              </div>
              <h3
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  color: '#111822',
                  marginBottom: '0.75rem',
                  lineHeight: 1.3,
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.85rem',
                  color: '#8a8f8d',
                  lineHeight: 1.6,
                }}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex items-center justify-center reveal">
          <button
            onClick={() => onScrollTo('contact')}
            className="btn-cta"
          >
            <div className="btn-bg" />
            <span className="btn-text">LET&apos;S WORK TOGETHER</span>
            <span className="btn-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
