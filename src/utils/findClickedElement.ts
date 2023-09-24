const findClickedElement = ({ id, e }: any): any => {
  /*
   * Find what element is clicked
   * Target that element, and display it in the UI
   * If it is clicked more than once, display correct string
   *
   * Handle display correct item in MouseTracker
   * Handle see what is clicked in App, must send props
   */

  let id = e.target.id;

  console.log({ id });
};
