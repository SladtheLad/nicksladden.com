import React, { useEffect } from 'react';
import './rpg-dialog.css';
import { navigate } from 'astro:transitions/client';

interface RPGDialogProps extends React.ComponentProps<'dialog'> {
  cards: string[];
}

const RPGDialog = ({ cards, children }: RPGDialogProps) => {
  const [currentCard, setCurrentCard] = React.useState<string>(cards[0] || '');
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  const [currentTypeText, setCurrentTypeText] = React.useState<string>('');
  const [currentTypeTextIndex, setCurrentTypeTextIndex] =
    React.useState<number>(0);
  let delay = 25;

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentCard(cards[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
    }

    if (currentIndex === cards.length - 1) {
      navigate('/portfolio', { history: 'push' });
    }
  };

  useEffect(() => {
    if (currentIndex === 0) {
      if (currentTypeTextIndex < currentCard.length) {
        const timeout = setTimeout(() => {
          setCurrentTypeText(
            (prevText) => prevText + currentCard[currentTypeTextIndex],
          );
          setCurrentTypeTextIndex((prevIndex) => prevIndex + 1);
        }, delay);

        return () => clearTimeout(timeout);
      }
    }
  }, [currentTypeTextIndex, delay, currentTypeText, currentIndex]);

  return (
    <button className='rpg-dialog' onClick={handleNext}>
      <span id='typed-text'>
        {currentIndex === 0 ? currentTypeText : currentCard}
      </span>
      {children}
    </button>
  );
};

export default RPGDialog;
