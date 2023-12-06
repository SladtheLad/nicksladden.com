import React, { useEffect, useState } from 'react';
import styles from './walkthrough.module.css';

const ScrollRevealText = ({ text }: { key: string; text: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles['scroll-reveal-text']} ${
        isVisible ? styles.show : ''
      }`}
    >
      <p>{text}</p>
    </div>
  );
};

export default ScrollRevealText;
