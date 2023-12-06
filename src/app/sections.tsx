export interface Section {
  text: string;
  name: string;
}

export interface WalkthroughProps {
  sections: Section[];
}

export const sections: Section[] = [
  {
    text: `Howdy. I'm Nick. I'm a UX Engineer. I code for a living, but I came to this world a bit later in life.`,
    name: 'intro',
  },
  {
    text: `Ya see, I am one of the large population of millenials and GenX kids that can be considered 'polymaths'. 
    Not necessarily out of genuine innate inclination, but out of the necessity to succeed in an American education system all geared towards
    going to top colleges and figuring out your life's goals before you were even teenager. 
    This had the side effects of, for many of us, of causing a ton of self-doubt, imposter syndrome, 
    and fears of failure if you were not immediately good at something, and all the other side effects associated with an unhealthy drive for perfectionism.`,
    name: 'polymath',
  },
  {
    text: `For me, this meant I have picked up innumerable hobbies, interests, and career paths, but stuck with very few for long.`,
    name: 'transition',
  },
  {
    text: `When I was a kid, I fancied myself to be a tennis pro. I began when I was 8 and continued through highschool, becoming state ranked by the time I graduated. 
    I stopped playing tennis almost immediately going into college. I don't even remember why.`,
    name: 'tennis',
  },
  {
    text: `I then dreamed to become an opera singer going into college. 
    I had been in school choir since grade school and eventually became state ranked for vocal performance in highschool. 
    I decided to go to college for this and become a classically trained opera singer. I dropped out after the first year.`,
    name: 'singing',
  },
  {
    text: `When singing didn't work out, I struggled with what to 'do' next. 
    I went back to college to figure this out and I eventually had the notion I liked philosophy enough that I would become a career academic. 
    I stuck with this through a masters degree... and then realized I had no interest in spending my life arguing with predominately old men, so my dream of being a Nietzsche scholar in Germany would remain a dream. `,
    name: 'philosophy',
  },
];
