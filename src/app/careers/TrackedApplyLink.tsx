'use client';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface TrackedApplyLinkProps {
  href: string;
  source: string;
  className?: string;
  children: React.ReactNode;
}

const TrackedApplyLink = ({
  href,
  source,
  className,
  children,
}: TrackedApplyLinkProps) => {
  const trackApplyClick = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'careers_apply_click', {
        event_category: 'engagement',
        event_label: source,
        job_title: 'Executive — VR for Social Impact',
      });
    }
  };

  return (
    <a href={href} className={className} onClick={trackApplyClick}>
      {children}
    </a>
  );
};

export default TrackedApplyLink;
