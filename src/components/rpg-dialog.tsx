import React, { useEffect } from 'react';
import './rpg-dialog.css';
import { navigate } from 'astro:transitions/client';

interface RPGDialogProps extends React.ComponentProps<'dialog'> {
  cards: string[];
}

let closeText = 'This is cute, but just show me the full text please.';

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

  // Close button stuff
  const [showCloseTextButton, setShowCloseTextButton] =
    React.useState<boolean>(false);
  const [currentCloseText, setCurrentCloseText] = React.useState<string>('');
  const [currentCloseTextIndex, setCurrentCloseTextIndex] =
    React.useState<number>(0);
  useEffect(() => {
    if (currentIndex === 1) {
      setShowCloseTextButton(true);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (showCloseTextButton) {
      if (currentCloseTextIndex < closeText.length) {
        const timeout = setTimeout(() => {
          setCurrentCloseText(
            (prevText) => prevText + closeText[currentCloseTextIndex],
          );
          setCurrentCloseTextIndex((prevIndex) => prevIndex + 1);
        }, delay);

        return () => clearTimeout(timeout);
      }
    }
  }, [currentCloseTextIndex, delay, currentCloseText, showCloseTextButton]);

  const [showFullText, setShowFullText] = React.useState<boolean>(false);

  //reset on mount
  useEffect(() => {
    setShowFullText(false);
    setShowCloseTextButton(false);
  }, []);

  return (
    <section className='container'>
      {showCloseTextButton && !showFullText ? (
        <button className='close-button' onClick={() => setShowFullText(true)}>
          {currentCloseText}
        </button>
      ) : null}
      {showFullText ? (
        <article>
          {cards.map((card) => (
            <p key={card}>{card}</p>
          ))}
        </article>
      ) : (
        <button className='rpg-dialog' onClick={handleNext}>
          <span id='typed-text'>
            {currentIndex === 0 ? currentTypeText : currentCard}
          </span>
          {children}
        </button>
      )}
    </section>
  );
};

export default RPGDialog;
