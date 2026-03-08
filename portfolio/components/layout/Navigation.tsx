'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Skills', href: '/skills' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Intersection Observer for scroll-spy
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          // Update active section within 100ms (handled by browser)
          setActiveSection(`/${sectionId === 'home' ? '' : sectionId}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all main sections
    const sections = document.querySelectorAll('main[id], section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // For same-page navigation, implement smooth scroll
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={cn('sticky top-0 z-50', className)}>
      <nav className="backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-2xl font-bold text-foreground font-serif hover:text-primary transition-colors"
            >
              Venu Gudipati
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={cn(
                    'text-foreground/80 hover:text-foreground transition-colors duration-100 relative',
                    'after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-100',
                    'hover:after:w-full',
                    activeSection === item.href && 'text-foreground after:w-full'
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-foreground p-2 hover:bg-accent rounded-md transition-colors"
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Drawer */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 animate-in slide-in-from-top duration-200">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={cn(
                      'text-foreground/80 hover:text-foreground hover:bg-accent px-4 py-2 rounded-md transition-colors',
                      activeSection === item.href && 'text-foreground bg-accent'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
