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
        className='rpg-close-container'
        style={{
          visibility:
            showCloseTextButton || showFullText ? 'visible' : 'hidden',
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
          <p>{currentCloseText}</p>
        ) : null}
      </div>
      {showFullText ? (
        <article>
          <p>
            Howdy! I'm Nick. I'm a UX Engineer. I code for a living, but I came
            to this industry a bit later in life than many.
          </p>
          <p>
            See, I am one of the large population of millennials and GenX kids
            that can be labeled 'polymaths', not necessarily out of genuine
            desire, but out of the necessity to succeed in an education system
            geared towards going to top colleges and figuring out your life's
            goals before you were even a teenager.
          </p>
          <p>
            For many of us, this caused a lot of self-doubt, imposter syndrome,
            fears of failure if you were not immediately good at something, and
            all the other side effects associated with an unhealthy drive for
            perfectionism.
          </p>
          <p>
            This means that I've picked up innumerable hobbies, interests, and
            career paths but have stayed with very few for long.
          </p>
          <p>
            I stopped playing tennis almost immediately going into college. I
            don't even remember why, but I deeply regret it because getting back
            into it as a solo adult has been so hard.
          </p>
          <p>
            I then dreamed of becoming an opera singer. I had been in the school
            choir since grade school and eventually became state-ranked for
            vocal performance in high school. I decided to go to college for
            this and become classically trained.
          </p>
          <p>I dropped out after the first year.</p>
          <p>
            When singing didn't work out, I struggled with what to do next. I
            eventually decided that I liked philosophy enough to become a career
            academic. I returned to college and pursued this through a master's
            degree.
          </p>
          <p>
            I then realized I had no interest in spending my life arguing with
            predominantly old men, so my dream of being a Nietzsche scholar in
            Germany would remain a dream.
          </p>
          <p>
            I struggled for a few years with what to do after finishing my
            master's. Some unexpected events, the life-altering kind,
            exacerbated this struggle. My father fell ill, and I spent a few
            years driving back and forth from Houston to DFW to help take care
            of him before he finally passed in 2016.
          </p>
          <p>
            My wife developed multiple illnesses that made her disabled, and
            thus me her caretaker. Since we live in the US, finding reliable
            employment is essential for getting access to healthcare.
          </p>
          <p>
            I briefly dabbled with coding in 2015 while training to become a
            technical writer. I helped manage the WordPress site for the person
            I was apprenticing with and was introduced to the basics of HTML,
            CSS, and FTPs for the web.
          </p>
          <p>
            In 2017, I saw an ad for a coding boot camp and it finally clicked.
            This had to be the path to the financial and, thus, health security
            we needed. With the help of my mother, who helped pay for the boot
            camp, I took that six-month course to learn full-stack web
            development.
          </p>
          <p>
            I won't dive into the issues related to boot camps; however, I was
            lucky to have joined an organization that wasn't sketchy. Still, the
            only reason I and a small subset of people were successful
            throughout the course is that I realized early on that learning
            coding or anything in tech, was more about learning how to be
            self-sufficient and fostering the desire to self-research and
            self-learn, rather than building some kind of encyclopedic knowledge
            of various technologies.
          </p>
          <p>
            This specific skill set (mindset, really) has led me to make this
            new website for myself, using web tech I have not used before. I am
            putting myself back out there to try to get through our industry's
            current employment tumult.
          </p>
          <p>
            Thank you for reading. Hopefully, this monologue doesn't read as
            self-aggrandizing, more just a look into my motivations for getting
            into an industry that likes to fantasize about all of us as 'code
            ninjas' or whatever. In reality, most of us like tech, but it's not
            our entire being, and we are, in fact, 'doing it for the money' as
            the colloquialism goes. And that's just as valid as any other
            reason, despite what some may argue.
          </p>
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
