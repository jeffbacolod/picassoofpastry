import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply stagger delays to children before making visible
            if (entry.target.hasAttribute('data-stagger')) {
              const children = entry.target.querySelectorAll('[data-stagger-child]');
              children.forEach((child, i) => {
                child.style.setProperty('--stagger-delay', `${i * 100}ms`);
              });
            }
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });
}
