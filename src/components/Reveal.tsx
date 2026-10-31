import { useEffect, useRef } from 'react';
import type { PropsWithChildren } from 'react';

export function Reveal({ children, className = '', delay = 0 }: PropsWithChildren<{ className?: string; delay?: number }>) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!('IntersectionObserver' in window)) { node.dataset.visible = 'true'; return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { node.dataset.visible = 'true'; observer.unobserve(node); }
    }, { threshold: 0.08, rootMargin: '0px 0px 30px 0px' });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}
