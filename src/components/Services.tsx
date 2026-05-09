'use client';
import React, { useEffect, useRef, useState } from 'react';

interface ServicesProps {
  onScrollTo: (id: string) => void;
}

export default function Services({ onScrollTo }: ServicesProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll('.reveal, .reveal-left');
            reveals.forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      number: '01', title: 'WordPress Development',
      desc: 'Custom WordPress solutions tailored to your business needs. From simple blogs to complex enterprise websites, we bring your vision to life with pixel-perfect designs.',
      tags: ['Custom Theme Development', 'Plugin Integration', 'Performance Optimization', 'Responsive Design'],
      color: '#FF8200',
      icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>),
    },
    {
      number: '02', title: 'E-commerce Development',
      desc: 'Build powerful online stores that convert visitors into customers. Secure, scalable e-commerce platforms with intuitive shopping experiences and robust payment integrations.',
      tags: ['WooCommerce Solutions', 'Payment Gateway Integration', 'Inventory Management', 'Mobile Commerce'],
      color: '#FF6711',
      icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" /></svg>),
    },
    {
      number: '03', title: 'Real Estate Websites',
      desc: 'Showcase properties with stunning real estate websites. Advanced search functionality, virtual tours, and lead management systems designed specifically for the real estate industry.',
      tags: ['Property Listings', 'IDX Integration', 'Lead Management', 'Virtual Tours'],
      color: '#FF8200',
      icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>),
    },
    {
      number: '04', title: 'Social Media Marketing',
      desc: "Amplify your brand's voice across all social platforms. Data-driven strategies that engage your audience, build community, and drive measurable results for your business.",
      tags: ['Content Strategy', 'Campaign Management', 'Analytics & Reporting', 'Community Engagement'],
      color: '#FF6711',
      icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>),
    },
    {
      number: '05', title: 'Online Reputation Management',
      desc: 'Protect and enhance your online presence. Monitor, manage, and improve how your brand is perceived across the digital landscape with proactive reputation strategies.',
      tags: ['Review Management', 'Brand Monitoring', 'Crisis Management', 'Reputation Repair'],
      color: '#FF8200',
      icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>),
    },
    {
      number: '06', title: 'Graphic Design',
      desc: 'Create stunning visual identities that captivate your audience. From logos to complete brand systems, we design graphics that communicate your message effectively and memorably.',
      tags: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'UI/UX Design'],
      color: '#FF6711',
      icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /></svg>),
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="relative py-32 px-8 md:px-20 overflow-hidden" style={{ background: '#fafaf9' }}>
      <div className="absolute" style={{ bottom: '10%', left: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(255, 130, 0, 0.05)', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div className="max-w-7xl mx-auto">
        <div className="mb-20 reveal">
          <div className="section-label">Our Services</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="display-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', maxWidth: '600px' }}>
              Our Craft,
              <br />
              <span style={{ color: '#8a8f8d' }}>Your Expression.</span>
            </h2>
            <p className="body-text" style={{ fontSize: '1rem', maxWidth: '360px', lineHeight: 1.7 }}>
              Comprehensive digital solutions tailored to your business needs. From concept to launch, we&apos;ve got you covered.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          {services.map((service, i) => (
            <div key={service.number} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <div
                className="group flex flex-col md:flex-row md:items-start gap-6 py-8 cursor-pointer"
                style={{ borderTop: '1px solid rgba(138,143,141,0.2)', transition: 'all 0.3s ease-out' }}
                onMouseEnter={() => setActiveService(i)}
                onMouseLeave={() => setActiveService(null)}
              >
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: 400, color: activeService === i ? '#FF8200' : '#8a8f8d', letterSpacing: '0.1em', minWidth: '40px', transition: 'color 0.3s ease-out', paddingTop: '0.2rem' }}>
                  {service.number}
                </span>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: activeService === i ? 'rgba(255,130,0,0.1)' : 'rgba(138,143,141,0.08)', border: `1px solid ${activeService === i ? 'rgba(255,130,0,0.25)' : 'rgba(138,143,141,0.2)'}`, color: activeService === i ? '#FF8200' : '#8a8f8d', transition: 'all 0.3s ease-out' }}
                >
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', fontWeight: 500, color: '#111822', marginBottom: '0.75rem', lineHeight: 1.2, transition: 'color 0.3s ease-out' }}>
                    {service.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#8a8f8d', lineHeight: 1.7, maxWidth: '500px', marginBottom: '1rem' }}>
                    {service.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: activeService === i ? '#FF8200' : '#8a8f8d', padding: '0.3rem 0.8rem', border: `1px solid ${activeService === i ? 'rgba(255,130,0,0.3)' : 'rgba(138,143,141,0.25)'}`, borderRadius: '2rem', transition: 'all 0.3s ease-out', letterSpacing: '0.04em' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ border: `1px solid ${activeService === i ? 'rgba(255,130,0,0.4)' : 'rgba(138,143,141,0.3)'}`, transition: 'all 0.3s ease-out', transform: activeService === i ? 'rotate(-45deg)' : 'rotate(0deg)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={activeService === i ? '#FF8200' : '#8a8f8d'} strokeWidth="2" style={{ transition: 'stroke 0.3s ease-out' }}>
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
          <div className="mdx-divider" />
        </div>

        <div className="mt-16 flex items-center justify-between reveal">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#8a8f8d' }}>
            Ready to transform your digital presence?
          </p>
          <button onClick={() => onScrollTo('contact')} className="btn-cta">
            <div className="btn-bg" />
            <span className="btn-text">GET STARTED</span>
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
