interface HTMLObject {
  header: string[];
  main: string[];
  resultsBox: string[];
  footer: string[];
  myName: string[];
}

const htmlElements: HTMLObject = {
  header: [
    'You clicked the header',
    'You clicked the header, again',
    "Don't you know this is the header already?",
  ],
  main: ['You clicked the main', 'You clicked the main again', 'THIS IS THE MAIN ELEMENT!'],
  resultsBox: [
    'You clicked the text container',
    'You clicked the TEXT container',
    'You clicked a area where text is contained.',
  ],
  footer: [
    'You clicked footer',
    'You clicked the foot of the website',
    'You clicked the bottom part of the website, aka footer.',
  ],
  myName: [
    'You clicked my name',
    'You clicked a Finish name',
    'I have a github you know, you could just go there to find out about me: @/idamakela',
  ],
};

export default htmlElements;
