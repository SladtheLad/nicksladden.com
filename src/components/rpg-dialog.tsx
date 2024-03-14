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

  // Reset the state when the component is unmounted
  useEffect(() => {
    setShowFullText(false);
    setShowCloseTextButton(false);
  }, []);

  return (
    <section className='container'>
      <div
        style={{
          visibility:
            showCloseTextButton || showFullText ? 'visible' : 'hidden',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '100%',
          position: 'absolute',
          top: '1rem',
        }}
      >
        <button
          className='play-button'
          onClick={() => setShowFullText((prev) => !prev)}
          aria-label={
            showFullText
              ? 'Play button to restart the RPG dialogue.'
              : 'Close button to end the dialogue and read full text'
          }
        >
          {showCloseTextButton && !showFullText ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-x'
            >
              <path d='M18 6 6 18' />
              <path d='m6 6 12 12' />
            </svg>
          ) : showFullText ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-play'
            >
              <polygon points='6 3 20 12 6 21 6 3' />
            </svg>
          ) : null}
        </button>
        {showCloseTextButton && !showFullText ? (
          <p style={{ position: 'absolute', top: '4rem' }}>
            {currentCloseText}
          </p>
        ) : null}
      </div>
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
