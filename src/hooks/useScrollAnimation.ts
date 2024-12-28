import { useCallback } from 'react';

const useScrollAnimation = () => {
  const animate = useCallback(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px'
    });

    document.querySelectorAll('[data-animate="true"]').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return { animate };
};

export default useScrollAnimation;