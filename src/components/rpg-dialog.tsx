import React from 'react';

interface RPGDialogProps extends React.ComponentProps<'dialog'> {
  cards: string[];
}

const RPGDialog = ({ cards, children, ...props }: RPGDialogProps) => {
  const [currentCard, setCurrentCard] = React.useState<string>(cards[0] || '');

  const handleNext = () => {
    const currentIndex = cards.indexOf(currentCard);
    if (currentIndex < cards.length - 1) {
      setCurrentCard(cards[currentIndex + 1]);
    }
  };

  return (
    <dialog
      open
      role='button'
      className='rpg-dialog'
      {...props}
      onClick={handleNext}
    >
      {currentCard}
      {children}
    </dialog>
  );
};

export default RPGDialog;
