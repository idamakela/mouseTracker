const handleClickedElement = (e : any): any => {
    let targetId = e.target.id;
    console.log({ targetId });
};









export default handleClickedElement;

/*
 * Find what element is clicked - |DONE, but could be a better solution in ResultsBox|
 * Target that element, and display it in the UI - 
 * If it is clicked more than once, display correct string - 
 *
 * Handle display correct item in ResultsBox
 * Handle see what is clicked in App, must send props
 */