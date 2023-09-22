const MouseTracker = () => {
  return (
    <main className='flex-grow text-center flex flex-col items-center justify-center'>
      <div className='borderBase p-2'>
        <h3 className='capitalize text-2xl underline underline-offset-8 font-medium'>
          click me!
        </h3>
        <p>
          Click anywhere on the screen to find out where the mouse is
          positioned.
        </p>
        <div className='borderBase m-2 bg-paleBlue'>
          <h4 className='uppercase text-lg font-medium'>results</h4>
          <p>you clicked the button</p>
        </div>
      </div>
    </main>
  );
};

export default MouseTracker;
