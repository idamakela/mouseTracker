interface HTMLObject {
  header: string[];
  main: string[];
  resultsBox: string[];
  footer: string[];
  myName: string[];
}

const HtmlElements: HTMLObject = {
  header: [
    'the header',
    'the header, again',
    "Don't you know this is the header already?",
  ],
  main: ['the main', 'the main again', 'THIS IS THE MAIN ELEMENT!'],
  resultsBox: [
    'the text container',
    'the TEXT container',
    'an area where text is contained...',
  ],
  footer: [
    'footer',
    'the foot of the website',
    'the bottom part of the website, aka footer.',
  ],
  myName: [
    'my name',
    'a Finish name',
    'I have a github you know, you could just go there to find out about me: @/idamakela',
  ],
};

export default HtmlElements;
