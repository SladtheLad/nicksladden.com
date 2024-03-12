import React, { useEffect } from 'react';

interface RPGDialogProps extends React.ComponentProps<'dialog'> {
  cards: string[];
}

const RPGDialog = ({ cards, children, ...props }: RPGDialogProps) => {
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
    <dialog
      open
      role='button'
      className='rpg-dialog'
      {...props}
      onClick={handleNext}
    >
      <div id='typed-text'>
        {currentIndex === 0 ? currentTypeText : currentCard}
      </div>
      {children}
    </dialog>
  );
};

export default RPGDialog;
