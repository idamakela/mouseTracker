const findClickedElement = (e : any): any => {
    let targetId = e.target.id;
    console.log({ targetId });
};

export default findClickedElement;

/*
 * Find what element is clicked
 * Target that element, and display it in the UI
 * If it is clicked more than once, display correct string
 *
 * Handle display correct item in MouseTracker
 * Handle see what is clicked in App, must send props
 */