'use client';

import React, { useState } from 'react';
import styles from './walkthrough.module.css';
import clsx from 'clsx';

interface Section {
  text: string;
}

interface WalkthroughProps {
  sections: Section[];
}

const Walkthrough: React.FC<WalkthroughProps> = ({ sections }) => {
  const [currentSection, setCurrentSection] = useState<number>(0);

  const handleSectionClick = (index: number) => {
    setCurrentSection(index);
  };
  return (
    <div className={styles.story}>
      {sections.map((section, index) => (
        <span
          key={index}
          className={clsx(
            styles.walkthrough_section,
            index === currentSection ? styles.highlighted : '',
          )}
          onClick={() => handleSectionClick(index)}
          onKeyUp={(event) => {
            console.log(event.key);
            if (event.key === ' ' || event.key === 'Enter') {
              setCurrentSection(index);
            }
          }}
          tabIndex={0}
        >
          {section.text}
        </span>
      ))}
    </div>
  );
};

export default Walkthrough;
